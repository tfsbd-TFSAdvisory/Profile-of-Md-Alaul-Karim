
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Expertise from './components/Expertise';
import Advisor from './components/Advisor';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow">
        {activeTab === 'home' && (
          <div className="animate-slide">
            <Hero onNavigate={setActiveTab} />
            <div className="py-20 bg-slate-50 border-y border-slate-200">
               <div className="container mx-auto px-6 text-center max-w-4xl">
                <span className="text-corporate-600 font-bold tracking-widest text-xs uppercase mb-4 block">The Mission</span>
                <h2 className="font-serif text-3xl md:text-5xl font-black text-corporate-900 mb-8 leading-tight">
                  Democratizing Global Trade for the <br/> <span className="text-corporate-600 underline decoration-corporate-600/30 underline-offset-8">Bangladeshi Ecosystem.</span>
                </h2>
                <p className="text-slate-600 leading-relaxed text-xl font-light">
                  Through <strong>Trade Finance Solution Bangladesh (TFSBD)</strong>, we bridge the gap between 
                  global financial standards and local operational realities. Our focus remains on 
                  reducing friction in cross-border capital flow via digital innovation and regulatory clarity.
                </p>
              </div>
            </div>
            <Expertise />
            <Advisor />
          </div>
        )}

        {activeTab === 'profile' && <Profile />}
        {activeTab === 'expertise' && <Expertise />}
        {activeTab === 'contact' && <Contact />}
      </main>

      <Footer onNavigate={setActiveTab} />
    </div>
  );
};

export default App;
