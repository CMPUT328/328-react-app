import React, { useState, useEffect } from "react";
import "./GlobalRanking.css";

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

    const regions = ["London", "Tokyo", "Beijing", "Manchester"];
    return (
        <div className="background-image">
            <h1 className="header"> Global Ranking</h1>
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
                        className={`arrow ${dropdownVisible ? "arrow-up" : ""}`}
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

                <div className="search-wrapper">
                    <input
                        type="search"
                        className="searchbox"
                        placeholder="Search Team"
                    />
                    <div className="search-icon" />
                </div>
            </div>
        </div>
    );
};

export default GlobalRanking;
