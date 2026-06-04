import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, HeartPulse, Activity } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import { StatCounter } from '../components/ui/StatCounter';

const leaders = [
  {
    name: "Dr. Arvind Mehta",
    role: "Chief Executive Officer & Medical Director",
    bio: "With over 30 years in healthcare administration and clinical excellence, Dr. Mehta leads Novara with a vision for compassionate, cutting-edge care.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dr. Sarah Wilson",
    role: "Chief of Surgery",
    bio: "An internationally recognized surgeon specializing in minimally invasive techniques, Dr. Wilson oversees our state-of-the-art surgical departments.",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Priya Sharma",
    role: "Chief Nursing Officer",
    bio: "Priya ensures our nursing staff delivers the highest standard of patient care, focusing on empathy, safety, and continuous education.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
  }
];

const accreditations = [
  { title: "NABH Accredited", icon: ShieldCheck },
  { title: "JCI Standards Compliant", icon: Award },
  { title: "ISO 9001:2015 Certified", icon: Activity },
  { title: "Best Hospital Award 2023", icon: HeartPulse }
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-novara-bg min-h-screen">
      {/* Page Hero */}
      <section className="bg-novara-primary py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionHeader 
              label="OUR STORY" 
              heading="About Novara Hospital" 
              subtext="A legacy of healing, driven by innovation and rooted in deep compassion for every life we touch."
              light={true}
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-novara-border">
              <h2 className="font-DM_Serif_Display text-3xl text-novara-text mb-4">Our Mission</h2>
              <div className="w-12 h-1 bg-novara-accent rounded-full mb-6"></div>
              <p className="font-DM_Sans text-lg text-novara-muted leading-relaxed">
                To provide accessible, world-class healthcare with unwavering compassion. We prioritize the physical and emotional well-being of our patients above all else, ensuring that every individual receives the highest standard of personalized medical care.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-novara-border">
              <h2 className="font-DM_Serif_Display text-3xl text-novara-text mb-4">Our Vision</h2>
              <div className="w-12 h-1 bg-novara-primary rounded-full mb-6"></div>
              <p className="font-DM_Sans text-lg text-novara-muted leading-relaxed">
                To be India's most trusted multispeciality healthcare destination, where medical excellence meets human empathy. We aim to continuously redefine healthcare standards through research, technology, and patient-first innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 px-6 border-y border-novara-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader 
                label="THE JOURNEY" 
                heading="Two Decades of Excellence" 
              />
              <div className="space-y-6 mt-8 font-DM_Sans text-lg text-novara-muted leading-relaxed">
                <p>
                  Founded in 2004, Novara Hospital began with a simple but profound belief: healthcare should be a blend of advanced science and genuine human warmth. What started as a modest 50-bed facility has now grown into a premier multispeciality institution.
                </p>
                <p>
                  Over the years, we have expanded our capabilities to include cutting-edge surgical suites, a comprehensive oncology center, and a dedicated institute for neurosciences. Our growth has always been guided by the needs of the community we serve.
                </p>
                <p>
                  Today, with over 25 specialities and a team of 500+ world-class doctors, Novara continues to stand as a beacon of hope and healing, treating over 2,00,000 patients every year.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop" 
                alt="Novara Hospital Facade" 
                className="rounded-2xl shadow-sm w-full object-cover aspect-[4/3]"
                loading="lazy"
                width="1200"
                height="900"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-lg border border-novara-border hidden md:block">
                <p className="font-DM_Serif_Display text-4xl text-novara-accent mb-1">2004</p>
                <p className="font-DM_Sans text-sm text-novara-muted font-bold tracking-widest uppercase">Established</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-20 px-6 bg-novara-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <StatCounter target={25} suffix="+" label="Specialities" />
            <StatCounter target={500} suffix="+" label="Expert Doctors" />
            <StatCounter target={200000} suffix="+" label="Patients Served" />
            <StatCounter target={20} suffix="+" label="Years of Trust" />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-20 px-6 border-y border-novara-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            label="LEADERSHIP" 
            heading="Guiding Novara" 
            subtext="Our hospital is led by visionaries who are deeply committed to medical excellence and compassionate care."
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {leaders.map((leader, idx) => (
              <div key={idx} className="bg-novara-bg rounded-2xl overflow-hidden border border-novara-border shadow-sm flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-DM_Serif_Display text-2xl text-novara-text mb-2">{leader.name}</h3>
                  <p className="font-DM_Sans text-novara-accent font-semibold mb-4">{leader.role}</p>
                  <p className="font-DM_Sans text-novara-muted leading-relaxed flex-grow">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeader 
            label="RECOGNITION" 
            heading="Accreditations & Awards" 
            align="center"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {accreditations.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-novara-border shadow-sm flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-novara-accent/10 rounded-full flex items-center justify-center mb-6 text-novara-accent">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-DM_Sans font-bold text-novara-text">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-novara-primary py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-DM_Serif_Display text-4xl md:text-5xl text-white mb-6">
            Ready to experience world-class care?
          </h2>
          <p className="font-DM_Sans text-lg text-white/80 mb-10">
            Our team of specialists is here to guide you on your journey to better health.
          </p>
          <div className="flex justify-center">
            <Button variant="primary" to="/appointments" className="!bg-white !text-novara-primary hover:!bg-white/90">
              Book an Appointment
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
