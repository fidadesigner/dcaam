import React from 'react';
import './css/style.css';
import './css/responsive.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './common_components/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import OurSecurity from './pages/OurSecurity';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Terms from './pages/Terms';
import Guides from './pages/Guides';
import PartnerNetwork from './pages/PartnerNetwork';
import Glossary from './pages/Glossary';
import Footer from './common_components/Footer/Footer';
import Integration from './pages/Integration';
import Product from './pages/Product';
import AuditPrep from './pages/AuditPrep';
import Grc from './pages/Grc';
import Enterprise from './pages/Enterprise';
import HowItWork from './pages/HowItWork';

function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/our-security" element={<OurSecurity />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/privacy-policy" element={<Policy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/partner-network" element={<PartnerNetwork />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/product" element={<Product />} />
            <Route path="/audit-prep" element={<AuditPrep />} />
            <Route path="/grc" element={<Grc />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/how-it-work" element={<HowItWork />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
