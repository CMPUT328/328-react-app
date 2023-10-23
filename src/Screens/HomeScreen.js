import React, { useRef } from "react";
import { Link } from "react-router-dom";

import Bracket from "./OurRanking";

import "../Components/HomeScreen.css";

import Homebg from "../images/HomeBg.png";
import Secondbg from "../images/bg-globalRanking.png"

function HomeScreen() {
  const secondContainerRef = useRef(null);

  const handleScroll = () => {
    secondContainerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        className="container"
        style={{
          backgroundImage: `url(${Homebg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="title-container">
          <h1>Make your Worlds 2023 Prediction</h1>
            <Link to="/global-ranking"><button
              className="custom-button"
              onClick={() => {
              }}
            >
              Global Power Ranking
            </button>
          </Link>
          
        </div>
        <button className="scroll-button" onClick={handleScroll}></button>
      </div>

      <div 
        className="container" 
        style={{
          backgroundImage: `url(${Secondbg})`,
          backgroundSize: "cover",
        }}
        ref={secondContainerRef}
      >
        <Bracket></Bracket>
      </div>
    </div>
  );
}

export default HomeScreen;
