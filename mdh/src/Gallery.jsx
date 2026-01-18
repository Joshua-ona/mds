import React from "react";
import "./Gallery.css";

// import assets from src (rename files to avoid spaces/parentheses)
import img1 from "./assets/images-5.jpg";
import img2 from "./assets/download-4.jpg";
import img3 from "./assets/images-6.jpg";
import img4 from "./assets/images-3.jpg";
import img5 from "./assets/images-1.jpg";
import img6 from "./assets/images-2.jpg";
import img7 from "./assets/images-7.jpg";
import exercise from "./assets/exercise.jpeg";
import child from "./assets/child.jpeg";
import prayer from "./assets/prayer.jpeg";
import destiny from "./assets/destiny.webp";
import download from "./assets/download.jpg";
import download1 from "./assets/download-1.jpg";
import naume from "./assets/Naume.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7,
  exercise, child, prayer, destiny, download, download1, naume
];

function Gallery() {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our School Gallery</h2>
      <div className="gallery-grid">
        <div className="gallery-card">
          {images.map((src, i) => (
            <img
              key={i}
              className="gallery-image"
              src={src}
              alt={`gallery-${i}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;