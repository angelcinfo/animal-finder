import React from 'react';
import { render, screen } from '@testing-library/react';
import FooterComponent from './FooterComponent';

test('renders footer text', () => {
    render(<FooterComponent />);
    const footerElement = screen.getByText(/Animal Finder/i);
    expect(footerElement).toBeInTheDocument();
});
