import React, { Component } from "react";
import "./MemoryCard.css";

class MemoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
  }

  clickHandler = () => {
    this.setState({ isFlipped: !this.state.isFlipped });
  };

  render() {
    let MemoryCardInner = "MemoryCardInner";
    if (
      this.state.isFlipped
        ? (MemoryCardInner = "MemoryCardInner flipped")
        : "MemoryCardInner"
    );
    return (
      <div className="MemoryCard" onClick={this.clickHandler}>
        <div className={MemoryCardInner}>
          <div className="MemoryCardBack"></div>
          <div className="MemoryCardFront">∆</div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
