import './App.css';
import PasswordCheck from './components/password-check';

const requirements = {
  specialCharacters: true,
	number: true,
	uppercase: true,
	noConsecutiveLetters: true,
};

function App() {
  return (
    <div className="App">
     <PasswordCheck options={requirements}/>
    </div>
  );
}

export default App;
