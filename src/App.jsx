import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='lg:mx-24 mx-12'>
      <Header  ></Header>
      <div  className='h-[calc(100vh-102px)] flex items-center'>
      <Outlet/>
      
      </div>      
    </div>
  );
};

export default App;