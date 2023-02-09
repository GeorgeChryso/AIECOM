// main db data
const books = [
    {
      id:1,
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      id:2,
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

  

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {


    Query: {
      books: () => books,
      bookbyID:(parent, args)=>{
        // DB logic
        for(let i=0;i<books.length;i++)
          if(books[i].id==args.id)
            return books[i]
        return null
      },
      // movies:()=>,
      // moviebyNAME:(parent,args)=>{

      // }
    },

    Mutation:{
      createBook2:(parent,args)=>{
        // the input is already established as an argument in the 
        // typedefinition of createBook2
        const book=args.input //WHICH IS ALREADY A USER OBJECT   
        books.push(book)
        return book
      },
      updateTitle:(parent,args)=>{
        const {id,title}=args.input
        for(let i=0;i<books.length;i++)
          if(books[i].id==id){
            books[i].title=title
            return books[i]
          }
        console.log(books)
        return  {}
      },
      deleteBook:(parent,args)=>{
        let id=args.id
        for(let i=0;i<books.length;i++)
          if(books[i].id==id)
            books.splice(i,1)
        console.log(books)
        return books
      }
    },

    // I can even set resolvers for my dataset fields,
    // as in how i m gonna serve it
    Book:{
      rating:()=>{
          // logic to calculate the rating of a book
      }
    }
};

