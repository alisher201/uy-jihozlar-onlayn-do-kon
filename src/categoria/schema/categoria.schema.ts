import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CategoriaDocument = HydratedDocument<Categoria>
@Schema()
export class Categoria {
    @Prop()
    name:string;
}
export const  CategoriaSchema = SchemaFactory.createForClass(Categoria)