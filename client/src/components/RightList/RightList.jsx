import React from "react";
import { connect } from "react-redux";
import RightListItem from "./Item/RightListItem";
import { loadTickers } from "../../store/actions";

function RightList(props) {
  window.onload = function () {
    props.load();
  };
  console.log(props);
  return (
    <div className="right-wrapper">
      <h1 className="list-title">Situation on the market</h1>
      <div className="list-wrapper">
        {props.state.length > 0 ? (
          <ul className="list">
            {props.state.map((item) => (
              <RightListItem
                key={item.ticker}
                name={item.ticker}
                changePercent={item.change_percent}
                price={item.price}
                change={item.change}
              />
            ))}
          </ul>
        ) : (
          <div>The list is empty</div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchObj = {
  load: loadTickers,
};

export default connect(mapStateToProps, mapDispatchObj)(RightList);
