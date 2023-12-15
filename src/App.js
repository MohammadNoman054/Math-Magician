import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Calculator from './Components/Calculator';
import Quotes from './Components/Quotes';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
        <text className="logo">Math Magicians</text>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
