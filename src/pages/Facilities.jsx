import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Microscope, ShieldCheck, Ambulance, Bed, Pill, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const facilitiesData = [
  {
    icon: <Activity className="w-7 h-7" />,
    title: 'Advanced ICUs',
    description: 'State-of-the-art intensive care units equipped with 24/7 patient monitoring systems, dedicated intensivists, and life-support technology.'
  },
  {
    icon: <Microscope className="w-7 h-7" />,
    title: 'Modern Diagnostics & Radiology',
    description: 'High-resolution MRI, CT scans, and fully automated pathology labs designed to deliver precise and rapid test results.'
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: 'Modular Operation Theatres',
    description: 'Infection-free, highly sterile surgical suites equipped with advanced robotics, designed for complex transplants and neurosurgeries.'
  },
  {
    icon: <Ambulance className="w-7 h-7" />,
    title: '24/7 Emergency & Trauma',
    description: 'A dedicated rapid-response unit prepared to handle any critical medical emergency or trauma with zero delay and a specialized team.'
  },
  {
    icon: <Bed className="w-7 h-7" />,
    title: 'Premium Patient Suites',
    description: 'Spacious, private recovery rooms designed for maximum comfort, featuring smart beds, natural lighting, and exclusive attendant facilities.'
  },
  {
    icon: <Pill className="w-7 h-7" />,
    title: 'Round-the-Clock Pharmacy',
    description: 'A fully stocked in-house pharmacy ensuring seamless access to critical medicines, life-saving drugs, and wellness products at any hour.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function Facilities() {
  // Ensure the page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-novara-bg min-h-screen pb-16">
      {/* Hero Section */}
      <section className="bg-novara-primary text-white py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-DM_Serif_Display text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            World-Class Infrastructure
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-DM_Sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            At Novara Hospital, we blend cutting-edge medical technology with comforting environments to ensure the best possible care for our patients.
          </motion.p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {facilitiesData.map((facility, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                className="bg-white border border-novara-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-novara-primary/5 text-novara-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-novara-primary group-hover:text-white transition-colors duration-300">
                  {facility.icon}
                </div>
                <h3 className="font-DM_Serif_Display text-2xl text-novara-text mb-3">
                  {facility.title}
                </h3>
                <p className="font-DM_Sans text-base text-novara-muted leading-relaxed">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust & CTA Section */}
      <section className="px-4 md:px-6">
        <div className="container mx-auto max-w-6xl bg-white border border-novara-border rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="font-DM_Serif_Display text-3xl md:text-4xl text-novara-text mb-4">
              Experience Healthcare Without Compromise
            </h2>
            <p className="font-DM_Sans text-base md:text-lg text-novara-muted">
              Whether you are visiting for a routine checkup or a complex procedure, our facilities are designed with your safety and comfort as the highest priorities.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end shrink-0">
            <Link 
              to="/appointments" 
              className="inline-flex items-center justify-center bg-novara-accent hover:bg-novara-accent/90 text-white font-DM_Sans font-semibold px-8 py-4 rounded-lg transition-colors group"
            >
              Book an Appointment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}