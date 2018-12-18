import React from "react";

export default props => (
  <div key={props.id} style={tipStyle}>
    <button
      className="hint"
      onClick={props.onBoxClick.bind(this, props.item.ID)}>
      Box
    </button>
    <button onClick={props.onContainerClick.bind(this, props.item.ID)}>
      Con
    </button>
    <svg style={triangleStyle} viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M 0 100 L 50 0 L 100 100 Z" />
    </svg>
  </div>
);

const tipStyle = {
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translate(-50%, 100%)",
  marginBottom: -10,
  background: "#efefef",
  padding: 10,
  textAlign: "center"
};

const triangleStyle = {
  position: "absolute",
  width: "20px",
  height: "10px",
  top: "-10px",
  left: "50%",
  marginLeft: "-10px",
  fill: "#efefef"
};
