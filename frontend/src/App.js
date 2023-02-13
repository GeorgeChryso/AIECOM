import './App.css';
import { useQuery, gql , useLazyQuery ,useMutation  } from '@apollo/client';
import React, { useState }from 'react';



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

const SEARCHBYID=gql`
    query bookbyID($id: ID!){
      bookbyID(id: $id){
        id
        title
        author
      }

    }

`
const ADDBOOK=gql`
  mutation createBook2($x:CreateBookInput ) {
    createBook2(input:$x) {
      id
      title
      author
    }
  }

`



function DisplayLocations() {

  const { loading, error, data ,refetch} = useQuery(GET_BOOKS);

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
  const [idSearched,setIdSearch]=useState("")
  const [fetcheroo, {data:idData,error:idError}]=useLazyQuery(SEARCHBYID)

  //create book state
  const [id,setId]=useState('')
  const [title,setTitle]=useState('')
  const [author,setAuthor]=useState('')
  const [createBook, {data:bookData,loading:bookLoading,error:bookErr}]=useMutation(ADDBOOK)
  
  return (
    <div className="App">
      HI
      <DisplayLocations/>

      <div>
        <input type="text" onChange={e=>{setIdSearch(e.target.value)}}></input>
        <button onClick={()=>fetcheroo({variables:{id:idSearched}})}> Search by  ID</button>
        <div> 
          {idData && idData.bookbyID && 
           (<div>
              <h1>id:{idData.bookbyID.id}</h1>
              <h1>title:{idData.bookbyID.title}</h1>
              <h1>author:{idData.bookbyID.author}</h1>
            </div>)}
        </div>
      </div>

      
      
      <div>
        <input type="text" placeholder="id" onChange={e=>{setId(e.target.value)}}></input>
        <input type="text" placeholder="title" onChange={e=>{setTitle(e.target.value)}}></input>
        <input type="text" placeholder="author" onChange={e=>{setAuthor(e.target.value)}}></input>
        <button onClick={()=>createBook({variables:{x:{id:id,title:title,author:author}}})}>Add Book</button>

            
      </div>

    </div>
  );
}

export default App;
