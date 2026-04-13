import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  type = 'button'
}) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const finalClassName = `${baseClass} ${variantClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={finalClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={finalClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
