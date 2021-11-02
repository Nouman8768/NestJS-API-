import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Schema as MongoSchema } from "mongoose";

@Schema()
export class BookSchema {
    @Prop({ type: MongoSchema.Types.String, required: true, unique: true })
    title: String
    @Prop({ type: MongoSchema.Types.String, required: true })
    author: String
    @Prop({ type: MongoSchema.Types.Number, required: true })
    price: Number
}

export const bookschema = SchemaFactory.createForClass(BookSchema);
export type BookDocument = BookSchema & Document;