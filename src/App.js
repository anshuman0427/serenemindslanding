import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MarketingPage from './MarketingPage';
import TermsOfUse from './pages/terms';
import PrivacyPolicy from './pages/privacy';
import RefundPolicy from './pages/refund';
import ContactUs from './pages/contact';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MarketingPage />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Analytics />  {/* Add Vercel Analytics here */}
        <SpeedInsights/>
      </div>
    </Router>
  );
}

export default App;
