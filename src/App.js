import React from 'react';
import Home from './Home/Home'
import Episode from './Characters/Episode/Episode'
import {Routes,Route} from 'react-router-dom'
import Header from './Header/Header';

const App = () => {
  return (
    <div className="m-10 p-4">
       <Header></Header>
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='episode' element={<Episode></Episode>}></Route>
      </Routes>
    </div>
  );
};

export default App;