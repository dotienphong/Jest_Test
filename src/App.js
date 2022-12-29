import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === "red" ? 'blue' : 'red'
  const [disabled, setDisabled] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <button
          style={{ backgroundColor: buttonColor }}
          onClick={() => setButtonColor(newButtonColor)}
          disabled={disabled}
        >
          Change to {newButtonColor}
        </button>
        <input
          type="checkbox"
          id='disable-button-checkbox'
          defaultChecked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
        />
        <label htmlFor="disable-button-checkbox">Disable button</label>
      </header>
    </div>
  );
}

export default App;
