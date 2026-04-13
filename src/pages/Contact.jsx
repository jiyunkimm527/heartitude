import React, { useState } from 'react';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import { Mail, Instagram, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CONTACT_EMAIL = 'jiyunkimm0503@gmail.com';

const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid #d1d5db',
    fontFamily: 'inherit',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
};

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(formData.subject || 'Heartitude Contact Form');
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        );

        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <>
            <PageHero
                title={t('contact.heroTitle')}
                subtitle={t('contact.heroSubtitle')}
                imageSrc="/images/hero-contact.jpg"
            />

            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    {/* Contact Info */}
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                            {t('contact.infoTitle')}
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <a
                                href="mailto:jiyunkimm0503@gmail.com"
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', padding: '1rem', backgroundColor: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', textDecoration: 'none', color: 'inherit', transition: 'box-shadow 0.2s' }}
                            >
                                <Mail color="var(--color-primary)" />
                                <span>jiyunkimm0503@gmail.com</span>
                            </a>
                            <a
                                href="https://instagram.com/heartitude_ba"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', padding: '1rem', backgroundColor: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', textDecoration: 'none', color: 'inherit', transition: 'box-shadow 0.2s' }}
                            >
                                <Instagram color="#E1306C" />
                                <span>instagram.com/heartitude_ba</span>
                            </a>
                        </div>

                        <div style={{ marginTop: '2rem', padding: '1.25rem', backgroundColor: '#f0fdf4', borderRadius: 'var(--radius-md)', border: '1px solid #bbf7d0' }}>
                            <p style={{ color: '#166534', fontSize: '0.9rem', margin: 0 }}>
                                📬 {t('contact.infoResponse')}
                            </p>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Privacy &amp; Safety</h3>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                We prioritize the privacy of our students and volunteers. No patient-identifying photos or personal data are shared. Our content is strictly educational support, not medical advice.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="card" style={{ padding: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                            {t('contact.formBtn') === 'Enviar mensaje' ? 'Enviar un mensaje' : 'Send a Message'}
                        </h2>

                        {/* 성공 메시지 */}
                        {status === 'success' && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
                                <CheckCircle color="#16a34a" size={20} />
                                <p style={{ color: '#166534', margin: 0, fontWeight: '500' }}>{t('contact.formSuccess')}</p>
                            </div>
                        )}

                        {/* 에러 메시지 */}
                        {status === 'error' && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
                                <AlertCircle color="#dc2626" size={20} />
                                <p style={{ color: '#991b1b', margin: 0, fontWeight: '500' }}>
                                    Something went wrong. Please try again or email us directly.
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.95rem' }}>
                                    {t('contact.formName')} <span style={{ color: '#ef4444' }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={inputStyle}
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.95rem' }}>
                                    {t('contact.formEmail')} <span style={{ color: '#ef4444' }}>*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={inputStyle}
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.95rem' }}>
                                    {t('contact.formSubject')}
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    style={inputStyle}
                                    placeholder="What is this about?"
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.95rem' }}>
                                    {t('contact.formMessage')} <span style={{ color: '#ef4444' }}>*</span>
                                </label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    style={{ ...inputStyle, resize: 'vertical' }}
                                    placeholder="How can we help?"
                                />
                            </div>
                            <button
                                type="submit"
                                style={{
                                    marginTop: '0.5rem',
                                    padding: '0.85rem 2rem',
                                    backgroundColor: 'var(--color-primary)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s',
                                    width: '100%',
                                }}
                            >
                                {t('contact.formBtn')}
                            </button>
                        </form>
                    </div>

                </div>
            </Section>

            <style>{`
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                input:focus, textarea:focus { border-color: var(--color-primary) !important; box-shadow: 0 0 0 3px rgba(99,102,241,0.15); }
            `}</style>
        </>
    );
};

export default Contact;
