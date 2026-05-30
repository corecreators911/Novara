import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-novara-primary text-white pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="flex items-baseline gap-2 mb-4">
              <span className="font-DM_Serif_Display text-white text-2xl tracking-tight">Novara</span>
              <span className="font-DM_Sans text-white text-[13px] font-medium tracking-wide uppercase">Hospital</span>
            </Link>
            <p className="font-DM_Sans text-novara-accent text-sm font-medium tracking-widest uppercase mb-4">
              Where Expertise Meets Compassion
            </p>
            <p className="font-DM_Sans text-white/70 text-sm leading-relaxed max-w-xs">
              Providing world-class healthcare with a human touch since 2004. Your health is our greatest priority.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-DM_Serif_Display text-xl mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-center md:text-left font-DM_Sans text-sm text-white/80">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/specialities" className="hover:text-white transition-colors">Specialities</Link></li>
              <li><Link to="/doctors" className="hover:text-white transition-colors">Doctors</Link></li>
              <li><Link to="/appointments" className="hover:text-white transition-colors">Appointments</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-DM_Serif_Display text-xl mb-6">Our Specialities</h4>
            <ul className="flex flex-col gap-3 text-center md:text-left font-DM_Sans text-sm text-white/80">
              <li><Link to="/specialities/cardiology" className="hover:text-white transition-colors">Cardiology</Link></li>
              <li><Link to="/specialities/neurology" className="hover:text-white transition-colors">Neurology</Link></li>
              <li><Link to="/specialities/orthopaedics" className="hover:text-white transition-colors">Orthopaedics</Link></li>
              <li><Link to="/specialities/gastroenterology" className="hover:text-white transition-colors">Gastroenterology</Link></li>
              <li><Link to="/specialities/oncology" className="hover:text-white transition-colors">Oncology</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-DM_Serif_Display text-xl mb-6">Contact Info</h4>
            <ul className="flex flex-col gap-4 text-center md:text-left font-DM_Sans text-sm text-white/80">
              <li>
                <strong>Address:</strong><br />
                Novara Health City, Linking Road,<br />
                Bandra West, Mumbai 400050
              </li>
              <li>
                <strong>Phone:</strong><br />
                +91 22 4567 8900
              </li>
              <li>
                <strong>Email:</strong><br />
                contact@novarahospital.com
              </li>
              <li>
                <strong>Hours:</strong><br />
                Mon-Sun: 24 Hours Emergency
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="font-DM_Sans text-xs text-white/60">
            © 2026 Novara Hospital. All rights reserved.
          </p>
          <p className="font-DM_Sans text-xs text-white/40">
            Designed for excellence in healthcare.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
