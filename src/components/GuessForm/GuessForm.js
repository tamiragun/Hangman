import React from 'react';
import './GuessForm.css';

export class GuessForm extends React.Component {
    render() {
        return (
            <div className="guess-form">
                <form action="/action_page.php">
                    <label htmlFor="letter">Guess a letter:</label>
                    <br></br><br></br>
                    <input type="text" id="letter" name="letter" maxlength="1"/>
                    <br></br><br></br>
                    <input type="submit" value="Guess"/>
                </form> 
            </div>
        );
    }
}