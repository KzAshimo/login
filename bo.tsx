import { response } from "express";
import { useEffect, useState } from "react";
const API_URL = 'http://localhost:3000/';

interface Express{
  id:number,
  username:string,
  password:string,
  group:number
}

const App = () =>{
const [express,setExpress] = useState<Express>[]>([]);

useEffect(() =>{
  fetch(API_URL).then(
    (responseData) =>{
      return responseData.json();
    }
  ).then(
    (result) =>{setExpress(result)}
  )
},[])

  return(
    <>
    <h1>ji</h1>
    <div>
      {express.map((exile) =>{
        return(
          <ul key={exile.id}>
            <li>{exile.id}</li>
            <li>{exile.username}</li>
          </ul>
        )
      })}
    </div>
    </>
  )
}

export default App;