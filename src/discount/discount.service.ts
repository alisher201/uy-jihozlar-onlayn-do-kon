import { Injectable } from '@nestjs/common';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Discount, DiscountDocument } from './schema/discount.schema';
import { Model } from 'mongoose';

@Injectable()
export class DiscountService {
  constructor(@InjectModel(Discount.name) private discountModel:Model<DiscountDocument>){}
  create(createDiscountDto: CreateDiscountDto) {
    const {name,discount} = createDiscountDto
    const discount1 =new this.discountModel({name,discount})
    return discount1.save()
  }

  findAll() {
    const discount = this.discountModel.find().exec()
    return discount;
  }

  findOne(id: string) {
    return this.discountModel.findById(id).exec();
  }

  update(id: string, updateDiscountDto: UpdateDiscountDto) {
    return this.discountModel.findByIdAndUpdate(id, updateDiscountDto).exec();
  }

  remove(id: string) {
    return this.discountModel.findByIdAndDelete(id).exec();
  }
}
