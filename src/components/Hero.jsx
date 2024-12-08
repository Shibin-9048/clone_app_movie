import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to Movie Paradise</h1>
                <p className="hero-subtitle">
                    Discover the best movies, explore new genres, and enjoy endless entertainment.
                </p>
                <div className="hero-buttons">
                    <button className="hero-btn primary-btn">Browse Movies</button>
                    <button className="hero-btn secondary-btn">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
