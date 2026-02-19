import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Programs', path: '/programs' },
        { name: 'Resources', path: '/resources' },
        { name: 'Impact', path: '/impact' },
        { name: 'Get Involved', path: '/get-involved' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50" style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid #f3f4f6'
        }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '160px' }}>
                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img src="/src/assets/logo.png" alt="Heartitude Logo" style={{ height: '160px', width: 'auto' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <img src="/src/assets/balboa_logo.png" alt="Balboa Academy" style={{ height: '60px', width: 'auto', marginLeft: '-20px' }} />
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>Heartitude Club</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="desktop-nav" style={{ display: 'none' }}>
                        <style>{`
              @media (min-width: 768px) {
                .desktop-nav { display: flex !important; align-items: center; gap: 2rem; }
                .mobile-menu-btn { display: none !important; }
              }
            `}</style>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                style={({ isActive }) => ({
                                    color: isActive ? 'var(--color-nap-blue)' : 'var(--color-primary)',
                                    fontWeight: isActive ? '700' : '500',
                                    fontSize: '0.9rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    transition: 'color 0.2s',
                                    fontFamily: 'var(--font-heading)'
                                })}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={toggleMenu}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--color-primary)'
                        }}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '80px',
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    borderBottom: '1px solid #f3f4f6',
                    padding: '1rem 0',
                    boxShadow: 'var(--shadow-lg)'
                }}>
                    <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    padding: '0.75rem 0',
                                    fontSize: '1.1rem',
                                    fontWeight: '500',
                                    color: 'var(--color-primary)',
                                    borderBottom: '1px solid #f3f4f6'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
