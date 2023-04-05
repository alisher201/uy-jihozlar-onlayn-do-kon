import { Injectable } from '@nestjs/common';
import { CreateDeliverDto } from './dto/create-deliver.dto';
import { UpdateDeliverDto } from './dto/update-deliver.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Deliver, DeliverDocument } from './schema/deliver.schema';
import {Model} from 'mongoose'
@Injectable()
export class DeliverService {
  constructor(@InjectModel(Deliver.name) private deliverModel:Model<DeliverDocument>){}
  async create(createDeliverDto: CreateDeliverDto) {
    const {name} = createDeliverDto
    const deliver = new this.deliverModel({name})
    return await deliver.save();
  }

  findAll() {
    const deliver = this.deliverModel.find().exec()
    return deliver
}

  findOne(id: string) {
    return this.deliverModel.findById(id).exec();
  }

  update(id: string, updateDeliverDto: UpdateDeliverDto) {
    return this.deliverModel.findByIdAndUpdate(id, updateDeliverDto).exec();
  }

  remove(id: string) {
    return this.deliverModel.findByIdAndDelete(id).exec();
  }
}
