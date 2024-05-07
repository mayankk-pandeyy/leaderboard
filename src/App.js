import './App.css';
import Form from './components/Form';
import Leaderboard from './components/Leaderboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
      </Routes>
    </div>
  );
}

export default App;
