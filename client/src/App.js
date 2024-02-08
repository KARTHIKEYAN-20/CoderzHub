import './App.css';
import Header from '/workspaces/CoderHub/client/src/Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '/workspaces/CoderHub/client/src/Components/HomePage/HomePage';
import AskQuestion from '/workspaces/CoderHub/client/src/Components/AskQuestion/AskQuestion';
import QuestionDetails from '/workspaces/CoderHub/client/src/Components/QuestionDetails/QuestionDetails';
import Login from '/workspaces/CoderHub/client/src/Components/Login/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/question';
import Profile from './Components/Profile/Profile';

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
          <Route path="/question/:id" element={<QuestionDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
