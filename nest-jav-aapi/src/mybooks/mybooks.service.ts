import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDocument, BookSchema } from './bookschema';

@Injectable()
export class MybooksService {
    constructor(@InjectModel(BookSchema.name) private readonly bookModel: Model<BookDocument>) { }

    async getallbooks(): Promise<BookSchema[]> {
        return this.bookModel.find();
    }
    async addbooks(book: any) {
        const newBook = new this.bookModel(book);
        return newBook.save();
    }
    async updatebook(id: string, book: BookDocument) {
        return await this.bookModel.findByIdAndUpdate(id, book);
    }

    async updatepatch(id: string, book: BookDocument) {
        return await this.bookModel.findByIdAndUpdate(id, book);
    }

    async deletebook(id: string) {
        await this.bookModel.findByIdAndDelete(id);
    }
}
