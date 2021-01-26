import React, { Component } from "react";
import ActiveCard from "./ActiveCard";
import "./styles.css";
class CardController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Add an item..."],
      itemsCompleted: [],
      inputItem: ""
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ inputItem: event.target.value });
  }
  addItem() {
    const itemsArray = this.state.items;
    itemsArray.push(this.state.inputItem);
    this.setState({ item: itemsArray, inputItem: "" });
  }
  removeItem(item) {
    console.log("Being called!");
    const itemsArray = this.state.items;
    const itemsCompletedArr = this.state.itemsCompleted;
    let index = itemsArray.indexOf(item);
    if (index !== -1) {
      itemsCompletedArr.push(itemsArray.slice(index, index + 1));
      itemsArray.splice(index, 1);
    }
    this.setState({ items: itemsArray, itemsCompleted: itemsCompletedArr });
  }

  render() {
    return (
      <div className="cardController">
        <h1>
          Remade todo app using one stateless child component and a stateful
          parent
        </h1>
        <ActiveCard
          itemList={this.state.items}
          title="Daily Todo"
          removeItem={this.removeItem}
          handleChange={this.handleChange}
          inputValue={this.state.inputItem}
          addItem={this.addItem}
          isCompletedCard={false}
          emptyDisplay="allCompleted"
          completionText="You completed all your tasks. Add more!"
        />
        <ActiveCard
          itemList={this.state.itemsCompleted}
          title="Completed Items"
          isCompletedCard={true}
          emptyDisplay="noCompleted"
          completionText="You've not completed any tasks yet!"
        />
      </div>
    );
  }
}

export default CardController;
