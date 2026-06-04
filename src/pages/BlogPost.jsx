import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { blogs } from '../data/blogs';

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundBlog = blogs.find(b => b.slug === slug);
    setBlog(foundBlog);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center bg-novara-bg">
        <p className="font-DM_Sans text-lg text-novara-muted">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-novara-bg min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-novara-primary text-white py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center flex flex-col items-center">
          <Link to="/blog" className="inline-flex items-center text-novara-accent hover:text-white transition-colors mb-6 font-DM_Sans font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-DM_Serif_Display text-4xl md:text-5xl mb-6 leading-tight"
          >
            {blog.title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-4 text-white/80 font-DM_Sans text-sm"
          >
            <span className="flex items-center"><User className="w-4 h-4 mr-1.5 text-novara-accent" /> {blog.author}</span>
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5 text-novara-accent" /> {blog.date}</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5 text-novara-accent" /> {blog.readTime}</span>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl bg-white p-6 md:p-12 rounded-2xl border border-novara-border shadow-sm">
          <div className="font-DM_Sans text-novara-text text-lg leading-relaxed space-y-6">
            <p className="font-medium text-xl text-novara-muted mb-8 italic border-l-4 border-novara-accent pl-4">
              {blog.excerpt}
            </p>
            {blog.content && blog.content.map((paragraph, i) => (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
