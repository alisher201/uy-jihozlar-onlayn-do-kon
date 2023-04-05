import { Payment, PaymentDocument } from './Schema/payment.schema';
import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
@Injectable()
export class PaymentService {
  constructor(@InjectModel(Payment.name) private  paymentModel: Model<PaymentDocument>){}
  create(createPaymentDto: CreatePaymentDto) {
    const { payment} = createPaymentDto;
    const pay =new this.paymentModel({payment})
    return pay;
  }

  findAll() {
    const payment = this.paymentModel.find()
    return payment
}

  findOne(id: string) {
    return this.paymentModel.findById(id);
  }

  update(id: string, updatePaymentDto: UpdatePaymentDto) {
    return this.paymentModel.findByIdAndUpdate(id, updatePaymentDto);
  }

  remove(id: string) {
    return this.paymentModel.findByIdAndDelete(id);
  }
}
