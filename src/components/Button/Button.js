import React from 'react';
import './Button.css';

export class Button extends React.Component {
    render() {
        return (
            <div className="game-button">
                <button onClick={this.props.onClick}>{this.props.name}</button>
            </div>
        );
    }
}