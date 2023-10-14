import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Requirement from '.';

describe("<Requirement />", () => {
	test("Should render Requirement", () => {
		render(<Requirement text="test" changeIcon={false}/>);
		const iconRequirement = screen.queryByTitle("xmark");
		const textRequirement = screen.queryByText("test");
		expect(iconRequirement).toBeInTheDocument();
		expect(textRequirement).toBeInTheDocument();
	});	
});