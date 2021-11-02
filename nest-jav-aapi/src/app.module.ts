import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MybooksModule } from './mybooks/mybooks.module';



@Module({
  imports: [MybooksModule, MongooseModule.forRoot('mongodb://localhost:27017/BookDB')],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule { }
