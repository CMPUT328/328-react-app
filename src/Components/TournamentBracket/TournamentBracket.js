// src/components/TournamentBracket.js
import React from 'react';
import './TournamentBracket.css';
import { useWindowSize } from 'react-use';

import { SingleEliminationBracket, Match, MATCH_STATES, SVGViewer } from '@g-loot/react-tournament-brackets';

const MyBracket = () => {
    const matches = [
        {
          id: 1,
          nextMatchId: 5,
          tournamentRoundText: "Quarter-final",
          state: "DONE",
          participants: [
            {
              id: "team1",
              resultText: "WON",
              isWinner: true,
              name: "Bilibili Gaming"
            },
            {
              id: "team2",
              resultText: "LOST",
              isWinner: false,
              name: "G2 Esports"
            }
          ]
        },
        {
          id: 2,
          nextMatchId: 5,
          tournamentRoundText: "Quarter-final",
          state: "DONE",
          participants: [
            {
              id: "team3",
              resultText: "WON",
              isWinner: true,
              name: "Gen.G Esports"
            },
            {
              id: "team4",
              resultText: "LOST",
              isWinner: false,
              name: "KT Rolster"
            }
          ]
        },
        {
          id: 3,
          nextMatchId: 6,
          tournamentRoundText: "Quarter-final",
          state: "DONE",
          participants: [
            {
              id: "team5",
              resultText: "LOST",
              isWinner: false,
              name: "Weibo Gaming"
            },
            {
              id: "team6",
              resultText: "STOMPED",
              isWinner: true,
              name: "T1"
            }
          ]
        },
        {
          id: 4,
          nextMatchId: 6,
          tournamentRoundText: "Quarter-final",
          state: "DONE",
          participants: [
            {
              id: "team7",
              resultText: "LOST",
              isWinner: false,
              name: "Dplus"
            },
            {
              id: "team8",
              resultText: "WON",
              isWinner: true,
              name: "JD Gaming"
            }
          ]
        },
        {
          id: 5,
          nextMatchId: 7,
          tournamentRoundText: "2",
          state: "DONE",
          participants: [
            {
              id: "team1",
              resultText: "LOST",
              isWinner: false,
              name: "Bilibili Gaming"
            },
            {
              id: "team3",
              resultText: "WON",
              isWinner: true,
              name: "Gen.G Esports"
            }
          ]
        },
        {
          id: 6,
          nextMatchId: 7,
          tournamentRoundText: "2",
          state: "DONE",
          participants: [
            {
              id: "team6",
              resultText: "STOMPED",
              isWinner: true,
              name: "T1"
            },
            {
              id: "team8",
              resultText: "LOST",
              isWinner: false,
              name: "JD Gaming"
            }
          ]
        },
        {
          id: 7,
          nextMatchId: null,
          tournamentRoundText: "3",
          state: "DONE",
          participants: [
            {
              id: "team3",
              resultText: "LOST",
              isWinner: false,
              name: "Gen.G Esports"
            },
            {
              id: "team6",
              resultText: "STOMPED",
              isWinner: true,
              name: "T1"
            }
          ]
        }
      ];

      const { width, height } = useWindowSize();
      
      const bracketOptions = {
        style: {
            width: 500,
            boxHeight: 140,
            height: height - 100
        },
    };

    const bracketTheme = {
        svgBackground: '#4CAF50',
        fontFamily: "Arial, sans-serif", // adjust this as needed
        transitionTimingFunction: "ease-in-out", // adjust this as needed
        disabledColor: "#888888", // adjust this as needed
        roundHeaders: {
            background: "#000000", // adjust this as needed
        },
        matchBackground: {
            wonColor: "#4CAF50", 
            lostColor: "#FF0000", 
        },
        border: {
            color: "#ffd700", // adjust this as needed
            highlightedColor: "#ffd700", // adjust this as needed
        },
        textColor: {
            highlighted: "#000000", // adjust this as needed
            main: "#333333", // adjust this as needed
            dark: "#111111", // adjust this as needed
            disabled: "#AAAAAA", // adjust this as needed
        },
        score: {
            text: {
                highlightedWonColor: "#FFFFFF", // adjust this as needed
                highlightedLostColor: "#DDDDDD", // adjust this as needed
            },
            background: {
                wonColor: "#4CAF50", // adjust this as needed
                lostColor: "#FF0000", // adjust this as needed
            },
        },
        canvasBackground: "#4CAF50", // close to black
    };
    
    return (
      <SingleEliminationBracket
        matches={matches}
        matchComponent={Match}
        options={bracketOptions}
        // theme={bracketTheme}
        svgWrapper={({ children, ...props }) => (
          <SVGViewer width={window.innerWidth} height={window.innerHeight} {...props}>
            {children}
          </SVGViewer>
        )}
      />
    );
  };
  
export default MyBracket;