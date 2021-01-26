import React, { Component } from "react";
import "./styles.css";
class ActiveCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = this.props.itemList;
    const itemLi = items.map((x) => {
      return (
        <li key={x}>
          {x}
          {!this.props.isCompletedCard ? (
            <input
              type="checkbox"
              onClick={() => {
                this.props.removeItem(x);
              }}
            />
          ) : null}
        </li>
      );
    });
    return (
      <div className="card">
        <h1>{this.props.title}</h1>
        {this.props.itemList.length == 0 ? (
          <p className={this.props.emptyDisplay}>{this.props.completionText}</p>
        ) : null}
        <ul>{itemLi}</ul>
        {!this.props.isCompletedCard ? (
          <div className="addItem--InputGroup">
            <input
              type="text"
              value={this.props.inputValue}
              onChange={this.props.handleChange}
            />
            <button onClick={this.props.addItem}>Add</button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ActiveCard;
