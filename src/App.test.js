// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CleanSync title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CleanSync/i);
    expect(titleElement).toBeInTheDocument();
});
