import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { ArrowRight, Heart, Brain, Bone, FlaskConical, Microscope } from 'lucide-react';
import { specialities } from '../data/specialities';
import { SectionHeader } from '../components/ui/SectionHeader';

const iconMap = {
  Heart: Heart,
  Brain: Brain,
  Bone: Bone,
  FlaskConical: FlaskConical,
  Microscope: Microscope,
};

function SpecialityRow({ speciality, isLast }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const IconComponent = iconMap[speciality.icon] || Heart;

  return (
    <div
      ref={ref}
      className={`py-16 md:py-24 flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
        !isLast ? 'border-b border-novara-border' : ''
      } transition-all duration-500 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Text Column */}
      <div className="w-full md:w-[55%] order-2 md:order-1">
        <IconComponent size={28} className="text-novara-accent mb-4" />
        <h3 className="font-['DM_Serif_Display'] text-3xl md:text-4xl text-novara-text mb-2">
          {speciality.name}
        </h3>
        <div className="font-['DM_Sans'] text-sm uppercase tracking-widest text-novara-accent mb-4">
          {speciality.tagline}
        </div>
        <p className="font-['DM_Sans'] text-base text-novara-muted leading-relaxed mb-6 max-w-prose">
          {speciality.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {speciality.conditions.map((condition, idx) => (
            <span
              key={idx}
              className="border border-novara-border rounded-full px-3 py-1 text-xs font-medium text-novara-muted bg-white"
            >
              {condition}
            </span>
          ))}
        </div>
        <Link
          to={`/specialities/${speciality.slug}`}
          className="mt-8 inline-flex items-center gap-2 font-['DM_Sans'] text-sm font-semibold text-novara-primary hover:text-novara-accent group transition-colors duration-300"
        >
          Learn More
          <ArrowRight
            size={16}
            className="transform group-hover:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Image Column */}
      <div className="w-full md:w-[45%] order-1 md:order-2">
        <div className="aspect-[16/9] md:aspect-[4/3] rounded-2xl overflow-hidden">
          <img
            src={speciality.image}
            alt={speciality.name}
            className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default function Specialities() {
  return (
    <div className="max-w-6xl mx-auto px-6 w-full">
      {/* Section 1: Page Header */}
      <div className="pt-16 md:pt-24 bg-novara-bg">
        <SectionHeader
            label="Medical Excellence"
            heading="Our Specialities"
            subtext="Novara Hospital brings together world-class specialists across five centres of excellence, each dedicated to delivering the highest standard of care."
            align="center"
          />
          <div className="border-t border-novara-border mt-10"></div>
        </div>

      {/* Section 2: Specialities Stack */}
      <div className="bg-novara-bg">
        {specialities.map((speciality, index) => (
          <SpecialityRow
            key={speciality.id}
            speciality={speciality}
            isLast={index === specialities.length - 1}
          />
        ))}
      </div>
    </div>
  );
}