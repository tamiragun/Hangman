import React from "react";
import { GameButton } from "../GameButton/GameButton.js";
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
      lettersToGuess: [],
      gameStatus: "",
      displayHelp: false,
    };
    this.onStart = this.onStart.bind(this);
    this.onHelp = this.onHelp.bind(this);
    this.onGuess = this.onGuess.bind(this);
    this.displayGameStatus = this.displayGameStatus.bind(this);
  }

  onStart() {
    //Set game status to "ongoing"
    this.setState({ gameStatus: "ongoing" });
    //Pick a random winning word
    this.setState({ winningWord: pickRandomWord(listOfWords, 4, 10) });
    //Populate the correct guesses array with the right number of underscores
    //Done asynchronously to allow for this.state.winningWord to update first
    //TODO #2 replace TimeOut with a better way to display empty letter slots
    setTimeout(() => {
      this.setState({
        lettersToGuess: populateUnderscores(this.state.winningWord),
      });
    }, 500);
    //(Re)set guesses to zero at start of game
    this.setState({ incorrectGuesses: 0, correctGuesses: 0 });
  }

  onHelp() {
    //Toggle the help status when the button is clicked
    this.setState((prevState) => ({
      displayHelp: !prevState.displayHelp,
    }));
  }

  onGuess(letter) {
    //Check if the selected letter matches the winning word
    if (this.state.winningWord.includes(letter)) {
      //Increment the correct guesses
      let newCount = this.state.correctGuesses + 1;
      this.setState({ correctGuesses: newCount });
      //Update the letters to display
      let newLettersToGuess = this.state.lettersToGuess.map((element, i) => {
        if (this.state.winningWord[i] === letter) {
          return letter;
        } else {
          return element;
        }
      });
      this.setState({ lettersToGuess: newLettersToGuess });
      //Check if the game is won:
      if (newCount === this.state.winningWord.length) {
        //Cause 'game won' message to display
        this.setState({ gameStatus: "won" });
      }

      //If the selected letter doesn't match the winning word:
    } else {
      //Increment the correct guesses
      let newCount = this.state.incorrectGuesses + 1;
      this.setState({ incorrectGuesses: newCount });

      //Check if the game is lost:
      if (newCount === 10) {
        //Cause 'game lost' message to display
        this.setState({ gameStatus: "lost" });
        //Display what the word was:
        this.setState({ lettersToGuess: Array.from(this.state.winningWord) });
      }
    }
  }

  //Helper function to determine display message based on game status
  displayGameStatus() {
    if (this.state.gameStatus === "ongoing") {
      return <GuessForm onGuess={this.onGuess} />;
    } else if (this.state.gameStatus === "won") {
      return <h2>You won!</h2>;
    } else if (this.state.gameStatus === "lost") {
      return <h2>You lost :-(</h2>;
    }
  }

  render() {
    return (
      <div className="game">
        <h1>Hangman</h1>
        <div className="buttons">
          <GameButton
            name={this.state.gameStatus === "" ? "Start" : "Restart"}
            onClick={this.onStart}
          />
          <GameButton
            name={this.state.displayHelp ? "Got it!" : "Help"}
            onClick={this.onHelp}
          />
        </div>
        <div>{this.state.displayHelp && displayHelp}</div>
        <HangmanDisplay incorrectGuesses={this.state.incorrectGuesses} />
        <LetterDisplay lettersToGuess={this.state.lettersToGuess} />
        {this.displayGameStatus()}
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
    underscores.push("_");
  }
  return underscores;
}

//******************************************************************************************
//List of words to pick from. TODO #1 Replace this with all words in the provided dictionary
const listOfWords = [
  "top",
  "twin",
  "union",
  "export",
  "sequence",
  "trainer",
  "articulate",
  "seize",
  "snuggle",
  "work",
  "even",
  "pace",
  "investment",
  "temperature",
  "document",
  "spread",
  "assumption",
  "wagon",
  "contain",
  "talk",
  "solid",
  "language",
  "perceive",
  "donor",
  "syndrome",
  "restaurant",
  "welcome",
  "enlarge",
  "bald",
  "ward",
  "timber",
  "tower",
  "elegant",
  "other",
  "see",
  "implicit",
  "deter",
  "shaft",
  "junior",
  "belt",
  "base",
  "twilight",
  "quantity",
  "survival",
  "tradition",
  "liberty",
  "discriminate",
  "learn",
  "shout",
  "scream",
];

//Help description to explain the rules if the user needs help:
const displayHelp = (
  <p>
    When you click start, the computer will pick a random word and display the
    number of letters it contains. Your job is to guess which letters the word
    contains, until you can guess the entire word. You do this by entering a
    letter in the field below the image, and clicking 'Guess'. If the secret
    word contains your letter, it will show up in the corresponding place,
    allowing you to better guess the remaining letters. However if the secret
    word does not contain your letter, then the drawing of a hanging man is
    progressed with one step. You win if you guess all letters in the word
    correctly, and you lose if your incorrect guesses lead to the full man being
    hung. Press start to play!
  </p>
);
