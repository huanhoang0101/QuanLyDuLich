import React, { useContext, useState } from 'react';
import Slide from '../Components/Slide';
import '../css/home.css'
import NewBlogs from './NewBlogs';
import NewTours from './NewTours';
import { MyUserContext } from "../configs/MyContext"
import {
  Link, Navigate
} from 'react-router-dom';




function Home() {
  const [user, dispatch] = useContext(MyUserContext);
  
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
