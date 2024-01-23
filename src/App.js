document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  // Ajoutez des gestionnaires d'événements pour les boutons "Suivant" et "Précédent"
  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
});

import React from 'react';

function VideoComponent({ videoSource }) {
  return (
    <div>
      <video controls autoPlay width={500}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function ImageComponent({ onImageClick }) {
  return (
    <div onClick={onImageClick}>
      <img src="bureau.jpg" alt="Image Interactive" id="interactiveImage" />
    </div>
  );
}

function App() {
  const [videoVisible, setVideoVisible] = React.useState(false);

  const handleImageClick = () => {
    // Afficher la vidéo uniquement si elle n'est pas déjà visible
    if (!videoVisible) {
      setVideoVisible(true);
    }
  };

  const handleZoneClick = () => {
    // Logique spécifique à la zone1 (peut être différente selon vos besoins)
    // Afficher la vidéo au clic sur zone1
    setVideoVisible(true);
  };

  const returnFromVideo = () => {
    // Cacher la vidéo
    setVideoVisible(false);
  }

  return (
    <>
      {!videoVisible && <div>
        <ImageComponent onImageClick={handleImageClick} />
        <button id="zone1" className="interactiveZone" onClick={handleZoneClick}></button>
      </div> }
      {videoVisible && <div className="video-container">
        <VideoComponent videoSource="fire.mp4" />
        <button className="back-button" onClick={returnFromVideo}>Retour</button>
      </div>}
    </>
  );
}

export default App;
