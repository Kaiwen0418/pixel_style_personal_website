import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./IndexPage";
import RecipeDetailsPage from "./components/RecipeDetailsPage";
import RetroWindowWrapper from "./components/RetroWindowWrapper";
import Layout from "./components/Layout";
import "./globals.css";

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

const ContributePage = () => (
  <RetroWindowWrapper activeTab="Contribute">
    <h2 className="text-2xl mb-4">Contribute</h2>
    <p>This is the Contribute page content.</p>
  </RetroWindowWrapper>
);

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contribute" element={<ContributePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
