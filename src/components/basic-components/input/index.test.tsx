import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from '.';

describe("<Input />", () => {
	test("Should render Input", () => {
		render(<Input onChange={() => {}} ariaLabel=""/>);
		const result = screen.getByRole("textbox");
		expect(result).toBeInTheDocument();
  });

	test("Should have the correct ARIA label", () => {
		render(<Input onChange={() => {}} ariaLabel="test"/>);
		const result = screen.queryByLabelText("test");
		expect(result).toBeInTheDocument();
	});

	test("Should update input value", () => {
		render(<Input onChange={() => {}} ariaLabel="test"/>);
		const result = screen.queryByLabelText("test") as HTMLInputElement;
		fireEvent.change(result, { target: { value: "test value" } });

		expect(result.value).toBe("test value");
	})
});