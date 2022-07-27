import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Persons from "./components/Persons";
import { useEffect, useState } from "react";
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

//19491a40

const API_URL ='http://www.omdbapi.com/?apikey=19491a40'

function App() {
  const [movies, setMovies] = useState([]);
  const [searchterm, setSearchTerm] = useState('');

  const searchMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    // const data = await response.json();
    
    const data = await response.json();
    setMovies(data.Search)
    
  }

  useEffect(() =>{
    searchMovies('Spiderman')
  }, []);

  const movie1  =
    {
      "Title": "Superman, Spiderman or Batman",
      "Year": "2011",
      "imdbID": "tt2084949",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
  }
  
    return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
      <input
      placeholder="Search for movie"
      value={searchterm}
       onChange={(e) =>setSearchTerm(e.target.value)}
      />
      <img src={SearchIcon}
      onClick={()=> searchMovies(searchterm)}
      />
    </div>

      {
        movies?.length > 0
        ?(
          <div className="container">
          {
            movies.map((movie) =>(
              <MovieCard movie={movie}/>
              ))
          }
         </div>
        ):(
          <div className="empty">
            <h2>No movie found!</h2>
          </div>
        )
      }
  
    </div>
    
  );
}

export default App;
