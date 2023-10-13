import React, { useState } from "react";

const Input = ({ onChange, ariaLabel } :  { onChange:React.ChangeEventHandler<HTMLInputElement>, ariaLabel : string }) => {
	// const [input, setInput] = useState("");

	// const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	//  	setInput(event.target?.value);
	// 	// test(input);
	// };

	// const test = (text: string) => {
	// 	const pattern = /([!@#\$%^&*])/;
	// 	const testString = text;
 
	// 	if (pattern.test(testString)) {
	// 		console.log("The test string contains one of the special characters: !@#$%^&*");
	// 	} else {
	// 		console.log("The test string does not contain any of the special characters.");
	// 	}
	// }

	return (
			<input 
				type="text" 
				aria-label={ariaLabel} 
				onChange={onChange}
			/>
	);
};

export default Input;