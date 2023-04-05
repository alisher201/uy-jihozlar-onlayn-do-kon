import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Status, StatusDocument } from './schema/status.schema';
import {Model} from 'mongoose'
@Injectable()
export class StatusService {
  constructor(@InjectModel(Status.name) private statusModel: Model<StatusDocument>) {}
 async  create(createStatusDto: CreateStatusDto) {
    const {quantity} = createStatusDto
    const status =new  this.statusModel({quantity})
    return status.save();
  }

  findAll() {
    const status = this.statusModel.find().exec()
    return status
  }

  findOne(id: string) {
    return this.statusModel.findById(id).exec();
  }

  update(id: string, updateStatusDto: UpdateStatusDto) {
    return this.statusModel.findByIdAndUpdate(id, updateStatusDto).exec();
  }

  remove(id: string) {
    return this.statusModel.findByIdAndDelete(id).exec();
  }
}
