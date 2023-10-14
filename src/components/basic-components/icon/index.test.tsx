import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Icon from '.';

describe("<Icon />", () => {
	test("Should render X Mark", () => {
		render(<Icon id="1" changeIcon={false}/>);
		const result = screen.queryByTitle("xmark");
		expect(result).toBeInTheDocument();
	});

	test("Should render Check", () => {
		render(<Icon id="1" changeIcon={true}/>);
		const result = screen.queryByTitle("check");
		expect(result).toBeInTheDocument();
	});
});