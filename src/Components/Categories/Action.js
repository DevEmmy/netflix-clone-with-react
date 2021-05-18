import React, {useState, useEffect} from 'react'

function Action() {
    const [movie, setMovie ] = useState(false);
    const API_KEY = '2ea7b05c01d6fc7bf96d7db90b11538e'


    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`

    const getMovies = async ()=>{
        const response =await fetch(url);
        const movies = await response.json();
        setMovie(movies.results)
        console.log(movies)
    }
    
    const [loading, setLoading ] = useState(true)
    let load;
    if(loading){
        load = <div className="img">
        <div className="im"></div>
        <div className="im"></div>
        <div className="im"></div>
        <div className="im"></div>
        <div className="im"></div>
    </div>
    }

    let images;
    if(movie){
        images =   movie.map((m)=>{
            const {id , backdrop_path} = m;
            return (
                <div className="movie" key={ id }>
                <img src={ `https://image.tmdb.org/t/p/original/${backdrop_path}`} alt=""/>
                <div className="movie-detail">
               <p> { m.original_name || m.original_title || m.title }</p>
                </div>
            </div>
            )
        }) 
    }


    useEffect(()=>{
        getMovies()
    }, [])
    return (
        <div style={{color:'red'}}>
            <h3>Action</h3>

            <div className="images">
               { images || load}
            </div>
           
        </div>
    )
}

export default Action
