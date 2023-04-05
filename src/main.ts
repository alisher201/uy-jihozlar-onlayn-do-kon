import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder,  } from '@nestjs/swagger';

async function start() {
  try{
    const app = await NestFactory.create(AppModule);  
    const PORT = process.env.PORT || 5000;
    app.setGlobalPrefix('api');

    await app.listen(PORT,()=>{
      console.log(`Server ${PORT} -- portda ishga tushdi`);
    });
  }catch(err){
    console.log(err);
  }
}
start();