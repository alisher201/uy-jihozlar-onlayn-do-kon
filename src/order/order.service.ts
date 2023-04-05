import { Order, OrderDocument } from './schema/order.schema';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { timeStamp } from 'console';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel : Model<OrderDocument>){}
  create(createOrderDto: CreateOrderDto) {
    const {card_id,deliver_id,payment_id} = createOrderDto;
    const order =new  this.orderModel({card_id,deliver_id,payment_id})
    return order;
  }

  findAll() {
    const order = this.orderModel.find()
    return order;
  }

  findOne(id: string) {
    return this.orderModel.findById(id);
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.orderModel.findByIdAndUpdate(id,updateOrderDto);
  }

  remove(id: string) {
    return this.orderModel.findByIdAndDelete(id);
  }
}
