import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, Clock, CalendarCheck } from 'lucide-react';
import { doctors } from '../data/doctors';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const DoctorProfile = () => {
  const { slug } = useParams();
  const doctor = doctors.find((d) => d.slug === slug);

  // Scroll to layout top when navigating directly from directory
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!doctor) {
    return (
      <div className="bg-novara-bg py-20 px-4 md:px-6 min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h1 className="font-DM_Serif_Display text-4xl text-novara-text mb-4">Specialist Not Found</h1>
        <p className="font-DM_Sans text-base text-novara-muted mb-8 max-w-md mx-auto">
          We couldn't locate the profile for the requested doctor. They may have moved or the link might be incorrect.
        </p>
        <Button variant="primary" to="/doctors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Directory
        </Button>
      </div>
    );
  }

  // Ensure consistent surname extraction for "About Dr. X" header
  const nameParts = doctor.name.split(' ');
  const lastName = nameParts.length > 2 ? nameParts[nameParts.length - 1] : nameParts[1] || doctor.name;

  return (
    <div className="bg-novara-bg py-12 md:py-20 px-4 md:px-6 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        {/* Breadcrumb / Back Link */}
        <Link 
          to="/doctors" 
          className="inline-flex items-center text-novara-muted hover:text-novara-accent font-DM_Sans text-[15px] font-medium mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" /> 
          Back to Specialists Directory
        </Link>

        {/* Profile Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-sm border border-novara-border overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* Left: Hero Image */}
            <div className="md:w-2/5 shrink-0 bg-gray-50 relative">
              <div className="aspect-[4/5] md:aspect-auto md:h-full w-full relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-top absolute inset-0"
                />
              </div>
            </div>

            {/* Right: Profile Details */}
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              {/* Header section with Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative">
                <Badge>{doctor.speciality}</Badge>
                
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-novara-border shadow-sm">
                  <span className={`w-2 h-2 rounded-full ${doctor.available ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                  <span className="font-DM_Sans text-xs font-semibold text-novara-muted tracking-wide uppercase">
                    {doctor.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              </div>

              {/* Identity Details */}
              <h1 className="font-DM_Serif_Display text-4xl md:text-5xl text-novara-text mb-3">
                {doctor.name}
              </h1>
              
              <p className="font-DM_Sans text-lg text-novara-muted border-b border-novara-border pb-8 mb-8">
                Senior Consultant — {doctor.speciality}
              </p>

              {/* Quick Facts Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-novara-primary/5 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-novara-primary" />
                  </div>
                  <div>
                    <h4 className="font-DM_Sans text-[13px] font-semibold text-novara-muted tracking-wider uppercase mb-1">Qualifications</h4>
                    <p className="font-DM_Sans text-[15px] font-medium text-novara-text">{doctor.qualification}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-novara-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-novara-accent" />
                  </div>
                  <div>
                    <h4 className="font-DM_Sans text-[13px] font-semibold text-novara-muted tracking-wider uppercase mb-1">Experience</h4>
                    <p className="font-DM_Sans text-[15px] font-medium text-novara-text">{doctor.experience}+ Years</p>
                  </div>
                </div>
              </div>

              {/* Bio block */}
              <div className="mb-12">
                <h3 className="font-DM_Serif_Display text-2xl text-novara-text mb-4">
                  About Dr. {lastName}
                </h3>
                <p className="font-DM_Sans text-base text-novara-muted leading-relaxed">
                  {doctor.bio}
                </p>
              </div>

              {/* Action Banner inside profile */}
              <div className="mt-auto flex flex-col sm:flex-row gap-5 items-center justify-between bg-novara-primary/5 p-6 md:p-8 rounded-xl border border-novara-primary/10">
                <div className="text-center sm:text-left flex-grow">
                  <h4 className="font-DM_Sans text-lg font-bold text-novara-primary mb-1">Ready for a consultation?</h4>
                  <p className="font-DM_Sans text-[15px] text-novara-text/70">
                    Schedule an appointment online to secure your preferred slot.
                  </p>
                </div>
                <Button variant="primary" to="/appointments" className="w-full sm:w-auto shrink-0 shadow-md hover:shadow-lg">
                  <CalendarCheck className="w-5 h-5 mr-2" />
                  Book Visit
                </Button>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorProfile;
