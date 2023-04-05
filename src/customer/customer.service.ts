import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Customer, CustomerDocument } from './schema/customer.schema';
import {Model} from 'mongoose'

@Injectable()
export class CustomerService {
  constructor(@InjectModel(Customer.name) private customerModel:Model<CustomerDocument>){}
  create(createCustomerDto: CreateCustomerDto) {
    const {name,email,password,phone}  = createCustomerDto
    const customer =new this.customerModel({name,email,password,phone})
    return customer;
  }

  findAll() {
    const customer = this.customerModel.find().exec()
    return customer;
  }

  findOne(id: string) {
    return this.customerModel.findById(id);
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.customerModel.findByIdAndUpdate(id, updateCustomerDto);
  }

  remove(id: string) {
    return this.customerModel.findByIdAndDelete(id);
  }
}
