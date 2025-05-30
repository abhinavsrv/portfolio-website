import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';

// Import Easter egg images
import easterEgg1 from '../assets/easter_egg/011bc835bf67f3cb366be90194d6f619.jpg';
import easterEgg2 from '../assets/easter_egg/3f3cf551c2e2a608d127b3d01ba39842.jpg';
import easterEgg3 from '../assets/easter_egg/a54fbb20bc4b162997be54ec8bd918eb.jpg';
import easterEgg4 from '../assets/easter_egg/11c8b3cfaba088776d75a6007097dec2.jpg';
import easterEgg5 from '../assets/easter_egg/e35497cb43f6d01d9725207e03d79cb8.jpg';
import easterEgg6 from '../assets/easter_egg/0a764481aeaa9dd967307d7fc110668e.jpg';
import easterEgg7 from '../assets/easter_egg/1fdf4463189431c95a43956a50d8033b.jpg';
import easterEgg8 from '../assets/easter_egg/-fo1k0s.jpg';
import easterEgg9 from '../assets/easter_egg/5ac19a87212aff452652d8d1ddb22aaa.jpg';
import easterEgg10 from '../assets/easter_egg/c809c61b5dda1f792bd1065e8f8c55e9.jpg';
import easterEgg11 from '../assets/easter_egg/aae7710e8fe98772e0a5febc28d79208.jpg';
import easterEgg12 from '../assets/easter_egg/1be3f7bca162f8fea548559890e843c4.jpg';
import easterEgg13 from '../assets/easter_egg/03f11c998b9e1f6077e9cee939e042da.jpg';
import easterEgg14 from '../assets/easter_egg/c43286a97ed61a7a5feffe5f5e351eef.jpg';
import easterEgg15 from '../assets/easter_egg/4304c797b79523562b56ef1648b9e7f6.jpg';
import easterEgg16 from '../assets/easter_egg/-2wru8o.jpg';
import easterEgg17 from '../assets/easter_egg/1ae4b232ef14bec3f98fe106b2cce3f1.jpg';

const EasterEgg: React.FC = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const easterEggImages = [
    easterEgg1, easterEgg2, easterEgg3, easterEgg4, easterEgg5, 
    easterEgg6, easterEgg7, easterEgg8, easterEgg9, easterEgg10,
    easterEgg11, easterEgg12, easterEgg13, easterEgg14, easterEgg15,
    easterEgg16, easterEgg17
  ];

  const openLightbox = (image: string) => {
    setActiveImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="easter-egg-page">
      <div className="easter-egg-header animate-text-reveal">
        <h1>You Found the Secret Gallery!</h1>
        <p className="animate-fade-in">A collection of aesthetic images just for fun</p>
      </div>

      <div className="easter-egg-gallery animate-fade-in">
        {easterEggImages.map((image, index) => (
          <div 
            key={index} 
            className={`gallery-item animate-scale-in-delay-${index % 5}`}
            onClick={() => openLightbox(image)}
          >
            <img src={image} alt={`Easter egg ${index + 1}`} />
          </div>
        ))}
      </div>

      {activeImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={activeImage} alt="Enlarged view" />
            <button className="close-button" onClick={closeLightbox}>×</button>
          </div>
        </div>
      )}

      <div className="back-link animate-slide-up">
        <Link to="/" className="cta-button secondary">Back to Portfolio</Link>
      </div>
    </div>
  );
};

export default EasterEgg;
