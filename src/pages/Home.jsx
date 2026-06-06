import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Quote, ArrowRight, ShieldCheck, Stethoscope, HeartHandshake, Award, ChevronLeft, ChevronRight, Heart, Brain, Bone, Microscope } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import SectionHeader from '../components/ui/SectionHeader';
import { specialities } from '../data/specialities';
import { doctors } from '../data/doctors';
import { patientStories } from '../data/patientStories';
import { blogs } from '../data/blogs';
import { StatCounter } from '../components/ui/StatCounter';

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-novara-bg m-0 p-0 -mt-[100px] pt-[100px]">
    <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 items-center z-10 relative m-0 p-0">
      <div className="max-w-2xl mx-auto lg:mx-0 w-full text-center lg:text-left relative z-20">
        <Badge className="mb-6 mx-auto lg:mx-0">India's Premier Multispeciality Care</Badge>
        <h1 className="font-DM_Serif_Display text-novara-text text-4xl md:text-5xl lg:text-7xl leading-[1.08] tracking-tight mb-6 lg:text-white">
          <span className="lg:hidden">Where Expertise Meets Compassion</span>
          <span className="hidden lg:inline text-novara-text">Where Expertise Meets Compassion</span>
        </h1>
        <p className="font-DM_Sans text-base sm:text-lg text-white/90 lg:text-novara-muted mb-8 leading-relaxed">
          Delivering advanced medical care with a deeply human touch. Because at Novara, we believe your health journey deserves nothing less than excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
          <Button variant="primary" to="/appointments">Book Appointment</Button>
          <Button variant="outline" to="/specialities" className="bg-white/10 lg:bg-transparent border-white text-white hover:bg-white hover:text-novara-primary lg:border-novara-primary lg:text-novara-primary lg:hover:bg-novara-primary lg:hover:text-white">Explore Specialities</Button>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 lg:gap-8 text-white lg:text-novara-text font-DM_Sans text-sm sm:text-base font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-novara-accent" />
            <span>NABH Accredited</span>
          </div>
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-novara-accent" />
            <span>24/7 Emergency Care</span>
          </div>
          <div className="flex items-center gap-2">
            <Microscope className="w-5 h-5 text-novara-accent" />
            <span>Advanced Technology</span>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 lg:left-1/2 lg:w-1/2 h-full z-0 m-0 p-0 top-0">
      <div className="absolute inset-0 bg-novara-primary/70 lg:bg-transparent z-10 lg:hidden"></div>
      <img 
        src="https://images.unsplash.com/photo-1777269749032-d8d458ae594d?q=80&w=1074&auto=format&fit=crop" 
        alt="Novara Hospital Facility" 
        className="w-full h-full object-cover top-0 m-0 p-0 absolute"
        fetchPriority="high"
        width="1074"
        height="716"
      />
    </div>
  </section>
);

const TrustStatsSection = () => (
  <section className="bg-novara-primary py-16">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-0">
        <div className="lg:py-14 lg:px-4 lg:border-r lg:border-white/10">
          <StatCounter target={25} suffix="+" label="Specialities" duration={1.8} />
        </div>
        <div className="lg:py-14 lg:px-4 lg:border-r lg:border-white/10">
          <StatCounter target={500} suffix="+" label="Doctors" duration={2.0} />
        </div>
        <div className="lg:py-14 lg:px-4 lg:border-r lg:border-white/10">
          <StatCounter target={200000} suffix="+" label="Patients Served" duration={2.2} />
        </div>
        <div className="lg:py-14 lg:px-4">
          <StatCounter target={2004} suffix="" label="Established" duration={2.4} />
        </div>
      </div>
    </div>
  </section>
);

const iconMap = {
  Heart: Heart,
  Brain: Brain,
  Bone: Bone,
  Stethoscope: Stethoscope,
  Microscope: Microscope
};

const SpecialitiesSection = () => (
  <section className="bg-novara-bg py-14 md:py-20">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeader 
        label="OUR SPECIALITIES" 
        heading="World-Class Care Across Every Discipline"
        subtext="From complex cardiac interventions to comprehensive cancer care, our specialized departments are equipped with state-of-the-art technology and led by globally recognized experts."
      />
      
      {/* Mobile: horizontal scroll row; sm: 2-col grid; xl: all 5 side-by-side */}
      <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-5 gap-6">
        {specialities.map((spec, index) => {
          const IconComponent = iconMap[spec.icon] || HeartHandshake;
          return (
            <motion.div 
              key={spec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-full h-full min-h-[320px] bg-white rounded-xl border border-novara-border shadow-sm hover:shadow-md transition-shadow duration-200 p-6 flex flex-col"
            >
              <div className="w-12 h-12 bg-novara-accent/10 rounded-xl flex items-center justify-center mb-4 shrink-0">
                 <IconComponent className="w-6 h-6 text-novara-accent" />
              </div>
              <h3 className="font-DM_Serif_Display text-2xl text-novara-text mb-2">{spec.name}</h3>
              <p className="font-DM_Sans text-sm text-novara-accent font-medium mt-1 mb-4">{spec.tagline}</p>
              <ul className="space-y-2 mb-8 flex-grow">
                {spec.conditions.slice(0, 3).map((condition, i) => (
                  <li key={i} className="flex items-start gap-2 font-DM_Sans text-sm text-novara-muted">
                    <CheckCircle2 className="w-4 h-4 text-novara-primary mt-0.5 shrink-0" />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" to={`/specialities/${spec.slug}`} className="w-full text-sm mt-auto border-novara-primary text-novara-primary hover:bg-novara-primary hover:text-white" aria-label={`Learn more about ${spec.name}`}>
                Learn More
              </Button>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile-only: horizontal scroll */}
      <div className="sm:hidden relative">
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory -mx-4 px-4">
          {specialities.map((spec, index) => {
            const IconComponent = iconMap[spec.icon] || HeartHandshake;
            return (
              <motion.div 
                key={spec.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="min-w-[280px] snap-start flex-shrink-0 bg-white rounded-xl border border-novara-border shadow-sm p-6 flex flex-col"
              >
                <div className="w-12 h-12 bg-novara-accent/10 rounded-xl flex items-center justify-center mb-4 shrink-0">
                  <IconComponent className="w-6 h-6 text-novara-accent" />
                </div>
                <h3 className="font-DM_Serif_Display text-2xl text-novara-text mb-2">{spec.name}</h3>
                <p className="font-DM_Sans text-sm text-novara-accent font-medium mt-1 mb-4">{spec.tagline}</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  {spec.conditions.slice(0, 3).map((condition, i) => (
                    <li key={i} className="flex items-start gap-2 font-DM_Sans text-sm text-novara-muted">
                      <CheckCircle2 className="w-4 h-4 text-novara-primary mt-0.5 shrink-0" />
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" to={`/specialities/${spec.slug}`} className="w-full text-sm mt-auto border-novara-primary text-novara-primary hover:bg-novara-primary hover:text-white" aria-label={`Learn more about ${spec.name}`}>
                  Learn More
                </Button>
              </motion.div>
            );
          })}
        </div>
        {/* Right-edge fade scroll hint */}
        <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-novara-bg to-transparent pointer-events-none" />
      </div>
      
    </div>
  </section>
);

const WhyChooseSection = () => (
  <section className="bg-white py-14 md:py-20">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
        <div className="relative order-2 lg:order-1 aspect-[4/3] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=60" 
            alt="Doctor examining patient" 
            className="max-h-[480px] w-full object-cover object-center rounded-2xl shadow-lg"
            loading="lazy"
            width="600"
            height="450"
          />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeader 
            label="WHY CHOOSE NOVARA" 
            heading="Excellence in Every Dimension of Care"
            className="mb-8"
          />
          <div className="space-y-6">
            {[
              { title: 'Advanced Technology', desc: 'State-of-the-art diagnostic and surgical equipment ensuring precise treatments.', icon: <Award className="w-5 h-5 text-novara-accent"/> },
              { title: 'Expert Specialists', desc: '500+ globally trained doctors across 25+ disciplines working collaboratively.', icon: <Stethoscope className="w-5 h-5 text-novara-accent"/> },
              { title: 'Patient-First Care', desc: 'Compassionate, personalised treatment plans at every step of your journey.', icon: <HeartHandshake className="w-5 h-5 text-novara-accent"/> },
              { title: 'Proven Outcomes', desc: 'Over 2,00,000+ patients treated with excellence and an industry-leading success rate.', icon: <ShieldCheck className="w-5 h-5 text-novara-accent"/> }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-11 h-11 bg-novara-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-DM_Sans text-lg font-semibold text-novara-text">{feature.title}</h3>
                  <p className="font-DM_Sans text-sm text-novara-muted mt-1 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeaturedDoctorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, doctors.length - 3);

  const prevSlide = () => {
    setCurrentIndex(Math.max(0, currentIndex - 3));
  };
  const nextSlide = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + 3));
  };

  return (
    <section className="bg-novara-bg py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          label="OUR DOCTORS" 
          heading="Meet the Specialists Behind Your Care"
          align="center"
        />
        
        <div className="relative mt-10">
          <div className="overflow-hidden px-4 -mx-4 lg:px-0 lg:mx-0">
            <div className="flex md:hidden overflow-x-auto gap-3 pb-4 snap-x snap-mandatory">
              {doctors.map((doc) => (
                <div 
                  key={`mobile-${doc.id}`}
                  className="min-w-[200px] snap-start flex-shrink-0 bg-white rounded-xl border border-novara-border shadow-sm flex flex-col overflow-hidden"
                >
                  <div className="h-40 overflow-hidden">
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top" loading="lazy" width="200" height="160" />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <Badge className="mb-2 self-start text-xs">{doc.speciality}</Badge>
                    <h3 className="font-DM_Serif_Display text-base text-novara-text mb-1 leading-snug">{doc.name}</h3>
                    <p className="font-DM_Sans text-xs text-novara-accent font-medium mb-3">{doc.experience} yrs exp.</p>
                    <Button variant="outline" to={`/doctors/${doc.slug}`} className="w-full text-xs mt-auto py-2" aria-label={`View profile of ${doc.name}`}>
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden md:block">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {doctors.slice(currentIndex, currentIndex + 3).map((doc) => (
                    <div 
                      key={doc.id}
                      className="w-full bg-white rounded-xl border border-novara-border shadow-sm flex flex-col overflow-hidden"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top" loading="lazy" width="400" height="400" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <Badge className="mb-4 self-start">{doc.speciality}</Badge>
                        <h3 className="font-DM_Serif_Display text-xl text-novara-text mb-2">{doc.name}</h3>
                        <div className="mb-6 flex-grow">
                          <p className="font-DM_Sans text-sm text-novara-muted mt-1">{doc.qualification}</p>
                          <p className="font-DM_Sans text-sm text-novara-accent font-medium mt-1">{doc.experience} Years Experience</p>
                        </div>
                        <Button variant="outline" to={`/doctors/${doc.slug}`} className="w-full text-sm mt-auto" aria-label={`View profile of ${doc.name}`}>
                          View Profile
                        </Button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden md:flex flex-row items-center justify-between mt-8 gap-6">
            <div className="w-[104px]"></div>
            
            <div className="flex justify-center gap-2">
              <button 
                onClick={() => setCurrentIndex(0)}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
                aria-label="Go to page 1"
              >
                <span className={`w-3 h-3 rounded-full transition-colors ${currentIndex < 3 ? 'bg-novara-accent' : 'bg-transparent border border-novara-accent'}`} />
              </button>
              <button 
                onClick={() => setCurrentIndex(3)}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
                aria-label="Go to page 2"
              >
                <span className={`w-3 h-3 rounded-full transition-colors ${currentIndex === 3 ? 'bg-novara-accent' : 'bg-transparent border border-novara-accent'}`} />
              </button>
            </div>
            
            <div className="flex justify-end gap-4 pr-1">
              <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`w-12 h-12 rounded-full bg-white border border-novara-border shadow-sm flex items-center justify-center transition-opacity z-10 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
                aria-label="Previous doctors"
              >
                <ChevronLeft className="w-6 h-6 text-novara-primary" />
              </button>
              
              <button 
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className={`w-12 h-12 rounded-full bg-white border border-novara-border shadow-sm flex items-center justify-center transition-opacity z-10 ${currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
                aria-label="Next doctors"
              >
                <ChevronRight className="w-6 h-6 text-novara-primary" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/doctors" className="font-DM_Sans text-novara-accent font-semibold flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
            View All Doctors <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const PatientStoriesSection = () => (
  <section className="bg-white py-14 md:py-20">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeader 
        label="PATIENT STORIES" 
        heading="Lives Changed, Trust Earned"
        align="center"
      />
      
      {/* Scroll wrapper with right-edge fade on mobile */}
      <div className="relative">
        <div className="flex overflow-x-auto lg:grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 lg:pb-0 snap-x snap-mandatory">
          {patientStories.slice(0, 3).map((story, index) => (
            <div key={story.id} className="min-w-[300px] lg:min-w-0 snap-start bg-novara-bg rounded-xl p-8 relative flex flex-col">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-novara-accent/10" />
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => <span key={i} className="text-[#C9A84C]">★</span>)}
              </div>
              <p className="font-DM_Sans text-base italic text-novara-text leading-relaxed flex-grow mb-8">
                "{story.story}"
              </p>
              <div>
                <p className="font-DM_Sans font-semibold text-novara-text">{story.name}</p>
                <p className="font-DM_Sans text-sm text-novara-muted mb-2">{story.location}</p>
                <Badge>{story.speciality}</Badge>
              </div>
            </div>
          ))}
        </div>
        {/* Right-edge fade scroll hint (mobile only) */}
        <div className="lg:hidden absolute right-0 top-0 bottom-8 w-14 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </div>
  </section>
);

const CTABanner = () => (
  <section className="bg-novara-primary py-20 relative overflow-hidden" style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(14,138,125,0.08) 0%, transparent 70%)' }}>
    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
      <SectionHeader 
        label="GET IN TOUCH"
        heading="Ready to Take the Next Step Towards Better Health?"
        subtext="Book an appointment with our specialists today. Same-day consultations available."
        align="center"
        light={true}
      />
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 -mt-4">
        <Link to="/appointments" className="bg-white text-novara-primary font-DM_Sans font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors duration-200 text-center">
          Book Appointment
        </Link>
        <Link to="/contact" className="bg-transparent border-2 border-white text-white font-DM_Sans font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200 text-center">
          Contact Us
        </Link>
      </div>
    </div>
  </section>
);

const BlogSection = () => (
  <section className="bg-novara-bg py-14 md:py-20">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeader 
        label="HEALTH INSIGHTS" 
        heading="Stay Informed, Stay Healthy"
      />
      
      {/* Scroll wrapper with right-edge fade on mobile */}
      <div className="relative">
        <div className="flex overflow-x-auto lg:grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 lg:pb-0 snap-x snap-mandatory">
          {blogs.slice(0, 3).map((blog) => {
            return (
              <div key={blog.id} className="min-w-[300px] lg:min-w-0 snap-start bg-white rounded-xl border border-novara-border shadow-sm flex flex-col overflow-hidden h-full">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover object-center rounded-t-xl" loading="lazy" width="800" height="450" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between">
                    <Badge>{blog.category}</Badge>
                    <span className="font-DM_Sans text-xs text-novara-muted">{blog.readTime}</span>
                  </div>
                  <h3 className="font-DM_Serif_Display text-xl text-novara-text mt-3 leading-snug">
                    <Link to={`/blog/${blog.slug}`} className="hover:text-novara-accent transition-colors">{blog.title}</Link>
                  </h3>
                  <p className="font-DM_Sans text-sm text-novara-muted mt-2 line-clamp-2 leading-relaxed flex-grow">
                    {blog.excerpt}
                  </p>
                  <span className="font-DM_Sans text-xs text-novara-muted mt-3">{blog.author}</span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-DM_Sans text-xs text-novara-muted">{blog.date}</span>
                    <Link to={`/blog/${blog.slug}`} className="font-DM_Sans text-sm font-semibold text-novara-accent hover:opacity-80 mt-auto" aria-label={`Read more about ${blog.title}`}>
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Right-edge fade scroll hint (mobile only) */}
        <div className="lg:hidden absolute right-0 top-0 bottom-8 w-14 bg-gradient-to-l from-novara-bg to-transparent pointer-events-none" />
      </div>
      
      <div className="text-center mt-8">
        <Link to="/blog" className="font-DM_Sans text-novara-accent font-semibold flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
          View All Articles <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrustStatsSection />
      <SpecialitiesSection />
      <WhyChooseSection />
      <FeaturedDoctorsSection />
      <PatientStoriesSection />
      <CTABanner />
      <BlogSection />
    </div>
  );
};

export default Home;
