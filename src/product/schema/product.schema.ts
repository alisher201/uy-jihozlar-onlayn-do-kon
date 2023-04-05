import { HydratedDocument } from 'mongoose';
import { Schema, SchemaFactory } from "@nestjs/mongoose";
export type ProductDocument = HydratedDocument<Product>
@Schema()
export class Product {
    name: string;
    photo: string;
    price:number;
    categoria_id:number;
    status_id:number;
    skidka_id:number;
}
export const ProductSchema =SchemaFactory.createForClass(Product); 