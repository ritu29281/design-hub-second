import "./App.css";
import React from "react";
// import Footer from "./components/Footer";
import Design from "./Pages/Design";
import Header from "./components/Header";
import FullBranding from "./Pages/FullBranding";
import Development from "./Pages/Development";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/design" element={<Design />} />
          <Route path="/development" element={<Development />} />
          <Route path="/full-branding" element={<FullBranding />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
