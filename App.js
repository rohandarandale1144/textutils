import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.title = "Textutils - Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = "Textutils - Light Mode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode}
          toggleMode={toggleMode}/>
        <div className="container my-3">
          <Routes>
            <Route path="/about" aboutText="about"element={<About />} />
            <Route path="/" element={<Textform heading="Enter the text to analyze below" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;