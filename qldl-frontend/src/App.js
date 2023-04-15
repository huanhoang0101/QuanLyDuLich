import './App.css';
import myUserReducer from './reducer/MyUserReducer';
import cookie from 'react-cookies';
import Footer from './Layouts/Footer';
import { useEffect } from 'react';
import Header from './Layouts/Header';
import LoginPage from './Layouts/LoginPage';
import ListTour from './Layouts/ListTour';
import RegisterPage from './Layouts/RegisterPage';
import Home from './Layouts/Home';
import ListBlogs from './Layouts/ListBlog';
import DetailTour from './Layouts/DetailTour';
import React , { useReducer }  from 'react';
import { Routes, Router, Route, BrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './Plugins/ScrollToTop';
import DetailBlog from './Layouts/DetailBlog';
import { MyUserContext } from './configs/MyContext';
import EditProfile from './Layouts/EditProfile';
import EditPassword from './Layouts/EditPassword';
import OrderHistory from './Layouts/OrderHistory';


function App() {

  const [user, dispatch] = useReducer(myUserReducer, cookie.load('current-user') || null)

  return (
    <MyUserContext.Provider value={[user, dispatch]}>
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
                  <Route path="/profile" element={<EditProfile/>} />
                  <Route path="/password" element={<EditPassword/>} />
                  <Route path="/history" element={<OrderHistory/>} />
            </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </MyUserContext.Provider>
  );
}

export default App;
