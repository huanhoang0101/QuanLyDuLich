import React, { useContext, useState, useEffect} from 'react';
import Slide from '../Components/Slide';
import '../css/home.css'
import NewBlogs from './NewBlogs';
import NewTours from './NewTours';
import { MyUserContext } from "../configs/MyContext"
import {
  Link, Navigate
} from 'react-router-dom';
import API, { endpoints } from "../configs/API"
import Loading from "../Components/Loading"


function Home() {
  const [user, dispatch] = useContext(MyUserContext);
  const [tours, setTours] = useState(null)
  const [blogs, setBlogs] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadTours= async () => {
        try {
            window.scrollTo(0, 0);
            let e = `${endpoints['tours-new']}`
            let res = await API.get(e)
            console.log(res.data);
            setTours(res.data)
        } catch (ex) {

        }
    }
    const loadBlogs= async () => {
        try {
            window.scrollTo(0, 0);
            let e = `${endpoints['posts-new']}`
            let res = await API.get(e)
            console.log(res.data);
            setBlogs(res.data)
        } catch (ex) {

        } finally {
          setLoading(false)
        }
    }
    setLoading(true)
    loadTours()
    loadBlogs()
  }, [])

  if (tours === null || blogs === null){
    return (
      <Loading />
    ) 
  }

  return (
    <>
      <div className="ct-slide">
        <Slide />
      </div>
      <div>
        {
          <NewTours tours={tours}></NewTours>
        }
      </div>
      <div>
        {
          <NewBlogs blogs={blogs}/>
        }
      </div>
    </>
  );
}

export default Home;
