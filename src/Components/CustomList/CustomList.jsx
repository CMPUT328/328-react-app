import React, { useState } from "react";
import "./CustomList.css";
import ListItem from "./ListItem";

const CustomList = ({ allItems, itemsPerPage }) => {
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
                        image={item.image}
                        title={item.title}
                        description={item.description}
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
