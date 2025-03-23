import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing-page/home/HomePage';
import SignUp from './landing-page/signup/SignUp';
import Aboutpage from './landing-page/about/AboutPage.js';
import Pricingpage from './landing-page/pricing/Pricingpage.js';
import Supportpage from './landing-page/support/Supportpage.js';
import Productpage from './landing-page/product/Productpage.js';
import Navbar from './landing-page/Navbar';
import Footer from './landing-page/Footer';
import Notfound from './landing-page/Notfound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
    <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/signup' element={<SignUp/>}/>
     <Route path='/about' element={<Aboutpage/>}/>
     <Route path='/product' element={<Productpage/>}/>
     <Route path='/pricing' element={<Pricingpage/>}/>
     <Route path='/support' element={<Supportpage/>}/>
     <Route path='*' element={<Notfound/>}/>
    </Routes>
    <Footer/>
 </BrowserRouter>
);
