import { HydratedDocument } from 'mongoose';
import { Schema, SchemaFactory } from "@nestjs/mongoose";

export type CardDocument = HydratedDocument<Card>
@Schema()
export class Card {
    product_id: string;
    user_id: string;
    price:number;
    quantity:number;
}
export const CardSchema = SchemaFactory.createForClass(Card);
