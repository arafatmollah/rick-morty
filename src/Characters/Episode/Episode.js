import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Episodes from './Episodes';

const Episode = () => {
    const [episode, setEpisode] = useState([])
    const [id,setId]=useState(1)
    

    const api = `https://rickandmortyapi.com/api/episode/${id}`
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data =>
                setEpisode(data)
                
        );
                
    },[api])

    return (
        <div>
            <h3>{ episode.name}</h3>
            <h3>{ episode.air_date}</h3>
        </div>
    );
};

export default Episode;