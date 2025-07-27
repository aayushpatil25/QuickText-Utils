import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const applyDarkColor = (colorCode) => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = colorCode;
      showAlert("Theme color changed!", "success");
    }
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBtnText('Enable Light Mode');
      document.body.style.backgroundColor = '#2f4f4f';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled!", "success");
    } else {
      setMode('light');
      setBtnText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = "#0a0e3aff";
      showAlert("Light Mode has been enabled!", "success");
    }
  };

  return (
    <Router>
      <Navbar
        title="QuickText Utils"
        about="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        btnText={btnText}
        applyDarkColor={applyDarkColor}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
