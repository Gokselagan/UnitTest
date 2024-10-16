import { render, screen } from '@testing-library/react';
import {App} from './App';
import { Header } from './Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Unit Test Page/i);
  expect(linkElement).toBeInTheDocument();
});


test("Header buttons on screen", () => {
  render(
    <BrowserRouter>
     <Header />
    </BrowserRouter>
);

  expect(screen.getByText(/Home/i)).toBeInTheDocument();

  expect(screen.getByText(/Docs/i)).toBeInTheDocument();

  expect(screen.getByText(/Tutorial/i)).toBeInTheDocument();

  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});


test ("Routers should work correct", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  userEvent.click(screen.getByText(/Home/i));
  expect(window.location.pathname).toBe("/");

  userEvent.click(screen.getByText(/Docs/i));
  expect(window.location.pathname).toBe("/docs");

  userEvent.click(screen.getByText(/Tutorial/i));
  expect(window.location.pathname).toBe("/tutorial");

  userEvent.click(screen.getByText(/Contact/i));
  expect(window.location.pathname).toBe("/contact");

})