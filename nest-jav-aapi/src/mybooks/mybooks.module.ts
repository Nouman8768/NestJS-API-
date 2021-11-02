import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { bookschema, BookSchema } from './bookschema';
import { MybooksController } from './mybooks.controller';
import { MybooksService } from './mybooks.service';

@Module({
  imports:[MongooseModule.forFeature([
    {
      name: BookSchema.name,schema:bookschema
    }]
    )],
  controllers: [MybooksController],
  providers: [MybooksService]
})
export class MybooksModule {}
