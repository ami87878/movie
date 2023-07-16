import { useState, useEffect } from "react";
import React from "react";
import searchicon  from './search.svg';
import MovieCard from "./MovieCard";


//a791fd01





const url='http://www.omdbapi.com?apikey=a791fd01';











function Ap(){


    const [movies, setMovies]=useState([]);

    const [searchTerm, setSearchTerm]=useState('');


    async function searchMovies(title){

        const response=await fetch(`${url}&s=${title}`);
        const data= await response.json();
        setMovies(data.Search);
        
        
        }

        



    useEffect(()=>{
        searchMovies('Spiderman');
    },[]);

    return(

        <div className="app">
            <h1>MovieLand  </h1>
            <div className="search">
                <input placeholder="Search your favorite movie " value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
                <img src={searchicon} alt="search" onClick={()=>searchMovies(searchTerm)}></img>
            </div>
            
        {

            movies?.length>0 ?(

                <div className="container">
               {movies.map((movie)=>(
                <MovieCard movie={movie}/>
               ))}
            </div>


            ):
            (
                <div className="empty">
                    <h2>No moveis found</h2>
                </div>
            )
        }


           
             <span className="app ">made by Amirhossein kanmohammadi </span> 
            
        </div>
     );
    }

    export default Ap;























 

