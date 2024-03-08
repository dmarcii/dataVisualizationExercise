import React from "react";
import LoginForm from "./components/UiComponents/LoginForm";
import RegisterForm from "./components/UiComponents/RegisterForm";
import Dashboard from "./components/UiComponents/Dashboard";
import Profile from "./components/UiComponents/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/styles/custom.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard/:username" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
