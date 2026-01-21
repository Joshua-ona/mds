import './Home.css'
import { useState } from 'react';


function Home() {

  
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Header / Navbar */}
     

      {/* Hero Section */}
      <section className="hero">
        <h2>WISDOM FROM HEAVEN</h2>
       
      </section>

      {/* About Section */}
      <section className="section">
        <h2>About Miracle Destiny Schools</h2>
        <p> 

        </p>
        <p>
         Miracle Destiny Schools is a private institution aimed at bringing up a God fearing generation with academic excellence. 
        </p>
      </section>

      {/* Academics Section */}
      <section className="section light">

        <h2>Academics</h2>
       <ul>
        <li>Primary Education</li>
          <li>O-Level Curriculum</li>
          <li>A-Level Curriculum</li>
          <li>Qualified & Experienced Teachers</li>
          <li>Guidance and Counseling</li>
        </ul>
      </section>
      <section className='section'>
        <h2>Admissions</h2>
        <p>We are delighted to welcome parents 
          and guardians to begin the admissions process with us.
           Our 2026 intakes are going and we humbly welcome to take
            admissions or you canpot for an online admission</p>
          <p>Click the button to fill this online form</p>
        <div style={{  textAlign: "center", marginTop: "40px" }}>
      {!open && (
        <p><button onClick={() => setOpen(true)}>
          Fill Registration Form
        </button>
        </p>
      )}

      {open && (
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfpRTQzt42Z2P0eaEiXfk-3NRBwmwgBpPdK5bWJR9LBlXwvFw/viewform?usp=publish-editor"
          height="850"
       
          style={{ width: "100%", border: "none", marginTop: "20px" }}
          title="Registration Form"
        />
      )}
    </div>
      </section>

      

    </>
  );
}

export default Home;
