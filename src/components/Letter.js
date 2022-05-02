import React, {useContext} from 'react';
import {AppContext} from "../App";

function Letter({ letterPos, attemptValue }) {
  const {board, rightWord} = useContext(AppContext); 
  const letter = board[attemptValue][letterPos];

  const correct = rightWord[letterPos] === letter;
  const almost = !correct && letter !== "" && rightWord.includes(letter);

  const letterState = correct ? "correct" : almost ? "almost" : "error";

  return <div className='letter' id={letterState}>{letter}</div>
  
}

export default Letter;