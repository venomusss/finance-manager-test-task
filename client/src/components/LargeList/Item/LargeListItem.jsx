import React from "react";

const LargeListItem = ({ name, price, dividend, profit, exchange, date }) => {
  return (
    <li className="large-item-wrapper">
      <h3 className="right-name">{name}</h3>
      <h3 className="right-name">{exchange}</h3>
      <p className="large-field">{price}</p>
      <p className="large-field">{dividend}%</p>
      <p className="large-field">{profit}</p>
      <p className="large-field">
        {new Date(Date.parse(date)).toLocaleString()}
      </p>
    </li>
  );
};

export default LargeListItem;
