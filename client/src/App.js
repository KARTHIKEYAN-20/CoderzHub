import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AskQuestion from './components/AskQuestion/AskQuestion';
import QuestionDetails from './components/QuestionDetails/QuestionDetails';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/question';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions())
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/user" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/askquestion" element={<AskQuestion />} />
          <Route path="/question" element={<QuestionDetails />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
