import { useState } from "react"
import { Link } from "react-router-dom"


import './Navbar.css'
import logo from './logo.png'



function Navbar(){
const [open, setOpen] = useState(false);
    
       
  return (
    
      <>
      <header className="navbar">
        <div className="nav-left">
          <img src={logo} alt="School Logo" className="logo" />
          <h1>Miracle Destiny Schools</h1>
        </div>

      
      
          
        <div className={`nav-right ${open ? "open" : ""}`}>
         <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link> 
        <Link to="/gallery"><button>Gallery</button></Link>
        <Link to="/senior"><button>Senior</button></Link>
        <Link to="/lower"><button>Lower</button></Link>

             
        </div>
        <button className="toggle-btn" onClick={() => setOpen(!open)}>
              {open? "×":"≡"}

               </button>
      </header>
        
      
      
    

      
    </>
       
    )
}


export default Navbar