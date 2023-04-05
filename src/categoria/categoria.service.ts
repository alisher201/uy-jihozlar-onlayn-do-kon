import { Categoria, CategoriaDocument } from './schema/categoria.schema';
import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectModel } from '@nestjs/mongoose';
import  {Model} from 'mongoose'
@Injectable()
export class CategoriaService {
  constructor(@InjectModel(Categoria.name) private categoriaModel:Model<CategoriaDocument>){}
  create(createCategoriaDto: CreateCategoriaDto) {
    const {name} = createCategoriaDto
    const categoria = new this.categoriaModel({name})
    return categoria.save()
  }

  findAll() {
    const categoria = this.categoriaModel.find()
    return categoria.exec();
  }

  findOne(id: string) {
    return this.categoriaModel.findById(id).exec();
  }

  update(id: string, updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriaModel.findByIdAndUpdate(id, updateCategoriaDto).exec();
  }

  remove(id:string) {
    return this.categoriaModel.findByIdAndDelete(id).exec();
  }
}
