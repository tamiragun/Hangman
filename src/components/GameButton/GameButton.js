import React from "react";
import "./GameButton.css";
import Button from "react-bootstrap/Button";

export class GameButton extends React.Component {
  render() {
    return (
      <div className="game-button">
        <Button variant="secondary" onClick={this.props.onClick}>
          {this.props.name}
        </Button>
      </div>
    );
  }
}
