import React, { useState } from 'react';
import { Menu, X, Heart, Shield, Users, Stethoscope, Mail, Phone, MapPin } from 'lucide-react';

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">MedCare</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button className="text-gray-600 hover:text-blue-600 transition-colors">About</button>
            <button className="text-gray-600 hover:text-blue-600 transition-colors">Features</button>
            <button className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600">About</button>
          <button className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600">Features</button>
          <button className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600">Contact</button>
          <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">© 2024 MedCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const features = [
    { icon: Shield, title: 'Secure & Reliable', description: 'Advanced data protection and HIPAA compliance.' },
    { icon: Users, title: 'Patient-Centric', description: 'Easy appointment booking and record access.' },
    { icon: Stethoscope, title: 'Healthcare Excellence', description: 'Supporting medical professionals with efficient workflows.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="pt-20 pb-32 bg-gradient-to-r from-blue-600 to-blue-800 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Modern Healthcare Management</h1>
        <p className="text-xl text-blue-100 mb-8">Empowering healthcare providers with intelligent solutions</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
          Get Started
        </button>
      </section>
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-600 mb-12">Experience next-gen healthcare management</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
