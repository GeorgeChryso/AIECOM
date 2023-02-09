import './App.css';
import { useQuery, gql } from '@apollo/client';



// sample gql query
const GET_BOOKS = gql`
  query books {
    books {
      id
      title
      author
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.books.map(({ id, title, author}) => (
    <div key={id}>
      <h3>{title}</h3>
      <br />
      <b>About this author: {author}</b>
      <br />
    </div>
  ));
}



function App() {
  return (
    <div className="App">
      HI
      <DisplayLocations/>
      
    </div>
  );
}

export default App;
