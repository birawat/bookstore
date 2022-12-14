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
import Home from './Home';
import MainHeader from './MainHeader';
import MainContent from './MainContent';
import Wishlist from './MainHeader/Wishlist';
import RequestBook from './MainContent/RequestBook';



function App() {

  const [modal, setModal] = useState(false);
  


  return (
      <BrowserRouter>
        <MainHeader setModal={setModal}/>
        <MainContent setModal={setModal} modal={modal}/>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/career' element={<Career />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Term />} />
          <Route path='/secure' element={<Secure />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/returns' element={<Returns />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/affiliate' element={<Affiliate />} />
          <Route path='/sitemap' element={<Sitemap />} />
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/requestbook' element={<RequestBook/>}/>
          
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
