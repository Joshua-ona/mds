import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Senior from './Senior';
import Lower from './Lower';
import ScrollToTop from './ScrollToTop';

import Navbar from './Navbar'
function App() {
  return(
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/senior" element={<Senior />} />
        <Route path="/lower" element={<Lower />} />
      </Routes>
    <Navbar/>
   <Footer/>

      
    </>
  );

  
   
}

      
    
  


export default App
