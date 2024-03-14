import { Schema,model } from 'mongoose';
const bookSchema=Schema({
    name: String,
    author: String,
    pages: Number
  });
const BModel=model("Books",bookSchema);

export default BModel;