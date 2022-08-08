import React from 'react';

const Character = (props) => {
    const { name, image, status, species } = props.characters;
    return (
        <div className='p-3 rounded-lg shadow-lg text-center'>
            <img className='w-60 mx-auto' src={image} alt={image}></img>
            <h2 className='text-xl font-bold my-3'>{name}</h2>
            <h4 className='text-green-500 font-bold'>{status}</h4>
            <p>{species}</p>
        </div>
    );
};

export default Character;