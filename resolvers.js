const resolvers = {
    Query: {
      books: (_, __, { dataSources }) =>
        dataSources.book.getAllBooks(),
      getBook: (_, { name }, { dataSources }) =>
        dataSources.book.getBook({ bname: name }),
      users:(_,__,{dataSources})=>
      dataSources.user.getAllUsers(),
      getUser:(_,{id},{dataSources})=>
      dataSources.user.getUser({id:id})
    },
    Mutation:{
      addBook:(_,{name,author,pages},{dataSources})=>
      dataSources.book.addBook({bname:name,author:author,pages:pages}),
      addUser:(_,{id,name},{dataSources})=>
      dataSources.user.addUser({uid:id,uname:name}),
      delUser:(_,{id},{dataSources}) =>
      dataSources.user.delUser({uid:id})
    }
  };
  export default resolvers;