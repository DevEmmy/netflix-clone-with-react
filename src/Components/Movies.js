import React,{ useState, useEffect } from 'react'
import movies from './Movies.json'
import './Movies.css'
import Originals from './Categories/Originals'
import Trending from './Categories/Trending'
import Romance from './Categories/Romance'
import Comedy from './Categories/Comedy'
import Action from './Categories/Action'
import Horror from './Categories/Horror'
import Documentaries from './Categories/Documentaries'

function Movies() {
    console.log(movies)
    const [category, setCategory ] = useState(movies.categories)

    const [films, setFilms] = useState([])

    return(
        <div className='content'>
            
      
            <Originals />
            <Trending />
            <Romance />
            <Comedy />
            <Action />
            <Horror />
            <Documentaries />
        </div>
    )
}
   export default Movies
