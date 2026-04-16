import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  type = 'button',
  style = {}
}) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const finalClassName = `${baseClass} ${variantClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={finalClassName} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={finalClassName} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
