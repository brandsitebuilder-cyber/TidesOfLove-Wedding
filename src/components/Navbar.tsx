import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { content } from '../content';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { language } = useLanguage();
  const t = content[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.landing, to: '/', hash: '#landing' },
    { name: t.story, to: '/', hash: '#story' },
    { name: t.invitation, to: '/', hash: '#invitation' },
    { name: t.schedule, to: '/', hash: '#schedule' },
    { name: t.dressCode, to: '/', hash: '#details' },
    { name: t.accommodation, to: '/details', hash: '#accommodation' },
    { name: t.thingsToDo, to: '/details', hash: '#things-to-do' },
    { name: t.faq, to: '/details', hash: '#faq' },
  ];

  const handleNavClick = (to: string, hash: string) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname === to) {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(to);
      if (hash) {
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-brand-bg shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-serif text-2xl tracking-widest text-brand-text whitespace-nowrap"
            >
              S & K
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.to, link.hash)}
                className="text-[10px] lg:text-xs uppercase tracking-[0.1em] xl:tracking-[0.2em] hover:text-brand-accent transition-colors whitespace-nowrap"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-brand-text">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-bg absolute top-full left-0 w-full shadow-md py-8 px-6 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.to, link.hash)}
              className="text-xs uppercase tracking-[0.2em] hover:text-brand-accent transition-colors block text-left"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
