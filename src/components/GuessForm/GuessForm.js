import React from "react";
import "./GuessForm.css";

export class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

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
          />
          <br></br>
          <br></br>
          <input type="submit" value="Guess" />
        </form>
      </div>
    );
  }
}
