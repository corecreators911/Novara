import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-novara-bg px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-lg w-full"
      >
        {/* Large 404 number */}
        <p className="font-['Space_Grotesk'] text-[120px] sm:text-[160px] font-bold leading-none text-novara-primary/10 select-none">
          404
        </p>

        {/* Heading */}
        <h1 className="font-DM_Serif_Display text-4xl sm:text-5xl text-novara-text -mt-4 mb-4">
          Page Not Found
        </h1>

        {/* Subtext */}
        <p className="font-DM_Sans text-base sm:text-lg text-novara-muted leading-relaxed mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have moved.
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" to="/">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <Button variant="outline" to="/contact">
            Contact Us
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
