import React, { useState, useEffect } from "react";
import "./GlobalRanking.css";
import CustomList from "../CustomList/CustomList";
import { API, graphqlOperation } from "aws-amplify";
import { listRegions } from "../../graphql/queries";

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

const GlobalRanking = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Region");
  const [regions, setRegions] = useState([]);

  const fetchRegions = async () => {
    const regionData = await API.graphql(graphqlOperation(listRegions));
    setRegions(regionData.data.listRegions.items);
  };

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

  useEffect(() => {
    fetchRegions();
  }, []);

    return (
        <div>
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
