import React from 'react';
import './LetterDisplay.css';

export class LetterDisplay extends React.Component {
    render() {
        return (
            <div className="letter-display">
                <ul>
                    <li>_</li>
                    <li>_</li>
                    <li>_</li>
                    <li>_</li>
                    <li>_</li>
                    <li>_</li>
                    <li>_</li>
                </ul>
            </div>
        );
    }
}