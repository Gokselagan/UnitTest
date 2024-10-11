import { render, screen } from '@testing-library/react';
import {App} from './App';
import { Header } from './Components/Header/Header';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Unit tests/i);
  expect(linkElement).toBeInTheDocument();
});


test("Header buttons on screen", () => {
  render(<Header />);

  expect(screen.getByText(/Home/i)).toBeInTheDocument();

  expect(screen.getByText(/Docs/i)).toBeInTheDocument();

  expect(screen.getByText(/Tutorial/i)).toBeInTheDocument();

  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
})