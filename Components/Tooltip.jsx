import React, { Component, createElement, Children } from "react";
import Tip from "../Components/Tip.jsx";
const parentStyle = {
  position: "relative"
};

export default class Tooltip extends Component {
  state = {
    show: false
  };

  render() {
    return createElement(
      "div",
      {
        style: { ...parentStyle, ...this.props.style },
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      },
      this.props.children,
      this.state.show && (
        <Tip
          item={this.props.item}
          onBoxClick={this.props.onBoxClick}
          onContainerClick={this.props.onContainerClick}
        />
      )
    );
  }

  _handleMouseEnter() {
    this.setState({ show: true });
  }
  handleMouseEnter = this._handleMouseEnter.bind(this);

  _handleMouseLeave() {
    this.setState({ show: false });
  }
  handleMouseLeave = this._handleMouseLeave.bind(this);
}
