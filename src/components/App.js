import React from 'react'
import NavBar from './NavBar'
import {data} from '../data'
import MovieCard from './MovieCard'
function App() {
  return (
    <div className="App">
     <NavBar/>
     <div className="tabs">
       <div className="tab">Movies</div>
       <div className="tab">Favourite</div>
     </div>
     <div className="list">
       {data.map((movie,index)=>{
         return <MovieCard movie={movie} key ={index}/>
       })}
     </div>
    </div>
  );
}

export default App;
