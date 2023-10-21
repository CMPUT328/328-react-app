import React, { useState, useEffect } from "react";
import "./TournamentRanking.css";
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

const TournamentRanking = () => {
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

    return (
        <div className="background-image">
            <div className="header-container">
                <h1 className="header">Tournament Ranking</h1>
                <div className="button-group">
                    <button className="region-btn" />
                    <button className="league-btn" />
                    <button className="tournament-btn" />
                </div>
            </div>
            <div className="list-and-info-container">
                {" "}
                {/* New Container */}
                <div className="list-wrapper">
                    <CustomList allItems={allItems} itemsPerPage={5} />
                </div>
                <img
                    src={require("../../images/tr-team-info-frame.png")}
                    alt="team-info"
                    className="team-info"
                />
            </div>
        </div>
    );
};

export default TournamentRanking;
