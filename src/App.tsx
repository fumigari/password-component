import React from 'react';
import './App.css';
import PasswordCheck from './components/password-check';

const requirements = {
  specialCharacters: "!@#\$%^&*",
	number: "?=.*[0-9]",
	uppercase: "?=.*[A-Z]",
	// "noConsecutiveLetters": "(^(?:(?!([a-zA-Z])\))*$)",
};

function App() {
  return (
    <div className="App">
     <PasswordCheck options={requirements}/>
    </div>
  );
}

export default App;
