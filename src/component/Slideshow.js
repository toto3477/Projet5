import React, { useState } from 'react';

const Slideshow = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    if (pictures.length === 1) {
        return (
            <div className="slideshow">
                <img src={pictures[0]} alt="slide" />
            </div>
        );
    }

    return (
        <div className="slideshow">
            <button className="left-arrow" onClick={goToPrevious}>&#10094;</button>
            <img src={pictures[currentIndex]} alt={`slide ${currentIndex + 1}`} />
            <button className="right-arrow" onClick={goToNext}>&#10095;</button>
            <div className="slide-number">{currentIndex + 1} / {pictures.length}</div>
        </div>
    );
};

export default Slideshow;