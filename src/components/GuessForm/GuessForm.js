//Form that captures the user's guesses and passes that info to the parent via an event handler

import React from "react";
import "./GuessForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormControl from "react-bootstrap/FormControl";

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
        <Form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <Form.Label htmlFor="letter">Guess a letter:</Form.Label>
            <Form.Control
              type="text"
              id="letter"
              name="letter"
              maxLength="1"
              value={this.state.value}
              onChange={this.handleChange}
              required
              className="submit-text"
            />

            <Button
              variant="primary"
              type="submit"
              value="Guess"
              className="submit-button"
            >
              Guess
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
