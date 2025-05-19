import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Index';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';
import Join from './pages/Join';
import Novels from './pages/Novels';
import NotFound from './pages/NotFound';
import Success from './pages/Success';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works/*" element={<Works />} />
              <Route path="/novels" element={<Novels />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/success" element={<Success />} />
              <Route path="/join" element={<Join />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
