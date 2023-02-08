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
    },
};

