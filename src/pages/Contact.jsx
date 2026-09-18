import React, { useState } from 'react';
import Section from '../components/Section';
import { Mail, Instagram, CheckCircle, AlertCircle, ExternalLink, QrCode } from 'lucide-react';
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
            <Section style={{ paddingTop: '3rem', paddingBottom: '5.5rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3.5rem',
                    alignItems: 'start'
                }}>

                    {/* ── Left Column: Contact Information ── */}
                    <div>
                        <h2 style={{
                            fontSize: '1.5rem',
                            fontWeight: '800',
                            margin: '0 0 1.5rem 0',
                            color: 'var(--color-text-dark)',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.2,
                        }}>
                            {t('contact.infoTitle', 'Contact Information')}
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {/* Email Card */}
                            <div
                                className="email-card"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '1.25rem 1.5rem',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '10px',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                <div>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        color: '#64748b',
                                        marginBottom: '0.4rem',
                                    }}>
                                        Email
                                    </div>
                                    <a
                                        href={`mailto:${CONTACT_EMAIL}`}
                                        className="contact-link"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '1.02rem',
                                            fontWeight: '600',
                                            color: '#0f172a',
                                            textDecoration: 'none',
                                            marginBottom: '0.35rem',
                                        }}
                                    >
                                        <Mail color="#2563eb" size={18} />
                                        <span>{CONTACT_EMAIL}</span>
                                        <ExternalLink size={14} color="#64748b" />
                                    </a>
                                    <div style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>
                                        Direct inquiries & partnerships
                                    </div>
                                </div>
                            </div>

                            {/* Instagram Card with Integrated QR Code */}
                            <div
                                className="instagram-card"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '1.25rem 1.5rem',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '10px',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                                    gap: '1.25rem',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                <div>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        color: '#64748b',
                                        marginBottom: '0.4rem',
                                    }}>
                                        Instagram
                                    </div>
                                    <a
                                        href="https://instagram.com/heartitude_ba"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-link"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '1.05rem',
                                            fontWeight: '600',
                                            color: '#0f172a',
                                            textDecoration: 'none',
                                            marginBottom: '0.35rem',
                                        }}
                                    >
                                        <Instagram color="#E1306C" size={18} />
                                        <span>@heartitude_ba</span>
                                        <ExternalLink size={14} color="#64748b" />
                                    </a>
                                    <div style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>
                                        Scan QR code or click handle
                                    </div>
                                </div>

                                {/* QR Code Thumbnail */}
                                <a
                                    href="https://instagram.com/heartitude_ba"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Scan QR or click to open @heartitude_ba"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                        flexShrink: 0,
                                        gap: '0.3rem',
                                    }}
                                >
                                    <img
                                        src="/images/instagram-qr.png"
                                        alt="Instagram QR Code"
                                        style={{
                                            width: '110px',
                                            height: '110px',
                                            display: 'block',
                                            borderRadius: '6px',
                                            border: '1px solid #e2e8f0',
                                            backgroundColor: '#ffffff',
                                            padding: '4px',
                                            boxSizing: 'border-box',
                                        }}
                                    />
                                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: '500' }}>
                                        Scan to open
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ── Right Column: Form ── */}
                    <div>
                        <h2 style={{
                            fontSize: '1.5rem',
                            fontWeight: '800',
                            margin: '0 0 1.5rem 0',
                            color: 'var(--color-text-dark)',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.2,
                        }}>
                            {t('contact.formTitle', 'Send a Message')}
                        </h2>

                        <div className="card" style={{ padding: '2rem' }}>
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

                </div>
            </Section>

            <style>{`
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                input:focus, textarea:focus { border-color: var(--color-primary) !important; box-shadow: 0 0 0 3px rgba(99,102,241,0.15); }
                .email-card:hover {
                    border-color: #93c5fd !important;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.08) !important;
                }
                .instagram-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 16px rgba(225, 48, 108, 0.22) !important;
                    filter: brightness(1.02);
                }
                .instagram-card:hover {
                    border-color: #f472b6 !important;
                    box-shadow: 0 6px 20px rgba(225, 48, 108, 0.09) !important;
                }
            `}</style>
        </>
    );
};

export default Contact;
