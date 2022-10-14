import React from "react";

const RightListItem = ({ name, changePercent, price, change }) => {
  return (
    <li className="right-item-wrapper">
      <div className="right-info">
        <h3 className="right-name">{name}</h3>
        <p className="right-price">{price}</p>
      </div>
      <div className="right-changes">
        <p className="right-field">{changePercent}%</p>
        <p className="right-field">{change}</p>
      </div>
    </li>
  );
};

export default RightListItem;
