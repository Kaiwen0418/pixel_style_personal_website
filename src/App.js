import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./IndexPage";
import RecipeDetailsPage from "./components/RecipeDetailsPage";
import RetroWindowWrapper from "./components/RetroWindowWrapper";
import Layout from "./components/Layout";
import "./globals.css";

const ArtworkPage = () => (
  <RetroWindowWrapper activeTab="Artwork">
    <h2 className="text-2xl mb-4">Artwork</h2>
    <p>This is the Artwork page content.</p>
  </RetroWindowWrapper>
);

const ProcessPage = () => (
  <RetroWindowWrapper activeTab="Process">
    <h2 className="text-2xl mb-4">Process</h2>
    <p>This is the Process page content.</p>
  </RetroWindowWrapper>
);

const AboutPage = () => (
  <RetroWindowWrapper activeTab="About">
    <h2 className="text-2xl mb-4">About</h2>
    <p>This is the About page content.</p>
  </RetroWindowWrapper>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
        <Route path="/artwork" element={<ArtworkPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
