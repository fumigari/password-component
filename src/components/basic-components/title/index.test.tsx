import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Title from '.';

describe("<Title />", () => {
	test("Should render Title", () => {
    render(<Title text=''/>);
    const result = screen.queryByRole('heading', {level: 1});
    expect(result).toBeInTheDocument();
  });
});