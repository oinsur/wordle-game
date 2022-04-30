
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Wordle</h1>
    </div>
  );
}

export default App;

/**
 * Data we need to keep track of:
 * ==Solution
 *   ==5 letter word ex: 'brain'
 * ==guess history
 * ==need an array to keep track of guesses
 * ==each previous guess is an array of letter objects [{}, {}, {}, {}, {}]
 * ==each object will be a letter from the guessed word {letter: 'a', color: 'yellow'}
 * ==current guess
 *   ==string 'hello'
 * ==keypad letter
 *   array of letter objects [{key: 'a', color: 'green'}, {}, {}...]
 * number of guesses
 *   =an integer 0 - 6
 * 
 * ==game process
 *   ==entering words:
 *     ==user enters a letter & a square is filled in with that letter
 *     ==when a user hits delete, the previous letter is deleted
 *     ==when a user hits enter, the word is submitted
 *     ==ALL squared need to be filled in or the word will NOT be submitted
 *     ==words CAN'T be repeated
 *   ==Checking guesses:
 *     ==each letter is checked to see if it is in the solution
 *     ==each letter is checked an marked accordingly: 
 *       ==exact match: position & letter (green)
 *       ==partial match: letter (yellow)
 *       ==No match: grey
 *     ==keyed letters are updated with correct colors
 * ==ending the game:
 *   ==when the user guesses the word correctly:
 *     ==modal will congratulate them
 *   ==when the user doesn't guess correctly:
 *     ==modal will tell them they didn't guess correctly
 * 
 * ==Where to get solution data:
 *   ==3rd party API
 *   ==database
 *   ==json file
 *      
 */