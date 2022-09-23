import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import  Footer  from '../src/Footer';
import About from '../src/Footer/About';
import Contact from '../src/Footer/ContactUs';
import Blog from '../src/Footer/Blog';
import Career from '../src/Footer/Career';
import CopyrightPolicy from '../src/Footer/CopyrightPolicy';
import Term from '../src/Footer/Term';
import Secure from '../src/Footer/Secure';
import Privacy from '../src/Footer/Privacy';
import Payment from './Footer/Payment';
import Shipping from '../src/Footer/Shipping';
import Returns from '../src/Footer/Returns';
import Faq from '../src/Footer/Faq';
import Affiliate from '../src/Footer/Affiliate';
import Sitemap from '../src/Footer/Sitemap';
import Home from './Home';

function App() {
  return (
    <div >
    <BrowserRouter>
    
    
  <Routes>
  <Route  path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/career' element={<Career/>}/>
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/privacy' element={<Privacy/>}/>
  <Route path='/terms' element={<Term/>}/>
  <Route path='/secure' element={<Secure/>}/>
  <Route path='/copyrightPolicy' element={<CopyrightPolicy/>}/>
  <Route path='/payment' element={<Payment/>}/>
  <Route path='/shipping' element={<Shipping/>}/>
  <Route path='/returns' element={<Returns/>}/>
  <Route path='/faq' element={<Faq/>}/>
  <Route path='/affiliate' element={<Affiliate/>}/>
  <Route path='/sitemap' element={<Sitemap/>}/>
  </Routes>
  <Footer/>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
