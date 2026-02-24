/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Schools from "./pages/Schools";
import JEE from "./pages/JEE";
import NEET from "./pages/NEET";
import Detail from "./pages/Detail";
import Compare from "./pages/Compare";
import Enquiry from "./pages/Enquiry";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/schools" element={<Schools />} />
              <Route path="/jee" element={<JEE />} />
              <Route path="/neet" element={<NEET />} />
              <Route path="/institute/:slug" element={<Detail />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

