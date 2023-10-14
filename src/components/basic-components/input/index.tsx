import React from "react";

const Input = ({ onChange, ariaLabel } :  { onChange:React.ChangeEventHandler<HTMLInputElement>, ariaLabel : string }) => {
	return (
			<input 
				type="text" 
				aria-label={ariaLabel} 
				onChange={onChange}
			/>
	);
};

export default Input;