import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Mail, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <Section style={{ backgroundColor: '#f3f4f6', padding: '6rem 0' }}>
                <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 className="section-title">Contact Us</h1>
                    <p className="section-subtitle">
                        Have questions or want to get started? Reach out to us.
                    </p>
                </div>
            </Section>

            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    {/* Contact Info */}
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Get in Touch</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <a href="mailto:hello@heartitude.org" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', padding: '1rem', backgroundColor: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                                <Mail color="var(--color-primary)" />
                                <span>hello@heartitude.org</span>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', padding: '1rem', backgroundColor: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                                <Instagram color="#E1306C" />
                                <span>@heartitude.club</span>
                            </a>
                        </div>

                        <div style={{ marginTop: '3rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Privacy & Safety</h3>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
                                We prioritize the privacy of our students and volunteers. No patient-identifying photos or peronal data are shared. Our content is strictly educational support, not medical advice.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="card" style={{ padding: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Send a Message</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                                <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #d1d5db' }} placeholder="Your Name" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                                <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #d1d5db' }} placeholder="you@example.com" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                                <textarea rows="4" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #d1d5db', fontFamily: 'inherit' }} placeholder="How can we help?"></textarea>
                            </div>
                            <Button type="submit" variant="primary" style={{ marginTop: '1rem' }}>Send Message</Button>
                        </form>
                    </div>

                </div>
            </Section>
        </>
    );
};

export default Contact;
