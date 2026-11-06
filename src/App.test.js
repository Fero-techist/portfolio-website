import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio with developer name and sections', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/Ferotech/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
