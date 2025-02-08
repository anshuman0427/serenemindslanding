'use client';

import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react" 
import PropTypes from 'prop-types';
import { Button } from './ui/button';
import { FaUserPlus, FaClipboardCheck, FaCalendarAlt, FaCreditCard, FaFileAlt, FaShareSquare, FaClinicMedical, FaGlobe, FaPaperPlane } from 'react-icons/fa';

// Countdown Timer Component
function CountdownTimer() {
  const calculateTimeLeft = () => {
    const launchDate = new Date('2025-02-07T00:00:00');
    const now = new Date();
    const difference = launchDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center space-y-1">
      <h2 className="text-lg font-bold text-gray-700">Launching In</h2>
      <div className="flex justify-center space-x-4">
        {Object.keys(timeLeft).map((unit, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-3xl font-extrabold text-gray-800">{timeLeft[unit]}</span>
            <span className="text-xs text-gray-600 uppercase">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LaunchingSoonPage() {
  const handleWhatsAppJoin = () => {
    window.open('https://chat.whatsapp.com/HIauoHuKHdP3XHbPzDpVPV', '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white justify-center items-center">
      {/* Add Analytics component here */}
      <Analytics />
      {/* Add Analytics component here */}
      <SpeedInsights/>
      <main className="flex-1">
        <section className="w-full py-8 flex justify-center items-center">
          <div className="container px-4 md:px-6 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-full space-y-4 text-center">
              {/* Hero Content */}
              <h2 className="text-2xl font-normal text-gray-700">
                Serene <span className="font-bold">MINDS</span>
              </h2>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-gray-800">
                All-in-One AI-Based Workflow Management Tool for Health Professionals
              </h1>
              <p className="mx-auto max-w-[550px] text-gray-600 text-sm md:text-md">
                Streamline your health practice with automated client interactions, assessments, and payments. Launching soon!
              </p>

              {/* Countdown Timer */}
              <CountdownTimer />

              <p className="mt-4 text-gray-600 text-sm md:text-md">
                We will charge 15% of the total appointment booking, including payment processing, taxes, and our fees.
              </p>

              <div className="mt-4">
                <Button onClick={handleWhatsAppJoin} className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg flex items-center">
                  <FaPaperPlane className="mr-2 h-4 w-4" /> Join WhatsApp for Early Access
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Features Section */}
      <section className="w-full py-8 bg-gray-50 flex justify-center items-center">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl text-center text-gray-800 mb-8">
            Key Features
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <FeatureCard
              icon={<FaClinicMedical className="h-6 w-6 text-red-500" />}
              title="Online Clinic"
              description="Setup your clinic at no cost."
            />
            <FeatureCard
              icon={<FaUserPlus className="h-6 w-6 text-blue-500" />}
              title="Client Onboarding"
              description="Onboard clients with two clicks."
            />
            <FeatureCard
              icon={<FaClipboardCheck className="h-6 w-6 text-green-500" />}
              title="Assessments"
              description="50+ assessments for clients."
            />
            <FeatureCard
              icon={<FaShareSquare className="h-6 w-6 text-yellow-500" />}
              title="AI Assistant"
              description="AI-powered diagnosis."
            />
            <FeatureCard
              icon={<FaCalendarAlt className="h-6 w-6 text-orange-500" />}
              title="Appointment Booking"
              description="Easy scheduling for clients."
            />
            <FeatureCard
              icon={<FaCreditCard className="h-6 w-6 text-purple-500" />}
              title="Secure Payments"
              description="Secure payment processing."
            />
            <FeatureCard
              icon={<FaFileAlt className="h-6 w-6 text-pink-500" />}
              title="Client Logs"
              description="Maintain detailed records."
            />
            <FeatureCard
              icon={<FaGlobe className="h-6 w-6 text-green-500" />}
              title="Personal Landing Page"
              description="Promote your services online."
            />
            <FeatureCard
              icon={<FaShareSquare className="h-6 w-6 text-blue-500" />}
              title="WhatsApp & Google"
              description="Integrate with WhatsApp and Google."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-4">
        <div className="container px-4 mx-auto text-center">
          <p className="text-sm text-gray-600">
            Serenepulse Technologies Private Limited &copy; 2025. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-800">Privacy Policy</a>
            <a href="/Shipping-policy" className="text-sm text-gray-600 hover:text-gray-800">Shipping Policy</a>
            <a href="/Refund-and-cancellation" className="text-sm text-gray-600 hover:text-gray-800">Refund & Cancellation</a>
            <a href="/Terms-and-conditions" className="text-sm text-gray-600 hover:text-gray-800">Terms & Conditions</a>
            <a href="/Contact-Us" className="text-sm text-gray-600 hover:text-gray-800">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-2 rounded-full bg-gray-100 p-2 text-primary">
        {icon}
      </div>
      <h3 className="text-md font-bold text-gray-800">{title}</h3>
      <p className="text-xs text-gray-600 mt-1">{description}</p>
    </div>
  );
}

FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired, 
};
