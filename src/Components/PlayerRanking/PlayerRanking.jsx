import React, { useState, useEffect } from "react";
import "./PlayerRanking.css";
import CustomList from "../CustomList/CustomList";

const lanes = ["lane1", "lane2", "lane3"];
const years = ["2020", "2021", "2022", "2023"];
const PlayerRanking = () => {
    const [laneDropdownVisible, setLaneDropdownVisible] = useState(false);
    const [yearDropdownVisible, setYearDropdownVisible] = useState(false);
    const [selectedLane, setSelectedLane] = useState("Lane");
    const [selectedYear, setSelectedYear] = useState("Year");

    const toggleLaneDropdown = () => {
        setLaneDropdownVisible((prevState) => !prevState);
        setYearDropdownVisible(false);
    };

    const toggleYearDropdown = () => {
        setYearDropdownVisible((prevState) => !prevState);
        setLaneDropdownVisible(false);
    };

    const handleLaneSelect = (lane) => {
        setSelectedLane(lane);
        setLaneDropdownVisible(false);
    };

    const handleYearSelect = (year) => {
        setSelectedYear(year);
        setYearDropdownVisible(false);
    };

    const [selectedPlayer, setSelectedPlayer] = useState(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                laneDropdownVisible &&
                !event.target.closest(".lane-dropdown")
            ) {
                setLaneDropdownVisible(false);
            }
            if (
                yearDropdownVisible &&
                !event.target.closest(".year-dropdown")
            ) {
                setYearDropdownVisible(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [laneDropdownVisible, yearDropdownVisible]);

    const players = [
        {
            rank: 1,
            name: "Adnan",
        },
        {
            rank: 2,
            name: "Brandon",
        },
        {
            rank: 3,
            name: "Charlie",
        },
    ];

    return (
        <div className="background-image">
            <h1 className="header">Player Ranking</h1>
            <div className="controls-wrapper">
                {/* lane dropdown */}
                <div className="dropdown lane-dropdown">
                    <label htmlFor="dropdown-button"></label>
                    <button
                        className="dropdown-button"
                        id="lane-dropdown-button"
                        title={selectedLane}
                        onClick={toggleLaneDropdown}
                    >
                        <span className="dropdown-button-text">
                            {selectedLane}
                        </span>
                        <div
                            className={`arrow ${
                                laneDropdownVisible ? "arrow-up" : ""
                            }`}
                        />
                    </button>
                    <div
                        className="dropdown-options"
                        style={{
                            display: laneDropdownVisible ? "block" : "none",
                        }}
                    >
                        {lanes.map((lane) => (
                            <React.Fragment key={lane}>
                                <label
                                    className="dropdown-item"
                                    htmlFor={lane}
                                    title={lane}
                                    onClick={() => handleLaneSelect(lane)}
                                >
                                    {lane}
                                </label>
                                <input
                                    className="option"
                                    id={lane}
                                    type="radio"
                                    name={lane}
                                    value={lane}
                                ></input>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                {/* year dropdown */}
                <div className="dropdown year-dropdown">
                    <label htmlFor="dropdown-button"></label>
                    <button
                        className="dropdown-button"
                        id="year-dropdown-button"
                        title={selectedYear}
                        onClick={toggleYearDropdown}
                    >
                        <span className="dropdown-button-text">
                            {selectedYear}
                        </span>
                        <div
                            className={`arrow ${
                                yearDropdownVisible ? "arrow-up" : ""
                            }`}
                        />
                    </button>
                    <div
                        className="dropdown-options"
                        style={{
                            display: yearDropdownVisible ? "block" : "none",
                        }}
                    >
                        {years.map((year) => (
                            <React.Fragment key={year}>
                                <label
                                    className="dropdown-item"
                                    htmlFor={year}
                                    title={year}
                                    onClick={() => handleYearSelect(year)}
                                >
                                    {year}
                                </label>
                                <input
                                    className="option"
                                    id={year}
                                    type="radio"
                                    name={year}
                                    value={year}
                                ></input>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="search-wrapper">
                    <input
                        type="search"
                        className="searchbox"
                        placeholder="Search Team"
                    />
                    <div className="search-icon" />
                </div>
            </div>
            <div className="list-and-info-container">
                <div className="list-wrapper">
                    <CustomList
                        allItems={players}
                        itemsPerPage={5}
                        onTeamSelect={setSelectedPlayer}
                    />
                </div>
                <img
                    src={require("../../images/team-info-frame.png")}
                    alt="team-info"
                    className="team-info"
                />
                {selectedPlayer && (
                    <div className="team-details">
                        <h2 className="team-info-name">
                            {selectedPlayer.name}
                        </h2>
                        <p className="team-info-rank">
                            Rank: {selectedPlayer.rank}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlayerRanking;
