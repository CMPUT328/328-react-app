import "../Components/Styles.css";

import React, { useRef } from "react";
import "../Components/HomeScreen.css"; // Include styles

import Homebg from "../images/HomeBg.png";
import customScrollButton from "../images/diamond-icon.png";
import { ReactComponent as DownArrow } from "../images/downArrow.svg";

import GlobalRanking from "../Components/GlobalRanking/GlobalRanking";

function HomeScreen() {
    const secondContainerRef = useRef(null);

    const handleScroll = () => {
        secondContainerRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="home-container">
            <div
                className="container"
                style={{
                    backgroundImage: `url(${Homebg})`,
                    backgroundSize: "cover",
                }}
            >
                <div className="title-container">
                    <h1>Make your Worlds 2023 Prediction</h1>
                    <button
                        className="custom-button"
                        onClick={() => {
                            /* Navigate to another screen */
                        }}
                    >
                        Predict Ranking
                    </button>
                </div>
                <button
                    className="scroll-button"
                    onClick={handleScroll}
                ></button>
            </div>

            <div className="container" ref={secondContainerRef}>
                <GlobalRanking />
            </div>
        </div>
    );
}

export default HomeScreen;
