import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

export type OrderDocument = HydratedDocument<Order>

@Schema()
export class Order {
    @Prop()
    card_id:number
    @Prop()
    deliver_id:number
    @Prop()
    payment_id:number
}
export  const OrderSchema = SchemaFactory.createForClass(Order)