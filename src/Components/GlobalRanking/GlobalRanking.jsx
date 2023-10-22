import React, { useState, useEffect } from "react";
import "./GlobalRanking.css";
import CustomList from "../CustomList/CustomList";

const regions = ["London", "Tokyo", "Beijing", "Manchester"];

const GlobalRanking = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState("Region");

    const toggleDropdown = () => {
        setDropdownVisible((prevState) => !prevState);
    };
    const handleRegionSelect = (region) => {
        setSelectedRegion(region);
        setDropdownVisible(false);
    };
    const [selectedTeam, setSelectedTeam] = useState(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownVisible && !event.target.closest(".dropdown-button")) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [dropdownVisible]);

    const allItems = [
        {
            rank: 1,
            name: "Adnan",
            region: "Dubai",
            members: ["Ali", "Zara", "Ahmed"],
        },
        {
            rank: 2,
            name: "Brandon",
            region: "Dubai",
            members: ["Mike", "Linda"],
        },
        {
            rank: 3,
            name: "Charlie",
            region: "London",
            members: ["Chris", "Anna", "Sam"],
        },
    ];

    return (
        <div className="background-image">
            <h1 className="header"> Global Ranking</h1>
            <div className="controls-wrapper">
                <div className="dropdown">
                    <label htmlFor="dropdown-button"></label>
                    <button
                        className="dropdown-button"
                        id="dropdown-button"
                        title={selectedRegion}
                        onClick={toggleDropdown}
                    >
                        <span className="dropdown-button-text">
                            {selectedRegion}
                        </span>
                        <div
                            className={`arrow ${
                                dropdownVisible ? "arrow-up" : ""
                            }`}
                        />
                    </button>
                    <div
                        className="dropdown-options"
                        style={{ display: dropdownVisible ? "block" : "none" }}
                    >
                        {regions.map((region) => (
                            <React.Fragment key={region}>
                                <label
                                    className="dropdown-item"
                                    htmlFor={region}
                                    title={region}
                                    onClick={() => handleRegionSelect(region)}
                                >
                                    {region}
                                </label>
                                <input
                                    className="option"
                                    id={region}
                                    type="radio"
                                    name={region}
                                    value={region}
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
                        allItems={allItems}
                        itemsPerPage={5}
                        onTeamSelect={setSelectedTeam}
                    />
                </div>
                <img
                    src={require("../../images/team-info-frame.png")}
                    alt="team-info"
                    className="team-info"
                />
                {selectedTeam && (
                    <div className="team-details">
                        <h2 className="team-info-name">{selectedTeam.name}</h2>
                        <p className="team-info-rank">
                            Rank: {selectedTeam.rank}
                        </p>
                        <p className="team-info-rank">
                            Region: {selectedTeam.region}
                        </p>
                        <div className="team-members">
                            <h3>Members:</h3>
                            <ul>
                                {selectedTeam.members.map((member) => (
                                    <li key={member}>{member}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GlobalRanking;
