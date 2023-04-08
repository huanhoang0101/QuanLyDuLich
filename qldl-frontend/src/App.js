import './App.css';
import Footer from './Layouts/Footer';
import { useEffect } from 'react';
import Header from './Layouts/Header';
import LoginPage from './Layouts/LoginPage';
import ListTour from './Layouts/ListTour';
import RegisterPage from './Layouts/RegisterPage';
import Home from './Layouts/Home';
import ListBlogs from './Layouts/ListBlog';
import DetailTour from './Layouts/DetailTour';
import React from 'react';
import { Routes, Router, Route, BrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './Plugins/ScrollToTop';
import DetailBlog from './Layouts/DetailBlog';

function App() {

  return (
    <>
    <BrowserRouter>
      <div className=" main-box">
        <Header/>
        <ScrollToTop/>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/tours" element={<ListTour />} />
                <Route path="/blogs" element={<ListBlogs />} />
                <Route path="/tour/:tourId" element={<DetailTour/>} />
                <Route path="/blog/:blogId" element={<DetailBlog/>} />
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
