import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Card, CardDocument } from './schema/card.schema';
import {Model} from "mongoose"
import { exec } from 'child_process';
@Injectable()
export class CardService {
  constructor(@InjectModel(Card.name) private cardModel: Model<CardDocument>){}
  async create(createCardDto: CreateCardDto) {
    const {product_id, user_id, price,quantity} = createCardDto
    const card = new this.cardModel({product_id, user_id, price,quantity})
    return card.save();
  }

  findAll() {
    const card = this.cardModel.find().exec()
    return card;
  }

  findOne(id: string) {
    return this.cardModel.findById(id).exec();
  }

  update(id: string, updateCardDto: UpdateCardDto) {
    return this.cardModel.findByIdAndUpdate(id,updateCardDto).exec();
  }

  remove(id: string) {
    return this.cardModel.findByIdAndDelete(id).exec();
  }
}
