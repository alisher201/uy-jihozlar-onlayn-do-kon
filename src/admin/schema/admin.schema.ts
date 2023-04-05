import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type AdminDocument = HydratedDocument<Admin>
@Schema()
export class Admin {
    @Prop()
    name:string;

    @Prop()
    email:string;
   
    @Prop()
    hashed_password:string;
    @Prop()
    is_create:boolean
    @Prop()
    is_active:boolean
    @Prop()
    hashed_refresh_token:string


}
export const AdminSchema = SchemaFactory.createForClass(Admin);

