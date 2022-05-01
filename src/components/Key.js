import React, {useContext} from 'react';
import {AppContext} from "../App";

function Key({keyValue, bigKey}) {
  const {board, setBoard, currentAttempt, setCurrentAttempt} = useContext(AppContext);

  const chooseLetter = () => {
    const newBoard = [...board];
    newBoard[currentAttempt.attempt] [currentAttempt.letterPos] = keyValue;
    setBoard(newBoard);
    setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1});
    };
  return (
    <div className='key' id = {bigKey && "big"} onClick = {chooseLetter} >
      {keyValue}
    </div>
  )
}

export default Key;