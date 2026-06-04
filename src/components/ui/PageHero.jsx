import React from 'react';
import { motion } from 'framer-motion';

/**
 * PageHero — shared hero banner used across inner pages.
 * Props:
 *   title    {string}  — required, rendered as <h1>
 *   subtitle {string}  — optional, rendered as <p> below the title
 */
const PageHero = ({ title, subtitle }) => (
  <section className="bg-novara-primary text-white py-20 px-4 md:px-6 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
    <div className="container mx-auto max-w-5xl relative z-10 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-DM_Serif_Display text-4xl md:text-5xl lg:text-6xl mb-6"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-DM_Sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
