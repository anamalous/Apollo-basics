import { DataSource } from 'apollo-datasource';
import { connect } from 'mongoose';
import BModel from "./bookmodel.js";

class Book extends DataSource {
  
  constructor() {
    super();
    this.bookmodel=BModel;
  }

  async initialize(config) {
    this.context = config.context;
    const url = "mongodb+srv://nodeuser:password01@theshelf.h91emtu.mongodb.net/?retryWrites=true&w=majority";
    await connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });
  }

  async getAllBooks(){
    return this.bookmodel.find({name:/^/}).then(
      function(docs){
        return docs;
      }
    );
  }

  async getBook({bname}){
    return this.bookmodel.find({ name: bname }).then(
      function (docs) {
        return docs[0];
      }
    );
  }

  async addBook({bname,author,pages}){
    const at = new this.bookmodel({ name: bname ,author:author,pages:pages});
    await at.save();
    return at;
  }
}
export default Book;