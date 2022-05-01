import React, {useContext} from 'react';
import {AppContext} from "../App";

function Key({keyValue, bigKey}) {
  const {onLetterSelect, onLetterDelete, onEnter} = useContext(AppContext);

  const chooseLetter = () => {
    if (keyValue === "ENTER") {
      onEnter();
      } else if (keyValue === "DELETE") {
        onLetterDelete();
      } else {
        onLetterSelect(keyValue);
      }
    };
    return (
    <div className='key' id = {bigKey && "big"} onClick = {chooseLetter} >
      {keyValue}
    </div>
  );
}

export default Key;