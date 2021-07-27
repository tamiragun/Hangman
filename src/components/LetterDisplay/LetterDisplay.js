import React from "react";
import "./LetterDisplay.css";

export class LetterDisplay extends React.Component {
  render() {
    return (
      <div className="letter-display">
        <ul>
          {this.props.lettersToGuess.map((letter, i) => {
            return <li key={letter + "_" + i}>{letter}</li>;
          })}
        </ul>
      </div>
    );
  }
}
