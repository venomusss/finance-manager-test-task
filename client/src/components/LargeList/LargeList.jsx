import React from "react";
import { connect } from "react-redux";
import { loadTickers } from "../../store/actions";
import LargeListItem from "./Item/LargeListItem";

const LargeList = (props) => {
  window.onload = function () {
    props.load();
  };
  return (
    <div className="large-list">
      <h1 className="list-title">Details</h1>
      <div className="list-wrapper">
        {props.state.length > 0 ? (
          <ul className="list">
            <li className="large-item-wrapper table-header">
              <p>Ticker</p>
              <p>Exchange</p>
              <p>Price</p>
              <p>Dividend</p>
              <p>Yield</p>
              <p>Last Trade Time</p>
            </li>
            {props.state.map((item) => (
              <LargeListItem
                name={item.ticker}
                price={item.price}
                dividend={item.dividend}
                profit={item.yield}
                exchange={item.exchange}
                date={item.last_trade_time}
              />
            ))}
          </ul>
        ) : (
          <div>The list is empty</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchObj = {
  load: loadTickers,
};

export default connect(mapStateToProps, mapDispatchObj)(LargeList);
