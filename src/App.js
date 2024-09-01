import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./IndexPage";
import RecipeDetailsPage from "./components/RecipeDetailsPage";
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
          <Route path="/" element={<IndexPage />} />
          <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
          <Route path="/artwork" element={<ArtworkPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
