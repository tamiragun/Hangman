import React from "react";
import state1 from "../../assets/state1.GIF";
import state2 from "../../assets/state2.GIF";
import state3 from "../../assets/state3.GIF";
import state4 from "../../assets/state4.GIF";
import state5 from "../../assets/state5.GIF";
import state6 from "../../assets/state6.GIF";
import state7 from "../../assets/state7.GIF";
import state8 from "../../assets/state8.GIF";
import state9 from "../../assets/state9.GIF";
import state10 from "../../assets/state10.gif";
import state11 from "../../assets/state11.GIF";
import "./HangmanDisplay.css";

export class HangmanDisplay extends React.Component {
  render() {
    let image;
    switch (this.props.incorrectGuesses) {
      case 1:
        image = state2;
        break;
      case 2:
        image = state3;
        break;
      case 3:
        image = state4;
        break;
      case 4:
        image = state5;
        break;
      case 5:
        image = state6;
        break;
      case 6:
        image = state7;
        break;
      case 7:
        image = state8;
        break;
      case 8:
        image = state9;
        break;
      case 9:
        image = state10;
        break;
      case 10:
        image = state11;
        break;
      default:
        image = state1;
    }

    return (
      <div className="hangman-display">
        <img src={image} alt="Hangman" />
      </div>
    );
  }
}
