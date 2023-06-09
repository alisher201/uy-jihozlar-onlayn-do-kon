import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { Categoria, CategoriaSchema } from './schema/categoria.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Categoria.name,schema:CategoriaSchema}])],
  controllers: [CategoriaController],
  providers: [CategoriaService]
})
export class CategoriaModule {}
