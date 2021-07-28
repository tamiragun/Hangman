import React from "react";
import "./HelpBlurb.css";

export class HelpBlurb extends React.Component {
  render() {
    //This component's props are synced with the Button component's props,
    //via the parent (Game.js) and a click handler
    if (this.props.displayHelp) {
      return (
        <div className="help-blurb">
          <p>
            When you click start, the computer will pick a random word and
            display the number of letters it contains. Your job is to guess
            which letters the word contains, until you can guess the entire
            word. You do this by entering a letter in the field below the image,
            and clicking 'Guess'. If the secret word contains your letter, it
            will show up in the corresponding place, allowing you to better
            guess the remaining letters. However if the secret word does not
            contain your letter, then the drawing of a hanging man is progressed
            with one step. You win if you guess all letters in the word
            correctly, and you lose if your incorrect guesses lead to the full
            man being hung. Press start to play!
          </p>
        </div>
      );
    } else {
      return null;
    }
  }
}
