

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, ContactForm, Footer, Home, Navbar } from './components';
import './style.scss'


export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Home />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

