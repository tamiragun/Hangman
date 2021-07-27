import React from 'react';
import {Button} from '../Button/Button.js';
import {HangmanDisplay} from '../HangmanDisplay/HangmanDisplay.js';
import {LetterDisplay} from '../LetterDisplay/LetterDisplay.js';
import {GuessForm} from '../GuessForm/GuessForm.js';
import './Game.css';


export class Game extends React.Component {
    render() {
        return (
            <div>
                <h1>Hangman</h1>
                <div className = "buttons">
                    <Button name="Start"/>
                    <Button name="Help"/>
                </div>
                <HangmanDisplay />
                <LetterDisplay />
                <GuessForm />
            </div>
        );
    }
}