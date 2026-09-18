import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer style={{
            backgroundColor: '#381e11',
            color: '#ffffff',
            paddingTop: '3.5rem',
            paddingBottom: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
            <style>{`
                .footer-link {
                    color: #d9cbbe;
                    text-decoration: none;
                    font-size: 0.88rem;
                    font-weight: 500;
                    transition: color 0.2s;
                    display: inline-block;
                }
                .footer-link:hover {
                    color: #fbbf24;
                }
                .footer-contact-link {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    color: #d9cbbe;
                    text-decoration: none;
                    font-size: 0.88rem;
                    font-weight: 500;
                    transition: color 0.2s;
                }
                .footer-contact-link:hover {
                    color: #fbbf24;
                }
            `}</style>
            <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 1.5rem' }}>
                <div className="footer-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '2.5rem',
                    marginBottom: '2.5rem'
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{ marginBottom: '1.25rem' }}>
                            <img src="/images/logo.png" alt="Heartitude Logo" style={{ height: '56px', width: 'auto', display: 'block' }} />
                        </div>
                        <p style={{ fontSize: '0.85rem', color: '#c4b3a3', lineHeight: 1.6, maxWidth: '280px', margin: 0 }}>
                            {t('home.taglineSub', 'Warmth in heart. Consistency in action.')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <p style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fcd34d', marginBottom: '1rem' }}>
                            Navigation
                        </p>
                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem 1.5rem' }}>
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
                        <p style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fcd34d', marginBottom: '1rem' }}>
                            Contact
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                            <li>
                                <a href="mailto:jiyunkimm0503@gmail.com" className="footer-contact-link">
                                    <Mail size={15} color="#fcd34d" />
                                    <span>jiyunkimm0503@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/heartitude_ba" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                                    <Instagram size={15} color="#fcd34d" />
                                    <span>instagram.com/heartitude_ba</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem', textAlign: 'center', color: '#b09f90', fontSize: '0.82rem' }}>
                    <p style={{ margin: 0 }}>{t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
