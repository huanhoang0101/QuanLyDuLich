
import React from 'react';
import Slide from '../Components/Slide';
import '../css/home.css'
import NewBlogs from './NewBlogs';
import NewTours from './NewTours';

function Home() {
  return (
    <>
      <div className="ct-slide">
        <Slide />
      </div>
      <div>
        <NewTours></NewTours>
      </div>
      <div>
        <NewBlogs/>
      </div>
    </>
  );
}

export default Home;
