import { useState } from "react"

import Home from "./Home"
import About from "./About"
import Gallery from "./Gallery"
import Senior from "./Senior"
import Lower from "./Lower"

import './Navbar.css'
import logo from './logo.png'


function Navbar(){

    
        const [page, setPage] =useState("home")
        const [open, setOpen] = useState(false);
  return (
    
      <>
      <header className="navbar">
        <div className="nav-left">
          <img src={logo} alt="School Logo" className="logo" />
          <h1>Miracle Destiny Schools</h1>
        </div>

        
      
      
      
          
        <div className={`nav-right  ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
          <button className="btn-plain" onClick={() => setPage("home")}>Home</button>
          
          <button className="btn-plain" onClick={() => setPage("about")}>About</button>
          <button className="btn-plain" onClick={() => setPage("gallery")}>Gallery</button>
          
          <button className="btn-plain" onClick={() => setPage("High")}>High School</button>
          <button className="btn-plain" onClick={() => setPage("Primary")}>Primary School</button>
             

             
        </div>
        <button className="toggle-btn" onClick={() => setOpen(!open)}>
              {open? "×":"≡"}

               </button>
      </header>
        
      
      
       
    

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page=== "gallery" && <Gallery />}
      {page === "High" && <Senior />}
      {page === "Primary" && <Lower />}

      
    </>
       
    )
}


export default Navbar