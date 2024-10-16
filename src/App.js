import './App.css';
import { Router } from './AppRouter';
import { Header } from './Components/Header/Header';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <>Unit Test Page</>
      <Router />
    </div>
  );
}
