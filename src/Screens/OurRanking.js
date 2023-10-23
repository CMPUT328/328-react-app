import React from 'react';
import './Bracket.css';

function Bracket() {
    return (
        <div className="tournament">
            <div className="round quarter-finals">
                <div className="match">
                    <div className="team">Team R1</div>
                    <div className="team">Team R2</div>
                </div>
                <div className="match">
                    <div className="team">Team R3</div>
                    <div className="team">Team R4</div>
                </div>
                <div className="match">
                    <div className="team">Team B1</div>
                    <div className="team">Team B2</div>
                </div>
                <div className="match">
                    <div className="team">Team B3</div>
                    <div className="team">Team B4</div>
                </div>
            </div>
            <div className="round semi-finals">
                <div className="match">
                    <div className="team">SF Winner 1</div>
                </div>
                <div className="match">
                    <div className="team">SF Winner 2</div>
                </div>
            </div>
            <div className="champion">Champion</div>
        </div>
    );
}

export default Bracket;
