import './Home.css'
import { FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaTiktok } from "react-icons/fa";
import { useEffect, useState } from "react";

function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      setShowFooter(scrollBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`footer ${showFooter ? "show" : ""}`}>
      <p>© 2026 Miracle Destiny Schools</p>
      <p>P.O Box 35359 Kampala</p>
       
        <div style={{ padding: "0px", textAlign: "center", color: "orange" }}>
          <p>Contact us</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", color:"orange"}}>
        

        <a
          href="https://www.instagram.com/miracle_destiny_schools"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} color='orange' />
        </a>
         {/* Facebook */}
        <a
          href="https://www.facebook.com/Miracle_Destiny_School,_Uganda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} color='orange'  />
        </a>

        {/* Email */}
        <a href="mailto:info@miraclecentrek.org">
          <FaEnvelope size={30} color='orange' />
        </a>
          {/* Telephone */}
        <a href="tel:+256772456789">
          <FaPhone size={30} color='orange' />
    
        </a>
        {/* TikTok */}
        <a
          href="https://www.tiktok.com/Miracle_Destiny_School_Uganda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok size={30} color='orange'  />
        </a>
        </div>


        </div>

      
      

      
    </footer>
  );
}

export default Footer;
