import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      if (e.target && typeof e.target.reset === 'function') {
        e.target.reset();
      }
    }, 4000);
  };

  const contactDetails = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Our Location',
      details: ['Novara Health City, Linking Road', 'Bandra West, Mumbai 400050']
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Numbers',
      details: ['Emergency: 1066', 'General: +91 22 4567 8900']
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Address',
      details: ['contact@novarahospital.com', 'support@novarahospital.com']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: ['Emergency: 24/7, 365 Days', 'Outpatient: 8:00 AM - 8:00 PM']
    }
  ];

  return (
    <div className="bg-novara-bg min-h-screen pb-20">
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
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-DM_Sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            We are here to help. Reach out for appointments, emergency services, or any medical inquiries.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <h2 className="font-DM_Serif_Display text-3xl md:text-4xl text-novara-text mb-6">
                We're always available for you
              </h2>
              <p className="font-DM_Sans text-base text-novara-muted mb-10 leading-relaxed">
                Whether you have a general query, need to consult a specialist, or require emergency medical assistance, our dedicated team is ready to provide immediate support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {contactDetails.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-novara-primary/5 flex items-center justify-center shrink-0 text-novara-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-DM_Sans text-[15px] font-bold text-novara-text mb-2">
                        {item.title}
                      </h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="font-DM_Sans text-[15px] text-novara-muted">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-novara-border rounded-2xl p-8 md:p-10 shadow-sm"
            >
              <h3 className="font-DM_Serif_Display text-2xl text-novara-text mb-6">
                Send us a message
              </h3>
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg"
                  >
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <p className="font-DM_Sans text-sm">
                        Your message has been sent successfully!
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-first-name" className="font-DM_Sans text-sm font-semibold text-novara-text">First Name</label>
                    <input id="contact-first-name" type="text" className="w-full px-4 py-3 rounded-lg border border-novara-border focus:outline-none focus:border-novara-accent focus:ring-1 focus:ring-novara-accent font-DM_Sans text-base transition-colors" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-last-name" className="font-DM_Sans text-sm font-semibold text-novara-text">Last Name</label>
                    <input id="contact-last-name" type="text" className="w-full px-4 py-3 rounded-lg border border-novara-border focus:outline-none focus:border-novara-accent focus:ring-1 focus:ring-novara-accent font-DM_Sans text-base transition-colors" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="font-DM_Sans text-sm font-semibold text-novara-text">Email Address</label>
                  <input id="contact-email" type="email" className="w-full px-4 py-3 rounded-lg border border-novara-border focus:outline-none focus:border-novara-accent focus:ring-1 focus:ring-novara-accent font-DM_Sans text-base transition-colors" placeholder="johndoe@example.com" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="font-DM_Sans text-sm font-semibold text-novara-text">Subject</label>
                  <select id="contact-subject" className="w-full px-4 py-3 rounded-lg border border-novara-border focus:outline-none focus:border-novara-accent focus:ring-1 focus:ring-novara-accent font-DM_Sans text-base bg-white transition-colors">
                    <option>General Inquiry</option>
                    <option>Appointment Booking</option>
                    <option>Feedback & Suggestions</option>
                    <option>Career Opportunities</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="font-DM_Sans text-sm font-semibold text-novara-text">Message</label>
                  <textarea id="contact-message" rows="4" className="w-full px-4 py-3 rounded-lg border border-novara-border focus:outline-none focus:border-novara-accent focus:ring-1 focus:ring-novara-accent font-DM_Sans text-base resize-none transition-colors" placeholder="How can we help you?" required></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-novara-primary hover:bg-novara-primary/90 text-white font-DM_Sans font-semibold px-6 py-4 rounded-lg transition-colors flex items-center justify-center group"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
