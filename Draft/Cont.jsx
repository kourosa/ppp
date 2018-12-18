import React from "react";
import Tooltip from "../Components/Tooltip.jsx";

export default props => (
  <div style={Style}>
    <Tooltip
      item={props.items}
      onBoxClick={props.onBoxClick}
      onContainerClick={props.onContainerClick}>
      <label>Add</label>
    </Tooltip>
  </div>
);

const Style = {
  display: "inline-block",
  padding: "5px",
  margin: "15px",
  background: "silver"
};
