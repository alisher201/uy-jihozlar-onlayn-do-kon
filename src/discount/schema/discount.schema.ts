import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type DiscountDocument = HydratedDocument<Discount>
@Schema()
export class Discount {
    @Prop()
    name: string;
   @Prop()
    discount:number;
}
export const DiscountSchema = SchemaFactory.createForClass(Discount)