import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header  from "./components/Header";
import HeroSection  from "./components/HeroSection";
import AboutSection  from "./components/AboutSection";
import SkillsSection  from "./components/SkillsSection";
import ProjectsSection  from "./components/ProjectsSection";
import MyToolboxSection from "./components/MyToolboxSection ";
import ContactSection  from "./components/ContactSection";
import Footer  from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <MyToolboxSection/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
