import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import PasswordCheck from '.';

describe("<PasswordCheck />", () => {
	const requirements = {
		specialCharacters: true,
		number: true,
		uppercase: true,
		noConsecutiveLetters: true,
	};

	describe("Should have requirements green", () => {

		beforeEach(() => {
			render(<PasswordCheck options={requirements}/>);

			const result = screen.queryByLabelText("Please, write your password") as HTMLInputElement;
			fireEvent.change(result, { target: { value: "Test@123" } });
		});

		test("Should have a special characters !@#$%^&*", () => {
			const requirement = screen.queryByTestId("1");
			expect(requirement?.firstChild).toHaveClass('fa-circle-check');
		});
	
		test("Should have a number 0-9", () => {
			const requirement = screen.queryByTestId("2");
			expect(requirement?.firstChild).toHaveClass('fa-circle-check');
		});

		test("Should have an uppercase letter", () => {
			const requirement = screen.queryByTestId("3");
			expect(requirement?.firstChild).toHaveClass('fa-circle-check');
		});

		test("Should have NO consecutive letters", () => {
			const requirement = screen.queryByTestId("4");
			expect(requirement?.firstChild).toHaveClass('fa-circle-check');
		});
	 });

	 describe("Should have requirements red", () => {

		beforeEach(() => {
			render(<PasswordCheck options={requirements}/>);

			const result = screen.queryByLabelText("Please, write your password") as HTMLInputElement;
			fireEvent.change(result, { target: { value: "aaaaaaaaaa" } });
		});

		test("Should not have a special characters !@#$%^&*", () => {
			const requirement = screen.queryByTestId("1");
			expect(requirement?.firstChild).toHaveClass('fa-circle-xmark');
		});
	
		test("Should not have a number 0-9", () => {
			const requirement = screen.queryByTestId("2");
			expect(requirement?.firstChild).toHaveClass('fa-circle-xmark');
		});

		test("Should not have an uppercase letter", () => {
			const requirement = screen.queryByTestId("3");
			expect(requirement?.firstChild).toHaveClass('fa-circle-xmark');
		});

		test("Should have consecutive letters", () => {
			const requirement = screen.queryByTestId("4");
			expect(requirement?.firstChild).toHaveClass('fa-circle-xmark');
		});
	 });
});