import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, Heart, Brain, Bone, FlaskConical, Microscope, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import SectionHeader from '../components/ui/SectionHeader';
import { specialities } from '../data/specialities';
import { doctors } from '../data/doctors';

const iconMap = {
  Heart: Heart,
  Brain: Brain,
  Bone: Bone,
  FlaskConical: FlaskConical,
  Microscope: Microscope
};

const SpecialityDetail = () => {
  const { slug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const speciality = specialities.find(s => s.slug === slug);

  if (!speciality) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-novara-bg">
        <h1 className="font-DM_Serif_Display text-4xl text-novara-text mb-4">Speciality Not Found</h1>
        <p className="font-DM_Sans text-novara-muted mb-8">We couldn't find the department you're looking for.</p>
        <Button variant="primary" to="/specialities">View All Specialities</Button>
      </div>
    );
  }

  const departmentDoctors = doctors.filter(
    (doc) => doc.speciality.toLowerCase() === speciality.name.toLowerCase()
  );

  const IconComponent = iconMap[speciality.icon] || Heart;

  return (
    <div className="flex flex-col bg-novara-bg">
      {/* Hero Section */}
      <section className="bg-white border-b border-novara-border pt-8 lg:pt-12 pb-12 lg:pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1 relative z-10">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 font-DM_Sans text-xs font-semibold text-novara-muted mb-8 uppercase tracking-widest">
                <Link to="/" className="hover:text-novara-accent transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link to="/specialities" className="hover:text-novara-accent transition-colors">Specialities</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-novara-accent">{speciality.name}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-novara-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                  <IconComponent className="w-7 h-7 text-novara-accent" />
                </div>
                <Badge>{speciality.tagline}</Badge>
              </div>
              
              <h1 className="font-DM_Serif_Display text-5xl lg:text-7xl text-novara-text leading-[1.1] tracking-tight mb-6">
                {speciality.name}
              </h1>
              
              <p className="font-DM_Sans text-lg text-novara-muted leading-relaxed mb-10 max-w-xl">
                {speciality.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" to="/appointments">Book Consultation</Button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="order-1 lg:order-2 w-full h-[400px] lg:h-[500px]">
              <img 
                src={speciality.image} 
                alt={`${speciality.name} Department`} 
                className="w-full h-full object-cover rounded-2xl shadow-sm"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <div className="max-w-4xl mx-auto">
            <SectionHeader 
              label="DEPARTMENT OVERVIEW" 
              heading="Excellence in Clinical Care"
              align="center"
            />
            <div className="space-y-6 mt-8">
              {speciality.longDescription?.map((para, idx) => (
                <p key={idx} className="font-DM_Sans text-lg text-novara-text leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services & Procedures */}
      <section className="py-16 md:py-24 bg-white border-y border-novara-border">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-novara-bg p-8 md:p-12 rounded-2xl">
              <div className="mb-8">
                <h3 className="font-DM_Serif_Display text-3xl text-novara-text mb-2">Conditions We Treat</h3>
                <div className="w-16 h-1 bg-novara-accent rounded-full"></div>
              </div>
              <ul className="space-y-4">
                {speciality.conditions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-novara-accent" />
                    </div>
                    <span className="font-DM_Sans text-base text-novara-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-novara-border shadow-sm">
              <div className="mb-8">
                <h3 className="font-DM_Serif_Display text-3xl text-novara-text mb-2">Key Procedures</h3>
                <div className="w-16 h-1 bg-novara-primary rounded-full"></div>
              </div>
              <ul className="space-y-4">
                {speciality.procedures?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-novara-primary" />
                    </div>
                    <span className="font-DM_Sans text-base text-novara-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      {speciality.facilities && speciality.facilities.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <SectionHeader 
              label="TECHNOLOGY & INFRASTRUCTURE" 
              heading="Advanced Facilities"
              align="center"
            />
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {speciality.facilities.map((fac, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl border border-novara-border shadow-sm">
                  <h4 className="font-DM_Sans text-lg font-bold text-novara-text mb-3">{fac.name}</h4>
                  <p className="font-DM_Sans text-sm text-novara-muted leading-relaxed">{fac.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Specialists */}
      {departmentDoctors.length > 0 && (
        <section className="py-16 md:py-24 bg-white border-y border-novara-border">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <SectionHeader 
              label="OUR TEAM" 
              heading={`${speciality.name} Specialists`}
              align="center"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {departmentDoctors.map((doc) => (
                <div 
                  key={doc.id}
                  className={`bg-novara-bg rounded-xl border border-novara-border shadow-sm flex flex-col overflow-hidden ${departmentDoctors.length === 1 ? 'sm:max-w-sm sm:mx-auto sm:col-span-2 lg:col-span-3' : ''}`}
                >
                  <div className="aspect-square overflow-hidden">
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top" loading="lazy" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <Badge className="mb-4 self-start bg-white">{doc.speciality}</Badge>
                    <h3 className="font-DM_Serif_Display text-xl text-novara-text mb-2">{doc.name}</h3>
                    <div className="mb-6 flex-grow">
                      <p className="font-DM_Sans text-sm text-novara-muted mt-1">{doc.qualification}</p>
                      <p className="font-DM_Sans text-sm text-novara-accent font-medium mt-1">{doc.experience} Years Experience</p>
                    </div>
                    <Button variant="outline" to={`/doctors/${doc.slug}`} className="w-full text-sm mt-auto bg-white">
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {speciality.faqs && speciality.faqs.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-12 text-left">
              <div className="lg:col-span-4">
                <SectionHeader 
                  label="COMMON QUESTIONS" 
                  heading="Patient FAQs"
                  align="left"
                />
              </div>
              <div className="lg:col-span-8 space-y-6 lg:mt-6">
                {speciality.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 md:p-8 rounded-xl border border-novara-border shadow-sm">
                    <h4 className="font-DM_Sans text-lg font-bold text-novara-text mb-3">{faq.question}</h4>
                    <p className="font-DM_Sans text-base text-novara-muted leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Banner */}
      <section className="bg-novara-primary py-20 relative overflow-hidden" style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(14,138,125,0.1) 0%, transparent 80%)' }}>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <h2 className="font-DM_Serif_Display text-4xl md:text-5xl text-white mb-6">
            Ready to consult with our experts?
          </h2>
          <p className="font-DM_Sans text-white/80 text-lg mb-10">
            Book an appointment with our {speciality.name.toLowerCase()} team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" to="/appointments" className="!bg-white !text-novara-primary hover:!bg-white/90">
              Book Appointment
            </Button>
            <Button variant="outline" to="/doctors" className="border-white text-white hover:bg-white/10 hover:text-white">
              View All Doctors
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialityDetail;
