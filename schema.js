import { gql } from 'apollo-server';

const typeDefs = gql`
  # Your schema will go here
  type Book {
    id: ID!
    name: String
    author: String
    pages: Int
  }
  
  type User{
    id:ID!,
    name:String
  }

  type Query {
    users:[User]!
    getUser(id:ID!):User!
    books: [Book]!
    getBook(name: String): Book!
  }

  type Mutation{
    addBook(name:String,author:String,pages:Int):Book
    addUser(id:Int,name:String):User
    delUser(id:Int):String
  }
`;

export default typeDefs;