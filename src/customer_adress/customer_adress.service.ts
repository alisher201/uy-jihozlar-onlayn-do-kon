import { CustomerAdress } from './schema/customer_adress.schema';
import { Injectable } from '@nestjs/common';
import { CreateCustomerAdressDto } from './dto/create-customer_adress.dto';
import { UpdateCustomerAdressDto } from './dto/update-customer_adress.dto';
import { InjectModel } from '@nestjs/mongoose';
import { CustomerAdressDocument } from './schema/customer_adress.schema';
import {Model} from 'mongoose'
@Injectable()
export class CustomerAdressService {
  constructor(@InjectModel(CustomerAdress.name) private customerAdressModel: Model<CustomerAdressDocument>){}
  create(createCustomerAdressDto: CreateCustomerAdressDto) {
    const {user_id,location} = createCustomerAdressDto
    const customeradress =new this.customerAdressModel({user_id,location})
    return customeradress;
  }

  findAll() {
    const customer = this.customerAdressModel.find();
    return customer
  }

  findOne(id: string) {
    return this.customerAdressModel.findById(id);
  }

  update(id:string, updateCustomerAdressDto: UpdateCustomerAdressDto) {
    return this.customerAdressModel.findByIdAndUpdate(id, updateCustomerAdressDto);
  }

  remove(id: string) {
    return this.customerAdressModel.findByIdAndDelete(id);
  }
}
