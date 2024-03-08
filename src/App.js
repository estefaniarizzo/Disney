import Login from './components/login';
import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/Home" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;
