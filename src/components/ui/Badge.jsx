const Badge = ({ children, className = '' }) => {
  return (
    <span className={`bg-novara-accent/10 text-novara-accent px-3 py-1 rounded-full font-['DM_Sans'] text-xs font-medium tracking-wide inline-block ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
