import React, { useState } from "react";
import "./style.scss";
import slide01 from "./images/slide01.jpg";
import slide02 from "./images/slide02.jpg";
import slide03 from "./images/slide03.jpg";
import slide04 from "./images/slide04.jpg";
import slide05 from "./images/slide05.jpg";

function App() {
    const slides = [slide01, slide02, slide03, slide04, slide05];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="container">
            <div className="slider-container">
                <ul className="slider-list">
                    {slides.map((slide, index) => (
                        <li
                            key={index}
                            className={`slider-item ${index === currentIndex ? "active" : ""}`}
                        >
                            <img src={slide} alt={`슬라이드${index + 1}`} />
                        </li>
                    ))}
                </ul>
                <button
                    type="button"
                    className="slider-button left"
                    onClick={handlePrev}
                >
                    <span className="blind">왼쪽</span>
                </button>
                <button
                    type="button"
                    className="slider-button right"
                    onClick={handleNext}
                >
                    <span className="blind">오른쪽</span>
                </button>
            </div>
        </div>
    );
}

export default App;
