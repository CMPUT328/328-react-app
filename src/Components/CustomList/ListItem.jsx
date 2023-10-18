import React from "react";
import "./CustomList.css";

const ListItem = ({ title, description }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ListItem;
