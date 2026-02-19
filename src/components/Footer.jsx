import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#111827', color: 'white', paddingTop: '4rem', paddingBottom: '2rem' }}>
            <div className="container">
                <div className="footer-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontWeight: 'bold', fontSize: '1.25rem' }}>
                            <img src="/src/assets/logo.png" alt="Heartitude Logo" style={{ height: '50px', width: 'auto' }} />
                            <span>Heartitude</span>
                        </div>
                        <p style={{ color: '#9ca3af', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Connecting learning and care—where students need it most. Supporting learners in under-resourced schools and pediatric care settings.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.25rem' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link to="/about" style={{ color: '#d1d5db' }}>About Us</Link></li>
                            <li><Link to="/programs" style={{ color: '#d1d5db' }}>Our Programs</Link></li>
                            <li><Link to="/impact" style={{ color: '#d1d5db' }}>Impact</Link></li>
                            <li><Link to="/get-involved" style={{ color: '#d1d5db' }}>Volunteer</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.25rem' }}>Contact Us</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#d1d5db' }}>
                                <Mail size={18} />
                                <span>hello@heartitude.org</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#d1d5db' }}>
                                <Instagram size={18} />
                                <span>@heartitude.club</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #374151', paddingTop: '2rem', textAlign: 'center', color: '#6b7280', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} Heartitude Club. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
