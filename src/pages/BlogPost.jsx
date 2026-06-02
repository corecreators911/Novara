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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
            </p>
            <h2 className="font-DM_Serif_Display text-2xl md:text-3xl text-novara-text mt-10 mb-5">Understanding the Basics</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-novara-muted">
              <li>Regular screenings are essential for early detection.</li>
              <li>A balanced diet contributes significantly to your overall well-being.</li>
              <li>Always consult with a specialist before making drastic lifestyle changes.</li>
            </ul>
            <h2 className="font-DM_Serif_Display text-2xl md:text-3xl text-novara-text mt-10 mb-5">Moving Forward</h2>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
