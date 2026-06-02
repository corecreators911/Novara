import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import Badge from '../components/ui/Badge';
import { patientStories } from '../data/patientStories';

const PatientStories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-novara-bg min-h-screen">
      {/* Page Hero */}
      <section className="bg-novara-primary py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionHeader 
              label="TESTIMONIALS" 
              heading="Patient Stories" 
              subtext="Hear directly from those who have experienced the Novara standard of care and healing."
              light={true}
            />
          </motion.div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {patientStories.map((story) => (
              <motion.div 
                key={story.id} 
                variants={itemVariants}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-novara-border flex flex-col"
              >
                <div className="flex items-center gap-1 mb-6 text-yellow-400">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <blockquote className="font-DM_Serif_Display text-2xl text-novara-text leading-relaxed mb-8 flex-grow">
                  "{story.story}"
                </blockquote>
                
                <div className="mt-auto pt-6 border-t border-novara-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-DM_Sans font-bold text-lg text-novara-text">{story.name}, {story.age}</p>
                    <p className="font-DM_Sans text-sm text-novara-muted mt-1">{story.location}</p>
                  </div>
                  <Badge className="self-start sm:self-auto bg-novara-bg">
                    {story.speciality}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust CTA */}
      <section className="py-20 px-6 border-t border-novara-border bg-white">
        <div className="max-w-4xl mx-auto text-center bg-novara-accent/5 rounded-3xl p-12 md:p-16 border border-novara-accent/10">
          <h2 className="font-DM_Serif_Display text-3xl md:text-4xl text-novara-text mb-6">
            Join the thousands who trust Novara
          </h2>
          <p className="font-DM_Sans text-lg text-novara-muted mb-10 max-w-2xl mx-auto">
            Your health and well-being are our highest priorities. Let our expert specialists help you write your own success story.
          </p>
          <Button variant="primary" to="/appointments">
            Book an Appointment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PatientStories;
