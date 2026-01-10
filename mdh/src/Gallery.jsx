import React from "react";
import "./Gallery.css";

// Image array (from public folder)
const images = [
  { id: 1, src: "/public/download (4).jpg", alt: "School compound" },
  { id: 2, src: "/public/download (1).jpg", alt: "Classroom block" },
  { id: 3, src: "/public/Naume.jpg", alt: "Students in class" },
  { id: 4, src: "/public/images (5).jpg", alt: "School assembly" },
  { id: 5, src: "/public/images (2).jpg", alt: "Laboratory session" },
  { id: 6, src: "/public/images (6).jpg", alt: "Sports day" },
  { id: 7, src: "/public/Creating-major-impact.jpg", alt: "Sports day" },
  { id: 8, src: "/public/images (4).jpg", alt: "Sports day" },
  { id: 7, src: "/public/images (3).jpg", alt: "Sports day" },
  { id: 9, src: "/public/images (6).jpg", alt: "Sports day" },
  { id: 10, src: "/public/images (1).jpg", alt: "Sports day" },
  { id: 11, src: "/public/download.jpg", alt: "Sports day" },
  { id: 12, src: "/public/destiny.webp", alt: "Sports day" },
  { id: 13, src: "/public/prayer.jpeg", alt: "Sports day" },
  { id: 14, src: "/public/child.jpeg", alt: "Sports day" },
  { id: 15, src: "/public/exercise.jpeg", alt: "Sports day" },


];
function Gallery() {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our School Gallery</h2>

      <div className="gallery-grid">
        {images.map((image) => (
          <div className="gallery-card" key={image.id}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
