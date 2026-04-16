import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { useTranslation } from 'react-i18next';

const TRACK_CONFIG = [
    {
        num: 2,
        color: '#e11d48',
        bgLight: '#fff1f2',
        titleKey: 'home.track1Title',
        subKey: 'home.track1Sub',
        stepsKey: 'home.track1Steps',
        label: 'Track 01',
    },
    {
        num: 2,
        color: '#4f46e5',
        bgLight: '#eef2ff',
        titleKey: 'home.track2Title',
        subKey: 'home.track2Sub',
        stepsKey: 'home.track2Steps',
        label: 'Track 02',
    },
];

const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* Hero Section */}
            <PageHero
                title={t('home.heroTitle')}
                subtitle={t('home.heroSubtitle')}
                imageSrc="/images/WebP_Image.webp"
                height="540px"
            >
                <Button to="/get-involved" className="btn-primary" style={{ fontSize: '1rem', padding: '0.85rem 2rem', borderRadius: '8px' }}>
                    {t('home.volunteerBtn')}
                </Button>
                <Button to="/contact" className="btn-outline" style={{ fontSize: '1rem', padding: '0.85rem 2rem', borderRadius: '8px' }}>
                    {t('home.partnerBtn')}
                </Button>
            </PageHero>

            {/* Statement Banner */}
            <div style={{
                background: '#2d1b0e',
                padding: '2.5rem 0',
                textAlign: 'center',
            }}>
                <div className="container">
                    <p style={{
                        fontSize: '1.15rem',
                        fontWeight: '500',
                        color: 'rgba(255,255,255,0.88)',
                        letterSpacing: '0.01em',
                        lineHeight: 1.7,
                        maxWidth: '720px',
                        margin: '0 auto',
                    }}>
                        {t('home.bannerText')}
                    </p>
                </div>
            </div>

            {/* A Path Forward */}
            <Section style={{ backgroundColor: '#f8fafc', padding: '6rem 0' }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{
                        display: 'inline-block',
                        fontSize: '0.72rem', fontWeight: '700',
                        letterSpacing: '0.14em', textTransform: 'uppercase',
                        color: '#4f46e5', marginBottom: '0.85rem',
                        padding: '0.3rem 1rem',
                        background: '#eef2ff',
                        borderRadius: '999px',
                    }}>Framework</span>
                    <h2 className="section-title">{t('home.pathTitle')}</h2>
                    <p className="section-subtitle">{t('home.pathSubtitle')}</p>
                </div>

                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>



                    {/* Track 1 */}
                    <div style={{ marginBottom: '5rem' }}>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '1rem',
                            marginBottom: '2rem', paddingBottom: '1.25rem',
                            borderBottom: '1px solid #fde68a',
                        }}>
                            <span style={{
                                backgroundColor: '#1c1108', color: 'white',
                                borderRadius: '6px', padding: '0.2rem 0.7rem',
                                fontSize: '0.68rem', fontWeight: '800', letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                            }}>Track 01</span>
                            <div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#1c1108', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                                    {t('home.track1Title')}
                                </h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', marginTop: '0.2rem' }}>
                                    {t('home.track1Sub')}
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                            {[1, 2, 3, 4].map((num) => (
                                <div key={num} style={{
                                    backgroundColor: 'white',
                                    borderRadius: '12px',
                                    padding: '1.6rem 1.5rem',
                                    borderLeft: '3px solid #fde68a',
                                    boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
                                    transition: 'box-shadow 0.2s, transform 0.2s',
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(180,83,9,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 6px rgba(0,0,0,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                >
                                    <div style={{
                                        width: '26px', height: '26px', borderRadius: '50%',
                                        backgroundColor: '#fef3c7', color: '#b45309',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '0.75rem', fontWeight: '800',
                                        marginBottom: '0.9rem',
                                    }}>{num}</div>
                                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.45rem', color: '#1c1108', lineHeight: 1.3 }}>
                                        {t(`home.track1Steps.${num}.title`)}
                                    </h4>
                                    <p style={{ color: 'var(--color-text-light)', fontSize: '0.85rem', lineHeight: '1.65' }}>
                                        {t(`home.track1Steps.${num}.desc`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Track 2 */}
                    <div>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '1rem',
                            marginBottom: '2rem', paddingBottom: '1.25rem',
                            borderBottom: '1px solid #e5e7eb',
                        }}>
                            <span style={{
                                backgroundColor: '#374151', color: 'white',
                                borderRadius: '6px', padding: '0.2rem 0.7rem',
                                fontSize: '0.68rem', fontWeight: '800', letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                            }}>Track 02</span>
                            <div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#1c1108', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                                    {t('home.track2Title')}
                                </h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', marginTop: '0.2rem' }}>
                                    {t('home.track2Sub')}
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                            {[1, 2, 3, 4].map((num) => (
                                <div key={num} style={{
                                    backgroundColor: 'white',
                                    borderRadius: '12px',
                                    padding: '1.6rem 1.5rem',
                                    borderLeft: '3px solid #1c1108',
                                    boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
                                    transition: 'box-shadow 0.2s, transform 0.2s',
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(28,17,8,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 6px rgba(0,0,0,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                >
                                    <div style={{
                                        width: '26px', height: '26px', borderRadius: '50%',
                                        backgroundColor: '#f3f4f6', color: '#374151',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '0.75rem', fontWeight: '800',
                                        marginBottom: '0.9rem',
                                    }}>{num}</div>
                                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.45rem', color: '#1c1108', lineHeight: 1.3 }}>
                                        {t(`home.track2Steps.${num}.title`)}
                                    </h4>
                                    <p style={{ color: 'var(--color-text-light)', fontSize: '0.85rem', lineHeight: '1.65' }}>
                                        {t(`home.track2Steps.${num}.desc`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </Section>

            {/* Image Tiles: Mission & Get Involved */}
            <Section style={{ paddingTop: 0 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {/* Mission Tile */}
                    <Link to="/about" style={{ display: 'block', position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', color: 'white', backgroundColor: '#1e3a5f' }}>
                        <div style={{ padding: '2rem 2.5rem' }}>
                            <p style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(165,180,252,0.9)', marginBottom: '0.5rem' }}>Mission</p>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.4rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                                {t('home.missionTileTitle')}
                            </h2>
                            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.75, lineHeight: 1.5 }}>
                                {t('home.missionTileDesc')}
                            </p>
                            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'rgba(165,180,252,1)' }}>{t('home.missionTileLink')}</span>
                        </div>
                    </Link>

                    {/* Get Involved Tile */}
                    <Link to="/get-involved" style={{ display: 'block', position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', color: 'white', backgroundColor: '#1e293b' }}>
                        <div style={{ padding: '2rem 2.5rem' }}>
                            <p style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(252,211,77,0.9)', marginBottom: '0.5rem' }}>Join Us</p>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.4rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                                {t('home.involvedTileTitle')}
                            </h2>
                            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.75, lineHeight: 1.5 }}>
                                {t('home.involvedTileDesc')}
                            </p>
                            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'rgba(252,211,77,1)' }}>{t('home.involvedTileLink')}</span>
                        </div>
                    </Link>
                </div>
            </Section>
        </>
    );
};

export default Home;
