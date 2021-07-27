import React from 'react';
import state1 from '../../assets/state1.GIF';
import state2 from '../../assets/state2.GIF';
import state3 from '../../assets/state3.GIF';
import state4 from '../../assets/state4.GIF';
import state5 from '../../assets/state5.GIF';
import state6 from '../../assets/state6.GIF';
import state7 from '../../assets/state7.GIF';
import state8 from '../../assets/state8.GIF';
import state9 from '../../assets/state9.GIF';
import state10 from '../../assets/state10.gif';
import state11 from '../../assets/state11.GIF';
import './HangmanDisplay.css';

export class HangmanDisplay extends React.Component {
    render() {
        return (
            <div><img src={state2} alt="Hangman" />
            </div>
        );
    }
}