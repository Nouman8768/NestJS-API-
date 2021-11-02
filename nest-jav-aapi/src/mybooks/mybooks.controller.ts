import { Body, Controller, Get, Param, Put, Post, Delete, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookDocument } from './bookschema';
import { MybooksService } from './mybooks.service';

@ApiTags('Books')//swagger HeadTag
@Controller('mybooks')
export class MybooksController {
    constructor(private bookservice: MybooksService) { }
    @Get()
    getallbooks() {
        return this.bookservice.getallbooks();
    }
    @Post()
    async addbooks(
        @Body() book: any,) {
        const bookadd = await this.bookservice.addbooks(book);
        return bookadd;
    }


    @Put(':id')
    async updatebook(@Param('id') bookid: string, @Body() book: BookDocument) {
        const bookupdate = await this.bookservice.updatebook(bookid, book);
        return bookupdate;
    }

    @Patch(':id')
    async updatepatch(@Param('id') bookid: string, @Body() book: BookDocument) {
        const patchupdate = await this.bookservice.updatepatch(bookid, book)
        return patchupdate;
    }

    @Delete(':id')
    async deletebook(@Param('id') bookid: string) {
        await this.bookservice.deletebook(bookid);

    }


}
