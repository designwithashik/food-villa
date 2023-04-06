import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='lg:mx-24 mx-12'>
      <Header></Header>
      <Outlet/>
    </div>
  );
};

export default App;