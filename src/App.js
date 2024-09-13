import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProjDetailsPage from "./components/proj_page/ProjDetailsPage";
import MorePage from "./components/more_page/MorePage";
import AboutPage from "./components/AboutPage";
import MoreDetailsPage from "./components/more_page/MoreDetailsPage";
import ParticlesBackground from "./components/ParticlesBackground";
import "./globals.css";

const App = () => {
  return (
    <div>
    <ParticlesBackground/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjDetailsPage />} />
          <Route path="/project" element={<ProjDetailsPage />} />
          <Route path="/more/:id" element={<MoreDetailsPage />} />
          <Route path="/more" element={<MorePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
