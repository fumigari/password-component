import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Icon from '.';

describe("<Icon />", () => {
	test("Should render X Mark", () => {
		render(<Icon changeIcon={false}/>);
		const result = screen.queryByTitle("xmark");
		expect(result).toBeInTheDocument();
	});

	test("Should render Check", () => {
		render(<Icon changeIcon={true}/>);
		const result = screen.queryByTitle("check");
		expect(result).toBeInTheDocument();
	});
});