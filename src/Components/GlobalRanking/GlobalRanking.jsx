import React, { useState, useEffect } from "react";
import "./GlobalRanking.css";
import CustomList from "../CustomList/CustomList";

const allItems = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "item 5",
    "item 6",
    "item 7",
    "item 8",
];
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
        { rank: 1, name: "Adnan", region: "Dubai" },
        { rank: 2, name: "Adnan", region: "Dubai" },
        { rank: 3, name: "Adnan", region: "Dubai" },
        { rank: 4, name: "Adnan", region: "Dubai" },
        { rank: 5, name: "John", region: "New York" },
        { rank: 6, name: "John", region: "New York" },
        { rank: 7, name: "John", region: "New York" },
        { rank: 8, name: "John", region: "New York" },
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
            <div className="list-wrapper">
                <CustomList allItems={allItems} itemsPerPage={5} />
            </div>
        </div>
    );
};

export default GlobalRanking;
