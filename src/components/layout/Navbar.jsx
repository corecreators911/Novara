import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Specialities', path: '/specialities' },
  { name: 'Doctors', path: '/doctors' },
  { name: 'Appointments', path: '/appointments' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Health Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let throttleTimer = null;

    const handleScroll = () => {
      if (throttleTimer) return;
      throttleTimer = setTimeout(() => {
        setScrolled(window.scrollY > 60);
        throttleTimer = null;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#1a3253] shadow-lg py-3' : 'bg-novara-primary py-5'
        }`}
      >
        <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-baseline gap-2 z-50">
            <span className="font-DM_Serif_Display text-white text-2xl tracking-tight">Novara</span>
            <span className="font-DM_Sans text-white text-[13px] font-medium tracking-wide uppercase">Hospital</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-DM_Sans text-[15px] font-medium text-white transition-colors hover:text-novara-accent relative py-1`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-novara-accent" />
                    )}
                  </Link>
                );
              })}
            </div>
            <Link 
              to="/appointments"
              className="border border-white text-white px-5 py-2.5 rounded-lg font-DM_Sans font-semibold text-[14px] hover:bg-white hover:text-novara-primary transition-colors duration-200"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2 z-50"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-novara-primary z-[70] p-6 flex flex-col lg:hidden overflow-y-auto"
            >
              <div className="flex justify-end mb-8">
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white p-2"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-2 flex-grow">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`font-DM_Sans text-white text-lg py-4 border-b border-white/10 ${
                        isActive ? 'text-novara-accent' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8">
                <Button variant="primary" to="/appointments" className="w-full bg-white text-novara-primary hover:bg-gray-100">
                  Book Appointment
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
