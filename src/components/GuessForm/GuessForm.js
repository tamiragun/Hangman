//Form that captures the user's guesses and passes that info to the parent via an event handler

import React from "react";
import "./GuessForm.css";

export class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //On form entry, update state to reflect the user input
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  //On form submit, pass the input to the parent and reset the form to empty
  handleSubmit(e) {
    e.preventDefault();
    this.props.onGuess(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div className="guess-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="letter">Guess a letter:</label>
          <br></br>
          <br></br>
          <input
            type="text"
            id="letter"
            name="letter"
            maxLength="1"
            value={this.state.value}
            onChange={this.handleChange}
            required
          />
          <br></br>
          <br></br>
          <input type="submit" value="Guess" />
        </form>
      </div>
    );
  }
}
