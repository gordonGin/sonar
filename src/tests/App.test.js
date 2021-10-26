import React from "react";
import { render, screen } from '@testing-library/react';
import App from "../App";

beforeAll(() => {
	render(<App />);

})
test('should why us be in the document', () => {
	const linkElement = screen.getByText(/why us/i);
	expect(linkElement).toBeInTheDocument();
});

test('should product be in the document', () => {
	const element = screen.getByText(/products/i);
	expect(element).toBeInTheDocument();
});

test('should customers be in the document', () => {
	const element = screen.getByText(/products/i);
	expect(element).toBeInTheDocument();
})
