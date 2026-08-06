import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Music from "./pages/Music/Music";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound";
import { useLenis } from "./hooks/useLenis";
import { IntroProvider } from "./context/IntroContext";
import ScrollToTop from "./components/common/ScrollToTop";

export default function App() {
  useLenis(); // Initialize Lenis smooth scroll globally

  return (
    <IntroProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </IntroProvider>
  );
}