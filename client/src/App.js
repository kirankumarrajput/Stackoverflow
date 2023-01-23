import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./componets/Navbar/NavBar";
import AllRoutes from "./AllRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
