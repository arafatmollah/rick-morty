import React from 'react';
import { useEffect, useState } from 'react';
import Character from '../Characters/Character';
import Pagenumber from '../Pagenumber/Pagenumber';
// import Search from '../Search/Search';
// import Episode from './Characters/Episode/Episode';

const Home = () => {
    const [character, setCharacter] = useState([]);
  const [pagenumber,setPagenumber]= useState(1)
  const [search,setSearch]=useState('')
  
  const api = `https://rickandmortyapi.com/api/character/?page=${pagenumber}&name=${search}`;
  useEffect(() => {
    fetch(api)
      .then(res => res.json())
    .then(data=>setCharacter(data.results))
  }, [api])
  
  const searchValue = (e) => {
    setSearch(e.target.value)
  }
    return (
        <div>
        <div className=''>
          <div className='text-center border-blue-500 my-5'>
          <input placeholder='Enter your character name' className='border px-4 py-2' onChange={searchValue} type='text'></input>
          </div>
      <div className='grid sm:grid-cols-3 gap-10'>
      {
        character.map(characters => <Character
          key={characters.id}
          characters={characters}
        ></Character>)
      }
      </div>
      <Pagenumber setPagenumber={setPagenumber}></Pagenumber>
    </div>
        </div>
    );
};

export default Home;