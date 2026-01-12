import React from "react";
import "./Gallery.css";

// Image array (from public folder)

function Gallery() {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our School Gallery</h2>

      <div className="gallery-grid">
                
          <div className="gallery-card" >
            <img className="gallery-card"  src="images (5).jpg" alt="praying"></img>
            <img className="gallery-card"  src="download (4).jpg" alt="praying"></img>
            <img className="gallery-card"  src="images (6).jpg" alt="praying"></img>
            <img className="gallery-card"  src="images (3).jpg" alt="praying"></img>
            <img className="gallery-card"  src="images (1).jpg" alt="praying"></img>
            <img className="gallery-card"  src="images (2).jpg" alt="praying"></img>
            <img className="gallery-card"  src="images (7).jpg" alt="praying"></img>
            <img className="gallery-card"  src="exercise.jpeg" alt="praying"></img>
            <img  className="gallery-card"  src="child.jpeg" alt="praying"></img>
            <img className="gallery-card"  src="prayer.jpeg" alt="praying"></img>
            <img  className="gallery-card"  src="destiny.webp" alt="praying"></img>
            <img className="gallery-card"  src="download.jpg" alt="praying"></img>
            <img className="gallery-card"  src="download (1).jpg" alt="praying"></img>
            <img className="gallery-card"  src="Naume.jpg" alt="praying"></img>
          
          </div>
      
      </div>
    </div>
  );
}

export default Gallery;
