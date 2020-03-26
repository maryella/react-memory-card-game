import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import "./App.css";

function generateDeck() {
  const symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
  let deck = [];
  for (let i = 0; i < 16; i++) {
    deck.push({ isFlipped: false, symbol: symbols[i % 8] });
  }
  deck = shuffle(deck);
  return deck;
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: generateDeck(), pickedCards: [] };
  }

  pickCard(cardIndex) {
    if (this.state.deck[cardIndex].isFlipped) {
      return;
    }
    let cardToFlip = { ...this.state.deck[cardIndex] };
    cardToFlip.isFlipped = true;
    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card;
    });
    if (newPickedCards.length == 2) {
      const card1Index = newPickedCards[0];
      const card2Index = newPickedCards[1];
      if (
        this.state.deck[card1Index].symbol != this.state.deck[card2Index].symbol
      ) {
        newDeck = this.unflipCards(card1Index, card2Index);
      }
      newPickedCards = [];
    }
    console.log(newDeck);
    this.setState({ deck: newDeck, pickedCards: newPickedCards });
  }

  unflipCards(card1Index, card2Index) {
    console.log("unflip cards fxn");
    let card1 = { ...this.state.deck[card1Index] };
    let card2 = { ...this.state.deck[card2Index] };
    card1.isFlipped = false;
    card2.isFlipped = false;

    let newDeck = this.state.deck.map((card, index) => {
      if (index == card1Index) {
        return card1;
      }
      if (index == card2Index) {
        return card2;
      }
      return card;
    });
    return newDeck;
  }

  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return (
        <MemoryCard
          symbol={card.symbol}
          isFlipped={card.isFlipped}
          key={index}
          pickCard={this.pickCard.bind(this, index)}
        />
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <p>Match Cards to Win</p>
        </header>
        <div>{cardsJSX.slice(0, 4)}</div>
        <div>{cardsJSX.slice(4, 8)}</div>
        <div>{cardsJSX.slice(8, 12)}</div>
        <div>{cardsJSX.slice(12, 16)}</div>
      </div>
    );
  }
}

export default App;
