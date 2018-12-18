import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Containers from "../Components/Containers.jsx";

@inject("Store")
@observer
class App extends Component {
  componentWillMount() {
    this.props.Store.addContainer("First");
  }

  render() {
    let filter = this.props.Store.filteredItem("First");
    return (
      <div style={{ display: "inline-block" }}>
        {filter.map((item, i) => (
          <Containers
            key={item.ID}
            id={item.ID}
            style={{ display: "inline-block" }}
            container={this.props.Store}
            item={item}
            filterd={this.handleFilter}
            onBoxClick={this.handleAddBox}
            onContainerClick={this.handleAddContainer}
          />
        ))}
      </div>
    );
  }

  handleAddBox = parentID => {
    this.props.Store.addBox(parentID);
    console.log("2 add box clicked and parent id:", parentID);
  };

  handleAddContainer = parentID => {
    this.props.Store.addContainer(parentID);
    console.log("add container clicked");
  };

  handleFilter(id) {
    return this.props.Store.filteredItem(id);
  }
}
export default App;
