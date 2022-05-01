import React, {useEffect, useCallback, useContext} from 'react'
import { AppContext } from '../App';
import Key from "./Key";

function Keyboard() {
  const {onLetterSelect, onLetterDelete, onEnter} = useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback((e) => {
    if (e.key === "Enter") {
      onEnter();
    } else if (e.key === "Backspace") {
      onLetterDelete();
    } else {
      keys1.forEach((key) => {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          onLetterSelect(key);
        }
      });
      keys2.forEach((key) => {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          onLetterSelect(key);
        }
      });
      keys3.forEach((key) => {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          onLetterSelect(key);
        }
      });
    }
  });
  
  useEffect(() => {
    document.onkeydown = handleKeyboard;
    return () => {
      document.onkeyup = handleKeyboard;
    };
  }, [handleKeyboard]);
  return (
    <div className='keyboard'>
      <div className="line1">{keys1.map((key) => {
        return <Key keyValue={key} />;
      })}</div>
      <div className="line2">{keys2.map((key) => {
        return <Key keyValue={key} />;
      })}</div>
      <div className="line3">
        <Key keyValue={"ENTER"} bigKey/>
        {keys3.map((key) => {
        return <Key keyValue={key} />;
      })}
      <Key keyValue={"DELETE"} bigKey/>
      </div>
    </div>
  )
}

export default Keyboard;