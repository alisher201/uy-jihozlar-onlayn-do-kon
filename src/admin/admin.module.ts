import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Admin, AdminSchema } from './schema/admin.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Admin.name,schema:AdminSchema}])],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
