import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { DiscountModule } from './discount/discount.module';
import { CategoriaModule } from './categoria/categoria.module';
import { PaymentModule } from './payment/payment.module';
import { DeliverModule } from './deliver/deliver.module';
import { OrderModule } from './order/order.module';
import { CardModule } from './card/card.module';
import { StatusModule } from './status/status.module';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';
import { CustomerAdressModule } from './customer_adress/customer_adress.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    AdminModule,
    DiscountModule,
    CategoriaModule,
    PaymentModule,
    DeliverModule,
    OrderModule,
    CardModule,
    StatusModule,
    CustomerModule,
    ProductModule,
    CustomerAdressModule,
    ],
    controllers: [],
    providers: [],
  })
  export class AppModule {}