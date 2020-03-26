import React, { Component } from "react";
import "./MemoryCard.css";

class MemoryCard extends Component {
  render() {
    let MemoryCardInner = "MemoryCardInner";
    if (
      this.props.isFlipped
        ? (MemoryCardInner = "MemoryCardInner flipped")
        : "MemoryCardInner"
    );
    return (
      <div className="MemoryCard" onClick={this.props.pickCard}>
        <div className={MemoryCardInner}>
          <div className="MemoryCardBack"></div>
          <div className="MemoryCardFront">{this.props.symbol}</div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
