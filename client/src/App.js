import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <HomePage />
      </Router>
    </div>
  );
}

export default App;
