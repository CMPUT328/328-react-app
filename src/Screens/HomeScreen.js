import '../Components/Styles.css';

import HomeBgEffect from '../images/HomeBgEffect.svg'; 
import Homebg from '../images/HomeBg.png'; // Adjust the path to where your image is located.
import React, { useRef } from 'react';
import '../Components/HomeScreen.css'; // Include styles

function HomeScreen() {
    const secondContainerRef = useRef(null);

    const handleScroll = () => {
        secondContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="home-container">
            <div className="container" style={{ backgroundImage: `url(${Homebg})`, backgroundSize: 'cover' }}>
                <div className="title-container">
                    <h1>Make your Worlds 2023 Prediction</h1>
                    <button onClick={() => {/* Navigate to another screen */}}>Predict Ranking</button>
                </div>
                <button className="scroll-button" onClick={handleScroll}>Scroll Down</button>
            </div>
            
            <div className="container" ref={secondContainerRef}>
                {/* Content for second container */}
            </div>
        </div>
    );
}

export default HomeScreen;
