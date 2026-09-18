import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const OurStory = () => {
    const { t } = useTranslation();

    return (
        <section style={{
            backgroundColor: '#ffffff',
            padding: '5.5rem 0',
            borderTop: '1px solid #e2e8f0',
        }}>
            <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 1.5rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3.5rem',
                    alignItems: 'center',
                }}>
                    {/* Left Column: Story & Mission Hook */}
                    <div>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            marginBottom: '0.65rem',
                        }}>
                            <span style={{
                                fontSize: '0.72rem',
                                fontWeight: '700',
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                                color: '#b45309',
                            }}>
                                {t('home.storyTeaserOverline', 'Who We Are')}
                            </span>
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(1.85rem, 3.2vw, 2.35rem)',
                            fontWeight: '800',
                            color: '#0f172a',
                            margin: '0 0 1.5rem 0',
                            letterSpacing: '-0.02em',
                            fontFamily: 'var(--font-heading)',
                            lineHeight: 1.2,
                        }}>
                            {t('home.storyTeaserTitle', 'Why We Started Heartitude')}
                        </h2>

                        {/* Quote Box */}
                        <blockquote style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.25rem',
                            fontStyle: 'italic',
                            fontWeight: '400',
                            color: '#1e293b',
                            lineHeight: 1.55,
                            borderLeft: '3px solid #b45309',
                            paddingLeft: '1.25rem',
                            margin: '0 0 1.5rem 0',
                        }}>
                            "{t('home.storyTeaserQuote')}"
                        </blockquote>

                        <p style={{
                            fontSize: '0.96rem',
                            color: '#475569',
                            lineHeight: 1.8,
                            marginBottom: '2rem',
                        }}>
                            {t('home.storyTeaserText')}
                        </p>

                        <div>
                            <Link
                                to="/about"
                                style={{
                                    fontSize: '0.92rem',
                                    fontWeight: '700',
                                    color: '#ffffff',
                                    backgroundColor: '#0f172a',
                                    padding: '0.8rem 1.6rem',
                                    borderRadius: '6px',
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    transition: 'all 0.2s ease',
                                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.12)',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.backgroundColor = '#1e293b';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.backgroundColor = '#0f172a';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <span>{t('home.storyTeaserLink', 'Read Our Story & Mission →')}</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Visual Feature Card */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px -12px rgba(15, 23, 42, 0.15)',
                            position: 'relative',
                            maxWidth: '420px',
                            width: '100%',
                        }}>
                            <img
                                src="/images/gallery/face_painting_hero.jpg"
                                alt="Heartitude volunteer face painting with a child in Panama"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
