import React, { useState, useEffect } from 'react';
import './Nav.css';

function Banner() {

    const [movies, setMovies ]= useState([])

    const url = 'https://api.themoviedb.org/3/trending/all/day?api_key=2ea7b05c01d6fc7bf96d7db90b11538e'

    const truncate = (string, n) =>{
        return string?.length > n ? string.substr(0,  n-1) + '...' : string;
    }

const getMovies = async ()=>{
    const response = await fetch(url);
    const data = await response.json()
    const receivedMovie = data.results
    const movie = Math.floor(Math.random() * receivedMovie.length - 1)
    console.log(data.results[movie]);
    setMovies(data.results[movie])
}

useEffect(()=>{
    getMovies()
}, [])

let des;
if(movies.overview){
    des = movies.overview
}
else if(movies.overview = null){
    window.location.reload(true)
}
    return (
        <div>
            <div className='banner' style={{
            backgroundImage:`url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`
        }}>
           <div className="details">
           <div className="movietitle">
                <h1> { movies.original_name || movies.original_title || movies.title }</h1>
            </div>
            
            <div className="description">
                <p>  {truncate( des,  200) } </p>
            </div>

            <div className="buttons">
                <button className="btn">
                    Play
                </button>

                <button className="btn">
                    More Info
                </button>
            </div>
           </div>
        </div>

     { movies && <>  (<div className="banner--fade" />
        <div className="banner--fade absolute" />)</>
        }
        </div>
        
    )
}

export default Banner
