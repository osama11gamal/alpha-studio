import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { LanguageProvider } from "./contexts/LanguageContext";

// صفحات افتراضية (يمكنك تعديلها لاحقاً)
const About = React.lazy(() => import("./pages/About"));
const Novels = React.lazy(() => import("./pages/Novels"));
const Contact = React.lazy(() => import("./pages/Contact"));
const BlueWolf = React.lazy(() => import("./pages/BlueWolf"));
const Join = React.lazy(() => import("./pages/Join"));
const Purchase = React.lazy(() => import("./pages/Purchase"));
const Success = React.lazy(() => import("./pages/Success"));

const SerkNosElLeil = React.lazy(() => import("./pages/SerkNosElLeil"));
const KhidaaAltahror = React.lazy(() => import("./pages/KhidaaAltahror"));

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/novels" element={<Novels />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blue-wolf" element={<BlueWolf />} />
            <Route path="/stories/serk-nos-el-leil" element={<SerkNosElLeil />} />
            <Route path="/stories/khidaa-altahror" element={<KhidaaAltahror />} />
            <Route path="/join" element={<Join />} />
            <Route path="/purchase/blue-wolf" element={<Purchase />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </React.Suspense>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
