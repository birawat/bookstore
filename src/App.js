import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import  Footer  from './Footer';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Career from './Career';
import CopyrightPolicy from './CopyrightPolicy';
import Term from './Term';
import Secure from './Secure';
import Privacy from './Privacy';
import Payment from './Payment';
import Shipping from './Shipping';
import Returns from './Returns';
import Faq from './Faq';
import Affiliate from './Affiliate';
import Sitemap from './Sitemap';
function App() {
  return (
    <div >
    <BrowserRouter>
  <Routes>
  <Route path='/' element={<Footer/>}/>
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
    </BrowserRouter>
    </div>
  );
}

export default App;
