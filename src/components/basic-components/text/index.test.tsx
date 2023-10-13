import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Text from '.';

describe("<Text />", () => {
	test("Should render Text", () => {
		render(<Text text="test"/>);
		const result = screen.queryByText("test");
		expect(result).toBeInTheDocument();
  });
});