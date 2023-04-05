import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schema/product.schema';
import {Model} from 'mongoose'
@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel:Model<ProductDocument>){}
  create(createProductDto: CreateProductDto) {
    const {name,photo,price,categoria_id,status_id,discount_id} = createProductDto
    const product = new this.productModel({name,photo,price,categoria_id,status_id,discount_id})
    return product;
  }

  findAll() {
    const product = this.productModel.find()
    return product;
  }

  findOne(id: string) {
    return this.productModel.findById(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, updateProductDto);
  }

  remove(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}
