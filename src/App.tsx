import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { LanguageProvider } from "./contexts/LanguageContext";

// صفحات افتراضية (يمكنك تعديلها لاحقاً)
const About = React.lazy(() => import("./pages/About"));
const Novels = React.lazy(() => import("./pages/Novels"));
const Contact = React.lazy(() => import("./pages/Contact"));
const BlueWolf = React.lazy(() => import("./pages/BlueWolf"));
const Join = React.lazy(() => import("./pages/Join"));
const Purchase = React.lazy(() => import("./pages/Purchase"));


function App() {
  return (
    <LanguageProvider>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/novels" element={<Novels />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blue-wolf" element={<BlueWolf />} />
          <Route path="/join" element={<Join />} />
          <Route path="/purchase/blue-wolf" element={<Purchase />} />

        </Routes>
      </React.Suspense>
    </LanguageProvider>
  );
}

export default App;
