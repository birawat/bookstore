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




function App() {
  const [modal, setModal] = useState(false);
  const [cartValue, setCartValue] = useState([]);
  const [name,setName] = useState("");
  const cartValues = cartValue;
  const [values, setValues] = useState([])
  const intialValues = { username: "", email: "", mobile: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues)
  const [text,setText ] = useState('');
  // let card = [];
  return (  
      <BrowserRouter>
        <MainHeader text={text} setText={setText} name={name} setName={setName} setModal={setModal} cartValue={cartValue} cartValues={cartValues} setCartValue={setCartValue}/>
        <MainContent setModal={setModal} modal={modal} cartValue={cartValue}/>        
        <Routes>
          <Route path='/' element={<Home name={name} setName={setName} cartValue={cartValue} setCartValue={setCartValue} />}/>
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
          <Route path='/Registration' element={<Registration values={values} setValues={setValues} formValues={formValues} setFormValues={setFormValues} intialValues={intialValues}/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/requestbook' element={<RequestBook/>}/>
          <Route path='/login' element={<Login/>}/> 
          <Route path='/categoires' element={<Categories text={text} setText={setText} name={name} setName={setName} cartValue={cartValue} cartValues={cartValues} setCartValue={setCartValue}/>}/>
          <Route path='/seller' element={<Seller/>}/>    
          <Route path='/paymentDetail' element={<PaymentDetail/>}/>
          <Route path='/author' element={<Author/>}/>
         
        </Routes>
        <Footer/>
      </BrowserRouter>  

  );
}
export default App;