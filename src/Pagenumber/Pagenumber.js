import React from 'react';


const Pagenumber = ({ setPagenumber,pagenumber }) => {
    let next = () => {
        setPagenumber((x)=>x+1)
    }
    let prev = () => {
        if (pagenumber === 1) return;
        setPagenumber((x)=>x-1)
    }
    return (
        <div className='justify-center my-10 flex gap-5'>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={prev}>Prev</button>
            
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded' onClick={next}>Next</button>
        </div>
    );
};

export default Pagenumber;