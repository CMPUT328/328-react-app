import React, { useState } from "react";
import "./CustomList.css";
import ListItem from "./ListItem";

const CustomList = ({ allItems, itemsPerPage, onTeamSelect }) => {
    const [displayedItems, setDisplayedItems] = useState(
        allItems.slice(0, itemsPerPage)
    );

    const handleLoadMore = () => {
        const nextItems = allItems.slice(
            displayedItems.length,
            displayedItems.length + itemsPerPage
        );
        setDisplayedItems([...displayedItems, ...nextItems]);
    };

    return (
        <div className="custom-list-container">
            <div className="custom-list">
                {displayedItems.map((item, index) => (
                    <ListItem
                        key={index}
                        index={index}
                        rank={item.rank}
                        name={item.team_name}
                        region={item.region}
                        onClick={() => onTeamSelect(item)}
                    />
                ))}
                {displayedItems.length < allItems.length && (
                    <button
                        className="load-more-btn"
                        onClick={handleLoadMore}
                    />
                )}
            </div>
            <img
                src={require("../../images/list-frame.png")}
                alt="List Frame"
                className="custom-list-frame"
            />
        </div>
    );
};

export default CustomList;
