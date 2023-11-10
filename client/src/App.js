import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AskQuestion from './components/AskQuestion/AskQuestion';
import QuestionDetails from './components/QuestionDetails/QuestionDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/askquestion" element={<AskQuestion />} />
        </Routes>
        <Routes>
          <Route path="/question" element={<QuestionDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
