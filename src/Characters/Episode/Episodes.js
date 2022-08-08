import React from 'react';

const Episodes = (props) => {
    const { name, airdate } = props.episodes;
    return (
        <div>
            <p>{name}</p>
            <p>{ airdate}</p>
        </div>
    );
};

export default Episodes;