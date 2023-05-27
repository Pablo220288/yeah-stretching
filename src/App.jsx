

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, ContactForm, Footer, Home, Navbar, Service } from './components';
import './style.scss'


export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/service/*' element={<Service />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

