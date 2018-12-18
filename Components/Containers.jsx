import React, { Component } from "react";
import Box from "../Components/Box.jsx";
import Tooltip from "../Components/Tooltip.jsx";
import StyledBox from "../Styles/StyledBox.jsx";
import { inject, observer } from "mobx-react";

const Style = {
  display: "inline-block",
  padding: "5px",
  margin: "15px",
  background: "lightgray"
};
@inject("Store")
@observer
class Containers extends Component {
  render() {
    let filter = this.props.container.filteredItem(this.props.id);
    // let filter = this.props.Store.filteredItem(this.props.id);
    // const filter2 = this.props.filterd(this.props.item.ID);
    return (
      <div className="box">
        {this.props.item.value === "Box" ? (
          <Box item={this.props.item} />
        ) : (
          <div className="containerboc">
            <Tooltip
              key={this.props.item.ID}
              style={Style}
              item={this.props.item}
              onBoxClick={this.props.onBoxClick}
              onContainerClick={this.props.onContainerClick}>
              <label>Add</label>
            </Tooltip>
            {filter.map((item, i) => (
              <div>
                <Containers
                  style={{ display: "inline-block" }}
                  container={this.props.container}
                  item={item}
                  key={item.ID}
                  onBoxClick={this.props.onBoxClick}
                  onContainerClick={this.props.onBoxClick}
                />
                <h6>hello</h6>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Containers;
