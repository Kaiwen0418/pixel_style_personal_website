import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProjDetailsPage from "./components/proj_page/ProjDetailsPage";
import ArtworkPage from "./components/ArtworkPage";
import ProcessPage from "./components/ProcessPage";
import AboutPage from "./components/AboutPage";
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
          <Route path="/project" element={<ArtworkPage />} />
          <Route path="/more" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
