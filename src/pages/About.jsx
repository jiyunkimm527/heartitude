import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import PageHero from '../components/PageHero';

const About = () => {
    const { t } = useTranslation();
    const location = useLocation();

    /* ── Scroll to hash anchor on load or hash change ── */
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    const navHeader = document.querySelector('header');
                    const navHeight = navHeader ? navHeader.getBoundingClientRect().height : 112;
                    const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 80);
        } else {
            window.scrollTo({ top: 0 });
        }
    }, [location.hash]);

    return (
        <div style={{ position: 'relative', backgroundColor: '#ffffff', minHeight: 'calc(100vh - 120px)' }}>
            <style>{`
                #who-we-are,
                #founder-story,
                #mission-vision {
                    scroll-margin-top: 112px;
                }
                .about-section {
                    max-width: 920px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }
                .about-overline {
                    font-size: 0.68rem;
                    font-weight: 700;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    color: #b45309;
                    margin-bottom: 0.6rem;
                }
                .about-heading {
                    font-family: var(--font-heading);
                    font-size: clamp(1.5rem, 2.5vw, 2rem);
                    font-weight: 700;
                    color: #1c1108;
                    letter-spacing: -0.02em;
                    line-height: 1.2;
                    margin-bottom: 0.5rem;
                }
                .about-sub {
                    font-size: 0.95rem;
                    color: #6b7280;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                }
                .about-divider {
                    width: 100%;
                    height: 1px;
                    background: #f0ede8;
                    margin: 0;
                }

                .founder-text {
                    font-size: 0.96rem;
                    color: #4b5563;
                    line-height: 1.85;
                    margin-bottom: 1.25rem;
                }

                /* ── Mission / Vision cards ── */
                .mv-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                }
                .mv-card {
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
                    min-height: 210px;
                    padding: 2.5rem 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-size: cover;
                    background-position: center;
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                }
                .mv-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 28px rgba(0,0,0,0.12);
                }
            `}</style>

            {/* ══════════════════════════════════════════════
                PageHero — matching Programs page layout
            ══════════════════════════════════════════════ */}
            <PageHero
                title={t('about.title')}
                subtitle={t('about.subtitle')}
                images={[
                    "/images/about/1.webp",
                    "/images/about/2.webp",
                    "/images/about/3.webp",
                    "/images/about/4.webp",
                ]}
                scrollImages={false}
                overlay="center"
                imagePosition="center 35%"
            />

            {/* ══════════════════════════════════════════════
                SECTION 1: Who We Are
            ══════════════════════════════════════════════ */}
            <div id="who-we-are" style={{ padding: '3.5rem 0 0' }}>
                <div className="about-section">
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.65rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '800', letterSpacing: '0.08em' }}>01</span>
                        <span style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>/</span>
                        <h2 style={{ fontSize: '1.65rem', fontWeight: '800', color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>{t('about.whoWeAreTitle', 'Who We Are')}</h2>
                    </div>
                    <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, maxWidth: '700px', margin: '0 0 1rem 0' }}>
                        {t('about.p1')}
                    </p>
                    <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, maxWidth: '700px', margin: 0 }}>
                        {t('about.p2')}
                    </p>
                    <div className="about-divider" style={{ marginTop: '3.5rem' }} />
                </div>
            </div>

            {/* ══════════════════════════════════════════════
                SECTION 2: Our Story
            ══════════════════════════════════════════════ */}
            <div id="founder-story" style={{ padding: '3.5rem 0 0' }}>
                <div className="about-section">
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.65rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '800', letterSpacing: '0.08em' }}>02</span>
                        <span style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>/</span>
                        <h2 style={{ fontSize: '1.65rem', fontWeight: '800', color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>{t('about.storyTitle', 'Our Story')}</h2>
                        <span style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: '600', marginLeft: '0.25rem' }}>— {t('about.founderTitle')}</span>
                    </div>

                    <p className="founder-text">{t('about.founderP1')}</p>
                    <p className="founder-text">{t('about.founderP2')}</p>
                    <p className="founder-text">{t('about.founderP3')}</p>
                    <p className="founder-text" style={{ marginBottom: 0 }}>{t('about.founderP4')}</p>
                    <div className="about-divider" style={{ marginTop: '3.5rem' }} />
                </div>
            </div>

            {/* ══════════════════════════════════════════════
                SECTION 3: Mission & Vision
            ══════════════════════════════════════════════ */}
            <div id="mission-vision" style={{ padding: '3.5rem 0 6rem' }}>
                <div className="about-section">
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.65rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '800', letterSpacing: '0.08em' }}>03</span>
                        <span style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>/</span>
                        <h2 style={{ fontSize: '1.65rem', fontWeight: '800', color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
                            {t('about.mvTitle', 'Mission & Vision')}
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem 4rem',
                    }}>
                        {/* Mission */}
                        <div>
                            <p style={{
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: '#64748b',
                                marginBottom: '1rem',
                            }}>
                                {t('about.missionTitle', 'Mission')}
                            </p>
                            <p style={{
                                fontSize: '1.15rem',
                                color: '#0f172a',
                                lineHeight: 1.75,
                                fontWeight: '500',
                                margin: 0,
                            }}>
                                {t('about.missionDesc')}
                            </p>
                        </div>

                        {/* Vision */}
                        <div>
                            <p style={{
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: '#64748b',
                                marginBottom: '1rem',
                            }}>
                                {t('about.visionTitle', 'Vision')}
                            </p>
                            <p style={{
                                fontSize: '1.15rem',
                                color: '#0f172a',
                                lineHeight: 1.75,
                                fontWeight: '500',
                                margin: 0,
                            }}>
                                {t('about.visionDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
