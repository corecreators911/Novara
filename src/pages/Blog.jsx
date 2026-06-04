import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogs } from '../data/blogs';
import Badge from '../components/ui/Badge';
import PageHero from '../components/ui/PageHero';

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

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-novara-bg min-h-screen pb-20">
      <PageHero
        title="Health & Wellness Insights"
        subtitle="Expert advice, medical breakthroughs, and healthy living tips directly from the specialists at Novara Hospital."
      />

      {/* Blog Grid */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {blogs.map((post) => (
              <motion.div 
                key={post.id} 
                variants={cardVariants}
                className="bg-white border border-novara-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="aspect-[16/9] overflow-hidden shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="800"
                    height="450"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <Badge>{post.category}</Badge>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`} className="group-hover:text-novara-accent transition-colors">
                    <h2 className="font-DM_Serif_Display text-2xl md:text-3xl text-novara-text mb-4">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="font-DM_Sans text-base text-novara-muted leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-novara-border mt-auto">
                    <div className="flex items-center gap-4 text-sm text-novara-muted font-DM_Sans font-medium">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1.5" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1.5" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center font-DM_Sans text-sm font-bold text-novara-primary hover:text-novara-accent transition-colors"
                      aria-label={`Read full article: ${post.title}`}
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-4 md:px-6">
        <div className="container mx-auto max-w-4xl bg-novara-primary/5 border border-novara-primary/10 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-DM_Serif_Display text-3xl md:text-4xl text-novara-text mb-4">
            Stay Informed
          </h2>
          <p className="font-DM_Sans text-base md:text-lg text-novara-muted max-w-xl mx-auto mb-8">
            Subscribe to our newsletter to receive the latest health updates and expert advice directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input 
              id="newsletter-email"
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-lg border border-novara-border focus:outline-none focus:border-novara-accent focus:ring-1 focus:ring-novara-accent font-DM_Sans text-base"
              required
            />
            <button 
              type="submit" 
              className="bg-novara-accent hover:bg-novara-accent/90 text-white font-DM_Sans font-semibold px-6 py-3 rounded-lg transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
