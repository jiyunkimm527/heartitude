import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleLanguage = () => {
        const next = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(next);
    };

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.programs'), path: '/programs' },
        { name: t('nav.resources'), path: '/resources' },
        { name: t('nav.impact'), path: '/impact' },
        { name: t('nav.getInvolved'), path: '/get-involved' },
        { name: t('nav.contact'), path: '/contact' },
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0' }}>
                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
                        <img
                            src="/images/logo.png"
                            alt="Heartitude - Balboa Academy"
                            style={{ height: '90px', width: 'auto', display: 'block', flexShrink: 0 }}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="desktop-nav" style={{ display: 'none', marginLeft: '3rem' }}>
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
                                    fontFamily: 'var(--font-heading)',
                                    whiteSpace: 'nowrap'
                                })}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            style={{
                                background: 'none',
                                border: '2px solid var(--color-nap-blue)',
                                borderRadius: '20px',
                                padding: '0.3rem 0.9rem',
                                cursor: 'pointer',
                                fontWeight: '700',
                                fontSize: '0.85rem',
                                color: 'var(--color-nap-blue)',
                                letterSpacing: '0.05em',
                                transition: 'all 0.2s'
                            }}
                        >
                            {i18n.language === 'es' ? 'EN' : 'ES'}
                        </button>

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
