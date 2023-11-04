// components/ContentSlider.js
import React, { useState } from 'react';
import Image from 'next/image';

const ContentSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handleBack = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="content-slider">
      <div className="slide">
        <img src={slides[currentSlide].image} alt={`Slide ${currentSlide + 1}`}  />
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
      </div>

      <div className="navigation">
        <button onClick={handleBack} disabled={currentSlide === 0}>
          Back
        </button>
        <button onClick={handleNext} disabled={currentSlide === slides.length - 1}>
          Next
        </button>
      </div>

      <style jsx>{`
        .content-slider {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .slide {
          text-align: center;
        }

        .slide Image {
          width: 600px;
          height: 200px;
          object-fit:cover;
          border-radius:10px;
        }

        .slide h2 {
          font-size: 24px;
          margin-top: 10px;
          font-weight:bold;
          text-align:center;
          color: #059600;
        }

        .slide p {
          font-size: 16px;
          margin-top: 10px;
          font-weight:bold;
          text-align:center;
          width: 600px;
        }

        .navigation {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .navigation button {
          padding: 10px 20px;
          font-size: 16px;
          margin: 0 5px;
          cursor: pointer;
          border: none;
          background-color: #059600;
          color: #fff;
          border-radius: 100px;
          width:200px
        }

        .navigation button:hover {
          background-color: #034f00;
        }

        .navigation button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default ContentSlider;
