import './App.css';
import { Router } from './AppRouter';
import { Header } from './Components/Header/Header';

export const App = () => {
  return (
    <div className="app">
      <Header />
    <h1>Unit tests</h1>
    <Router />
    </div>
  );
}
