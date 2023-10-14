import { useState } from 'react';
import Title from '../basic-components/title';
import Input from '../basic-components/input';
import Requirement from '../requirement';
import "./index.css";

interface optionsProps {
	options: {
		specialCharacters: boolean;
		number: boolean;
		uppercase: boolean;
		noConsecutiveLetters: boolean;
	}
};

const regex = {
	specialCharacters: /[!@#\$%^&*]/,
	number: /(?=.*[0-9])/,
	uppercase: /(?=.*[A-Z])/,
	noConsecutiveLetters: /([a-zA-Z])\1/,
}

const PasswordCheck = ({ options } : optionsProps) => {
	const [specialCharacters, setSpecialCharacters] = useState(false);
	const [number, setNumber] = useState(false);
	const [uppercase, setUppercase] = useState(false);
	const [noConsecutiveLetters, setNoConsecutiveLetters] = useState(false);

	const checkPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		if(options.specialCharacters){
			regex.specialCharacters.test(event.target.value) ? 
				setSpecialCharacters(true) : setSpecialCharacters(false);
		}
		if(options.number){
			regex.number.test(event.target.value) ? 
				setNumber(true) : setNumber(false);
		}
		if(options.uppercase){
			regex.uppercase.test(event.target.value) ? 
				setUppercase(true) : setUppercase(false);
		}
		if(options.noConsecutiveLetters){
			regex.noConsecutiveLetters.test(event.target.value) ? 
				setNoConsecutiveLetters(false) : setNoConsecutiveLetters(true);
		}

	};

	return (
		<>
			<Title text="Password Component"/>
			<div className="wrapper">
				<Input onChange={(event) => checkPassword(event)} ariaLabel="Please, write your password" />
				
				<div className="verifiers">
					{options.specialCharacters ? 
						<Requirement text="Has a special characters !@#$%^&*" id="1" changeIcon={specialCharacters} /> : ""}
					
					{options.number ? 
						<Requirement text="Has a number 0-9" id="2" changeIcon={number} /> : ""}
					
					{options.uppercase ? 
						<Requirement text="Has an uppercase letter" id="3" changeIcon={uppercase} /> : ""}
					
					{options.noConsecutiveLetters ? 
						<Requirement text="Has NO consecutive letters" id="4" changeIcon={noConsecutiveLetters} /> : ""} 
				</div>
			</div>
		</>
	);
};

export default PasswordCheck;