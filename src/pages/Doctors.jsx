import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, CheckCircle2, Phone, X } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { doctors } from '../data/doctors';

const DoctorProfileCard = ({ doctor }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl border border-novara-border shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col sm:flex-row"
    >
      <div className="w-full h-56 sm:h-auto sm:w-2/5 sm:aspect-auto sm:min-h-full shrink-0 relative overflow-hidden">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-full h-full object-cover object-top absolute inset-0"
          loading="lazy"
          width="400"
          height="400"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <Badge>{doctor.speciality}</Badge>
          <div className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${doctor.available ? 'bg-green-500' : 'bg-gray-400'}`}></span>
            <span className="font-DM_Sans text-xs font-medium text-novara-muted">
              {doctor.available ? 'Available' : 'Unavailable'}
            </span>
          </div>
        </div>

        <h3 className="font-DM_Serif_Display text-2xl text-novara-text mb-1">{doctor.name}</h3>
        <p className="font-DM_Sans text-[15px] font-medium text-novara-text mb-1">{doctor.qualification}</p>
        <p className="font-DM_Sans text-sm text-novara-accent font-medium mb-4">{doctor.experience} Years Experience</p>
        
        <p className="font-DM_Sans text-sm text-novara-muted mb-6 line-clamp-2 leading-relaxed flex-grow">
          {doctor.bio}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <Button variant="primary" to="/appointments" className="w-full sm:w-auto flex-1">
            Book Visit
          </Button>
          <Button variant="outline" to={`/doctors/${doctor.slug}`} className="w-full sm:w-auto flex-1" aria-label={`View profile of ${doctor.name}`}>
            Profile
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState('All Specialities');
  const [availableOnly, setAvailableOnly] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Extract unique specialities from doctors data
  const uniqueSpecialities = useMemo(() => {
    const specs = new Set(doctors.map(doc => doc.speciality));
    return ['All Specialities', ...Array.from(specs).sort()];
  }, []);

  // Filter logic
  const filteredDoctors = useMemo(() => {
    return doctors.filter(doc => {
      const matchSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.speciality.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.bio.toLowerCase().includes(searchTerm.toLowerCase());
      const matchSpeciality = selectedSpeciality === 'All Specialities' || doc.speciality === selectedSpeciality;
      const matchAvailability = !availableOnly || doc.available;

      return matchSearch && matchSpeciality && matchAvailability;
    });
  }, [searchTerm, selectedSpeciality, availableOnly]);

  // Handle sticky search bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-novara-bg min-h-screen pb-20">
      {/* Utility Hero */}
      <section className="bg-novara-primary pt-32 pb-24 md:pt-40 md:pb-32 px-4 md:px-6 relative overflow-hidden -mt-[100px]">
        {/* Subtle patterned overlay using CSS gradients */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="font-DM_Serif_Display text-white text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            Find Your Specialist
          </h1>
          <p className="font-DM_Sans text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Connect with our globally trained team of over 500+ doctors dedicated to excellence in patient care.
          </p>
        </div>
      </section>

      {/* Floating Control Bar */}
      <div className={`sticky z-30 transition-all duration-300 ${isScrolled ? 'top-20' : 'top-0 -mt-8'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-xl shadow-lg border border-novara-border p-4 md:p-6 mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              
              <div className="relative flex-grow w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-novara-muted" />
                <input 
                  type="text" 
                  placeholder="Search doctors, conditions..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-lg border border-novara-border focus:outline-none focus:border-novara-accent focus:ring-1 focus:ring-novara-accent transition-colors font-DM_Sans text-[15px]"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-novara-muted hover:text-novara-text"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="w-full md:w-64 shrink-0">
                <select 
                  value={selectedSpeciality}
                  onChange={(e) => setSelectedSpeciality(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-novara-border focus:outline-none focus:border-novara-accent focus:ring-1 focus:ring-novara-accent transition-colors font-DM_Sans text-[15px] appearance-none bg-white cursor-pointer"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%235A6478\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.25em' }}
                >
                  {uniqueSpecialities.map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>

              <div className="w-full md:w-auto shrink-0 flex items-center justify-between md:justify-start gap-3 px-1 md:px-0">
                <span className="font-DM_Sans text-[15px] text-novara-text font-medium cursor-pointer" onClick={() => setAvailableOnly(!availableOnly)}>Available Today</span>
                <button 
                  onClick={() => setAvailableOnly(!availableOnly)}
                  className={`w-11 h-6 rounded-full transition-colors relative ${availableOnly ? 'bg-novara-accent' : 'bg-gray-300'}`}
                  aria-label="Toggle availability"
                >
                  <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${availableOnly ? 'translate-x-5' : 'translate-x-0'}`}></span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Directory Grid */}
      <div className="container mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-16">
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredDoctors.map(doctor => (
                <DoctorProfileCard key={doctor.id} doctor={doctor} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl border border-novara-border shadow-sm p-12 text-center max-w-2xl mx-auto my-12"
          >
            <div className="w-16 h-16 bg-novara-bg rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-novara-muted" />
            </div>
            <h3 className="font-DM_Serif_Display text-3xl text-novara-text mb-3">No specialists found</h3>
            <p className="font-DM_Sans text-base text-novara-muted mb-8 leading-relaxed">
              We couldn't find a direct match for your criteria. Let our care coordinators help you find the right expert for your specific needs.
            </p>
            <Button variant="primary" to="/contact">
              Contact Care Team
            </Button>
          </motion.div>
        )}

        {/* Credential Banner */}
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-novara-border">
          <p className="text-center font-DM_Sans text-sm text-novara-muted flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-novara-accent" />
            All Novara specialists are board-certified and undergo rigorous peer review to ensure the highest standards of care.
          </p>
        </div>
      </div>

      {/* Help Desk CTA */}
      <section className="bg-novara-accent/5 py-16 md:py-20 mt-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-DM_Serif_Display text-3xl md:text-4xl text-novara-text mb-4">
              Unsure who to consult?
            </h2>
            <p className="font-DM_Sans text-base md:text-lg text-novara-muted leading-relaxed mb-8">
              Our patient care team can help match you with the right specialist based on your symptoms and medical history. Call us or request a callback.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="primary" to="/contact">
                Request a Callback
              </Button>
              <a href="tel:+1234567890" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-DM_Sans font-semibold text-[15px] border border-novara-primary text-novara-primary hover:bg-novara-primary hover:text-white transition-all duration-200">
                <Phone className="w-4 h-4 mr-2" />
                +91 800 000 0000
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Doctors;
