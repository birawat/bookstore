import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import About from './MainContent/About';
import Contact from './MainContent/ContactUs';
import Blog from './MainContent/Blog';
import Career from './MainContent/Career';
import Term from './MainContent/Term';
import Secure from './MainContent/Secure';
import Privacy from './MainContent/Privacy';
import Payment from './MainContent/Payment';
import Shipping from './MainContent/Shipping';
import Returns from './MainContent/Returns';
import Faq from './MainContent/Faq';
import Affiliate from './MainContent/Affiliate';
import Sitemap from './MainContent/Sitemap';
import Home from './MainContent/Home';
import MainHeader from './MainHeader';
import MainContent from './MainContent';
import Wishlist from './MainHeader/Wishlist';
import RequestBook from './MainContent/RequestBook';
import { Login } from './Login';
import  Registration from './Registration';
import Seller from './MainContent/Seller';
import PaymentDetail from './MainContent/PaymentDetail'
import Author from './MainContent/Author';
import Categories from './MainContent/Home/Categories';
import { HomeNavbar } from './HomeNavbar';

import CopyrightPolicy from './MainContent/CopyrightPolicy';



function App() {
  const [modal, setModal] = useState(false);
  const [wishlistModal, setWishlistModal] = useState(false);
  const [cartValue, setCartValue] = useState([]);
  const [wishlistValue, setWishlistValue] = useState([]);
  const [name,setName] = useState("");
  const cartValues = cartValue;
  const [values, setValues] = useState([])
  const intialValues = { username: "", email: "", mobile: "", password: "" };
  const [text,setText ] = useState('');
  const [buttontext, setButtontext] = useState("Add Cart");
  // let card = [];
  return (  
      <BrowserRouter>
        <MainHeader text={text} setText={setText} name={name} setName={setName} setModal={setModal} cartValue={cartValue} wishlistValue={wishlistValue} cartValues={cartValues} setCartValue={setCartValue} setWishlistModal={setWishlistModal}/>
        <MainContent setModal={setModal} modal={modal} cartValue={cartValue} wishlistValue={wishlistValue} wishlistModal={wishlistModal} setWishlistModal={setWishlistModal}/>        
        <Routes>
          <Route path='/' element={<Home name={name} setName={setName} cartValue={cartValue} wishlistValue={wishlistValue} setCartValue={setCartValue}  setWishlistValue={setWishlistValue}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/career' element={<Career/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/terms' element={<Term/>}/>
          <Route path='/secure' element={<Secure/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/shipping' element={<Shipping/>}/>
          <Route path='/returns' element={<Returns/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/affiliate' element={<Affiliate/>}/>
          <Route path='/sitemap' element={<Sitemap/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Registration' element={<Registration values={values} setValues={setValues} intialValues={intialValues}/>}/>
          <Route path='/wishlist' element={<Wishlist buttontext={buttontext} setButtontext={setButtontext} setWishlistValue={setWishlistValue} wishlistValue={wishlistValue} cartValue={cartValue} setCartValue={setCartValue}/>}/>
          <Route path='/requestbook' element={<RequestBook/>}/>
          <Route path='/login' element={<Login/>}/> 
          <Route path='/categoires' element={<Categories text={text} setText={setText} name={name} setName={setName} cartValue={cartValue} cartValues={cartValues} setCartValue={setCartValue}/>}/>
          <Route path='/seller' element={<Seller/>}/>    
          <Route path='/paymentDetail' element={<PaymentDetail/>}/>
          <Route path='/author' element={<Author/>}/>
         
          <Route path='/copyrightPolicy' element={<CopyrightPolicy/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>  

  );
}
export default App;