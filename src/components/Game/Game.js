import React from "react";
import { Button } from "../Button/Button.js";
import { HangmanDisplay } from "../HangmanDisplay/HangmanDisplay.js";
import { LetterDisplay } from "../LetterDisplay/LetterDisplay.js";
import { GuessForm } from "../GuessForm/GuessForm.js";
import "./Game.css";

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winningWord: "",
      incorrectGuesses: 0,
      correctGuesses: 0,
      //REPLACE THIS ************************************************************
      lettersToGuess: ["_", "_", "_"],
      gameStatus: "",
    };
    this.onStart = this.onStart.bind(this);
    this.onGuess = this.onGuess.bind(this);
  }

  onStart() {
    //Set game status to "ongoing"
    this.setState({ gameStatus: "ongoing" });
    //Pick a random winning word
    this.setState({ winningWord: pickRandomWord(listOfWords, 4, 10) });
    //Populate the correct guesses array with the right number of underscores
    //TEST THIS ************************************************************
    this.setState({
      lettersToGuess: populateUnderscores(this.state.winningWord),
    });
    //(Re)set guesses to zero at start of game
    this.setState({ incorrectGuesses: 0, correctGuesses: 0 });
  }

  onGuess(letter) {
    console.log("guess placed" + letter);
  }

  render() {
    return (
      <div>
        <h1>Hangman</h1>
        <div className="buttons">
          <Button
            name={this.state.gameStatus === "ongoing" ? "Restart" : "Start"}
          />
          <Button name="Help" />
        </div>
        <HangmanDisplay incorrectGuesses={this.state.incorrectGuesses} />
        <LetterDisplay lettersToGuess={this.state.lettersToGuess} />
        <GuessForm onGuess={this.onGuess} />
      </div>
    );
  }
}

//Helper function to pick a random word
function pickRandomWord(array, minLength, maxLength) {
  let foundWord = "";
  while (!foundWord) {
    const randomIndex = Math.floor(Math.random() * array.length);
    if (
      array[randomIndex].length >= minLength &&
      array[randomIndex].length <= maxLength
    ) {
      foundWord = array[randomIndex];
    }
  }
  return foundWord;
}

//Helper function to populate an array with the correct numbe rof underscores
function populateUnderscores(word) {
  let underscores = [];
  for (let i = 0; i < word.length; i++) {
    underscores.push(word[i]);
  }
  return underscores;
}

//************************************************************$ */
//List of words to pick from. REPLACE THIS WITH PARSED DICTIONARY
const listOfWords = ["laptop", "wolf", "cowboy"];
