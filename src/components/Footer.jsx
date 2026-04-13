import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

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
                        <div style={{ marginBottom: '1rem' }}>
                            <img src="/images/logo.png" alt="Heartitude Logo" style={{ height: '66px', width: 'auto', display: 'block' }} />
                        </div>
                        <p style={{ color: '#9ca3af', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            {t('footer.tagline')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.25rem' }}>
                            {t('footer.quickLinks')}
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link to="/about" style={{ color: '#d1d5db' }}>{t('footer.linkAbout')}</Link></li>
                            <li><Link to="/programs" style={{ color: '#d1d5db' }}>{t('footer.linkPrograms')}</Link></li>
                            <li><Link to="/impact" style={{ color: '#d1d5db' }}>{t('footer.linkImpact')}</Link></li>
                            <li><Link to="/get-involved" style={{ color: '#d1d5db' }}>{t('footer.linkVolunteer')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.25rem' }}>
                            {t('footer.contactTitle')}
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#d1d5db' }}>
                                <Mail size={18} />
                                <span>jiyunkimm0503@gmail.com</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#d1d5db' }}>
                                <Instagram size={18} />
                                <span>@heartitude_ba</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #374151', paddingTop: '2rem', textAlign: 'center', color: '#6b7280', fontSize: '0.9rem' }}>
                    <p>{t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
