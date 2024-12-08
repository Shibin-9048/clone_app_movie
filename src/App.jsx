// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import Footer from './components/Footer';
import './App.css';



const App = () => {
    const movies = [
        { title: "Movie 1", image: "https://via.placeholder.com/150" },
        { title: "Movie 2", image: "https://via.placeholder.com/150" },
        { title: "Movie 3", image: "https://via.placeholder.com/150" },
        { title: "Movie 4", image: "https://via.placeholder.com/150" },
    ];

    return (
        <>
            <Navbar />
            <Hero />
            <MovieRow title="Popular Movies" movies={movies} />
            <MovieRow title="New Releases" movies={movies} />
            <Footer />
        </>
    );
};

export default App;
