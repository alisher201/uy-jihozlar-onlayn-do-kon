import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Admin, AdminDocument } from './schema/admin.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private adminModel:Model<AdminDocument>){}
 async create(createAdminDto: CreateAdminDto) {
    const {name,email,hashed_password} = createAdminDto
    const hash = await bcrypt.hash(hashed_password,10)
    const admin =await  this.adminModel.create({name:name,email:email,hashed_password:hash})
    return await admin.save();
  }

  findAll() {
    const  admin = this.adminModel.find().exec()
    return admin;
  }

  findOne(id: string) {
    return this.adminModel.findById(id);
  }

  update(id: string, updateAdminDto: UpdateAdminDto) {
    return this.adminModel.findByIdAndUpdate(id, updateAdminDto);
  }

  remove(id: string) {
    return this.adminModel.findByIdAndDelete(id);
  }
}
