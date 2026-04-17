import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer style={{ backgroundColor: '#0f1923', color: 'white', paddingTop: '1.5rem', paddingBottom: '1rem', borderTop: '3px solid var(--color-amber)' }}>
            <style>{`
                .footer-link {
                    color: #9ca3af;
                    text-decoration: none;
                    font-size: 0.875rem;
                    font-weight: 300;
                    transition: color 0.2s;
                    display: inline-block;
                    letter-spacing: 0.01em;
                }
                .footer-link:hover {
                    color: #fbbf24;
                }
                .footer-contact-link {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    color: #9ca3af;
                    text-decoration: none;
                    font-size: 0.875rem;
                    font-weight: 300;
                    transition: color 0.2s;
                    letter-spacing: 0.01em;
                }
                .footer-contact-link:hover {
                    color: #fbbf24;
                }
            `}</style>
            <div className="container">
                <div className="footer-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '1.25rem'
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{ marginBottom: '1rem' }}>
                            <img src="/images/logo.png" alt="Heartitude Logo" style={{ height: '66px', width: 'auto', display: 'block' }} />
                        </div>
                        <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                            {t('footer.tagline')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '0.75rem', fontWeight: '700', marginBottom: '1.25rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b7280' }}>
                            {t('footer.quickLinks')}
                        </h4>
                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.45rem 2rem' }}>
                            <li><Link to="/about" className="footer-link">{t('footer.linkAbout')}</Link></li>
                            <li><Link to="/impact" className="footer-link">{t('footer.linkImpact')}</Link></li>
                            <li><Link to="/programs" className="footer-link">{t('footer.linkPrograms')}</Link></li>
                            <li><Link to="/get-involved" className="footer-link">{t('footer.linkGetInvolved')}</Link></li>
                            <li><Link to="/resources" className="footer-link">{t('footer.linkResources')}</Link></li>
                            <li><Link to="/contact" className="footer-link">{t('footer.linkContact')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '0.75rem', fontWeight: '700', marginBottom: '1.25rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b7280' }}>
                            {t('footer.contactTitle')}
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li>
                                <a href="mailto:jiyunkimm0503@gmail.com" className="footer-contact-link">
                                    <Mail size={16} />
                                    <span>jiyunkimm0503@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/heartitude_ba" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                                    <Instagram size={16} />
                                    <span>instagram.com/heartitude_ba</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #1f2937', paddingTop: '1rem', textAlign: 'center', color: '#4b5563', fontSize: '0.82rem' }}>
                    <p>{t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

