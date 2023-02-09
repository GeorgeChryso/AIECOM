export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID!
    title: String!
    author: String
    type: bookType
    similarBooks: [Book] # i can nest types
    rating: Int
  }

  type Movie{
    id: ID!
    name: String!
    yearP: Int!
    isGood: Boolean!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    bookbyID(id: ID!): Book
    movies:[Movie]
    moviebyName(name:String):Movie
  }


  input CreateBookInput{
    id: ID!
    title: String!
    author: String= KWSTAKOS # DEFAULT value
    type : bookType
  }

  input updateTitleInput{
    id:ID!
    title:String
  }

  type Mutation{
    createBook(id: ID, title: String): Book!
    ## OR i can create an Input and pass that 
    ## i m essentially passing a json object 
    createBook2(input: CreateBookInput):Book
    updateTitle(input: updateTitleInput):Book
    deleteBook(id:ID):[Book]

  }

  #enums binds the value of a characteristic 
  #so they can only be the  ones listed in enum
  enum bookType{
    HORROR
    SCIFI
    ADVENTURE
  }
  
`;

    