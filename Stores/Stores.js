import { decorate, observable, action, computed } from "mobx";

class Item {
  ID = Date.now();
  value;
  pID;
  constructor(pID, value) {
    this.pID = pID;
    this.value = value;
  }
}

decorate(Item, {
  value: observable,
  pID: observable,
  ID: observable
});

class Store {
  Items = [];
  filtered;

  addBox(parentId) {
    const newItem = new Item(parentId, "Box");
    this.Items.push(newItem);
    console.log("new BOX- parent id is ", parentId);
  }

  addContainer(parentId) {
    const newItem = new Item(parentId, "Con");
    this.Items.push(newItem);
    console.log("new Con- parent id is ", parentId);
  }

  filteredItem(filter) {
    this.filtered = this.Items.filter(item => item.pID === filter);
    return this.filtered;
  }
  update() {}
}

decorate(Store, {
  Items: observable,
  filtered: observable,
  addContainer: action,
  addBox: action,
  filteredItem: action
});

const pro = new Store();

export default pro;
