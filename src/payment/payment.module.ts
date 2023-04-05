import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { Payment, PaymentSchema } from './Schema/payment.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Payment.name,schema:PaymentSchema}])],
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class PaymentModule {}
