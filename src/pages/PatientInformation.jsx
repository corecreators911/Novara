import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Info, CreditCard, ChevronDown, ChevronUp, Pill, Coffee, Car, Wifi, Heart } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { visitingHours, admissionProcess, amenities, insuranceProviders, faqs } from '../data/patientInfo';

const iconMap = {
  "pill": Pill,
  "coffee": Coffee,
  "car": Car,
  "wifi": Wifi,
  "credit-card": CreditCard,
  "heart": Heart
};

const PatientInformation = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-novara-bg min-h-screen">
      {/* Hero Section */}
      <section className="bg-novara-primary py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionHeader 
              label="Patient & Visitor Guide" 
              heading="Everything You Need to Know" 
              subtext="We want to ensure your visit or stay at Novara Hospital is as comfortable and stress-free as possible."
              light={true}
            />
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        
        {/* Visiting Hours Section */}
        <section>
          <SectionHeader 
            label="Timelines" 
            heading="Visiting Hours" 
            subtext="To ensure our patients get adequate rest and care, we kindly request visitors to adhere to the following timings."
          />
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {visitingHours.map((vh, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-novara-border">
                <div className="flex items-center gap-3 mb-4 text-novara-primary">
                  <Clock className="w-6 h-6" />
                  <h3 className="font-DM_Serif_Display text-xl">{vh.ward}</h3>
                </div>
                <p className="font-DM_Sans font-semibold text-novara-accent mb-2">{vh.timings}</p>
                <p className="font-DM_Sans text-sm text-novara-muted">{vh.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Admission Process */}
        <section>
          <SectionHeader 
            label="Step-by-Step" 
            heading="Admission Process" 
            subtext="A streamlined process to get you settled into your room quickly and comfortably."
          />
          <motion.div 
            className="space-y-6 max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {admissionProcess.map((step, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-novara-border shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-novara-primary text-white rounded-full flex items-center justify-center font-DM_Serif_Display text-2xl">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-DM_Serif_Display text-xl text-novara-text mb-2">{step.title}</h3>
                  <p className="font-DM_Sans text-novara-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Amenities Grid */}
        <section className="bg-white p-8 md:p-12 rounded-3xl border border-novara-border">
          <SectionHeader 
            label="Facilities" 
            heading="Hospital Amenities" 
            subtext="Available around the clock for the convenience of patients and visitors."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {amenities.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Info;
              return (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-novara-bg rounded-full flex items-center justify-center text-novara-accent">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-DM_Sans font-medium text-novara-text">{item.name}</span>
                </div>
              )
            })}
          </div>
        </section>

        {/* Insurance & FAQs side by side if possible, or stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Insurance */}
          <section>
            <SectionHeader 
              label="Billing" 
              heading="Insurance & Cashless" 
            />
            <div className="bg-white p-6 rounded-2xl border border-novara-border shadow-sm mb-6">
              <p className="font-DM_Sans text-novara-muted mb-4 leading-relaxed">
                We have partnered with major insurance companies and TPAs to provide a seamless cashless hospitalisation experience for our patients.
              </p>
              <p className="font-DM_Sans text-sm text-novara-muted">
                * Please ensure you carry your insurance card and a valid photo ID for pre-authorization.
              </p>
            </div>
            <h4 className="font-DM_Sans font-semibold text-novara-text mb-4">Empanelled Providers (Partial List)</h4>
            <div className="flex flex-wrap gap-3">
              {insuranceProviders.map((provider, idx) => (
                <span key={idx} className="bg-white border border-novara-border px-4 py-2 rounded-full text-sm font-DM_Sans text-novara-text shadow-sm">
                  {provider}
                </span>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section>
            <SectionHeader 
              label="Common Questions" 
              heading="Helpful FAQs" 
            />
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-novara-border rounded-xl shadow-sm overflow-hidden">
                  <button 
                    className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 focus:outline-none hover:bg-novara-bg/50 transition-colors"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaq === idx}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="font-DM_Sans font-medium text-novara-text">{faq.question}</span>
                    <div className="text-novara-accent flex-shrink-0">
                      {openFaq === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div id={`faq-answer-${idx}`} className="px-6 pb-4 text-novara-muted font-DM_Sans">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

export default PatientInformation;
