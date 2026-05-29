import { Link } from 'react-router-dom';

const Button = ({ variant = 'primary', children, onClick, to, className = '' }) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-['DM_Sans'] font-semibold text-[15px] transition-all duration-200 min-h-[44px]";
  
  const variants = {
    primary: "bg-novara-primary text-white hover:bg-novara-accent",
    secondary: "bg-novara-accent text-white hover:opacity-90",
    outline: "border border-novara-primary text-novara-primary hover:bg-novara-primary hover:text-white"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
