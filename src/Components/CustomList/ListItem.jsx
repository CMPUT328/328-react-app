import React from "react";
import "./CustomList.css";

const ListItem = ({ index, rank, name, region, onClick }) => {
    return (
        <div className="list-item-container" onClick={onClick}>
            <p className="rank">{index + 1}</p>
            <div className="card">
                <div className="card-content">
                    <p className="name">{name}</p>
                    <p className="region">{region}</p>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
