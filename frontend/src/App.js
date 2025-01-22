import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Appointment from './components/Appointment';
import Home from './components/Home'; // Assuming you have a Home component
import Button from './components/Button';
import Capability from './components/Capability';
import AboutUs from './components/AboutUs';
import ProductGallery from './components/ProductGallery';
import ContactUs from './components/ContactUs';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const App = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-light">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/Button" element={<Button />} />
          <Route path="/capability" element={<Capability />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/equipment" element={<ProductGallery />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Add other routes here */}
        </Routes>

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/+918951960110"
          className="whatsapp-icon"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            backgroundColor: '#25D366',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <FaWhatsapp size={24} color="#fff" />
        </a>

        {/* Go to Top Icon */}
        {showGoToTop && (
          <button
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              backgroundColor: '#721213',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <FaArrowUp size={24} color="#fff" />
          </button>
        )}
      </Router>
    </div>
  );
};

export default App;
