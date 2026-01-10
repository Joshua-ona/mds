import './Home.css'
import { useState } from 'react';


function Home() {

  const [page, setPage] =useState("high")
  return (
    <>
      {/* Header / Navbar */}
     

      {/* Hero Section */}
      <section className="hero">
        <h2>WISDOM FROM HEAVEN</h2>
        <p>
          Providing holistic secondary education with academic excellence,
          character formation, and innovation.
        </p>
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

      

    </>
  );
}

export default Home;
