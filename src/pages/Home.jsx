import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* Hero Section */}
            <PageHero
                title={t('home.heroTitle')}
                subtitle={t('home.heroSubtitle')}
            imageSrc="/images/WebP_Image.webp"
                height="520px"
            >
                <Button to="/get-involved" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                    {t('home.volunteerBtn')}
                </Button>
                <Button to="/contact" className="btn-outline" style={{
                    fontSize: '1.1rem',
                    padding: '1rem 2rem',
                    borderColor: 'white',
                    color: 'white'
                }}>
                    {t('home.partnerBtn')}
                </Button>
            </PageHero>

            {/* Light Blue Band */}
            <div style={{
                backgroundColor: 'var(--color-nap-blue)',
                padding: '3rem 0',
                textAlign: 'center',
                color: '#111827'
            }}>
                <div className="container">
                    <p style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        fontFamily: 'var(--font-heading)'
                    }}>
                        {t('home.bannerText')}
                    </p>
                </div>
            </div>

            {/* A Path Forward */}
            <Section>
                <div className="text-center mb-12" style={{ marginBottom: '3rem' }}>
                    <h2 className="section-title">{t('home.pathTitle')}</h2>
                    <p className="section-subtitle">{t('home.pathSubtitle')}</p>
                </div>

                <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* BioRhythm Tools Ribbon */}
                    <div style={{
                        backgroundColor: '#f3f4f6',
                        borderRadius: 'var(--radius-md)',
                        padding: '1.5rem',
                        textAlign: 'center',
                        marginBottom: '4rem',
                        boxShadow: 'var(--shadow-sm)',
                        border: '1px solid #e5e7eb'
                    }}>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: '#374151', marginBottom: '0.5rem' }}>
                            {t('home.bioRhythmLabel')}
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: '#4b5563' }}>
                            {t('home.bioRhythmSub')}
                        </p>
                    </div>

                    {/* Track 1: School Learning Support */}
                    <div style={{ marginBottom: '4rem' }}>
                        <div style={{ marginBottom: '2rem', textAlign: 'left', borderLeft: '5px solid var(--color-red-program)', paddingLeft: '1rem' }}>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
                                {t('home.track1Title')}
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                                {t('home.track1Sub')}
                            </p>
                        </div>

                        <div style={{ position: 'relative', padding: '1rem 0' }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '2rem',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {[1, 2, 3, 4].map((num) => (
                                    <div key={num} style={{ textAlign: 'center' }}>
                                        <div style={{
                                            width: '60px', height: '60px', borderRadius: '50%',
                                            backgroundColor: 'var(--color-red-program)', color: 'white',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '1.5rem', fontWeight: 'bold',
                                            margin: '0 auto 1.5rem auto',
                                            border: '4px solid white', boxShadow: 'var(--shadow-md)'
                                        }}>
                                            {num}
                                        </div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                                            {t(`home.track1Steps.${num}.title`)}
                                        </h4>
                                        <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                                            {t(`home.track1Steps.${num}.desc`)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Track 2: Care-Space Learning Support */}
                    <div>
                        <div style={{ marginBottom: '2rem', textAlign: 'left', borderLeft: '5px solid var(--color-nap-blue)', paddingLeft: '1rem' }}>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
                                {t('home.track2Title')}
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                                {t('home.track2Sub')}
                            </p>
                            <p style={{ fontSize: '0.85rem', color: '#6b7280', fontStyle: 'italic', marginTop: '0.25rem' }}>
                                {t('home.track2Disclaimer')}
                            </p>
                        </div>

                        <div style={{ position: 'relative', padding: '1rem 0' }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '2rem',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {[1, 2, 3, 4].map((num) => (
                                    <div key={num} style={{ textAlign: 'center' }}>
                                        <div style={{
                                            width: '60px', height: '60px', borderRadius: '50%',
                                            backgroundColor: 'var(--color-nap-blue)', color: 'white',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '1.5rem', fontWeight: 'bold',
                                            margin: '0 auto 1.5rem auto',
                                            border: '4px solid white', boxShadow: 'var(--shadow-md)'
                                        }}>
                                            {num}
                                        </div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                                            {t(`home.track2Steps.${num}.title`)}
                                        </h4>
                                        <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                                            {t(`home.track2Steps.${num}.desc`)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </Section>

            {/* Image Tiles: Mission & Get Involved */}
            <Section style={{ paddingTop: 0 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {/* Mission Tile */}
                    <Link to="/about" style={{ display: 'block', position: 'relative', height: '250px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', color: 'white' }}>
                        <div style={{
                            position: 'absolute', inset: 0,
                            backgroundImage: 'url(/images/tile-mission.jpg)',
                            backgroundSize: 'cover', backgroundPosition: 'center',
                            backgroundColor: '#374151'
                        }}></div>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2.5rem' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                                {t('home.missionTileTitle')}
                            </h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1rem', opacity: 0.9 }}>
                                {t('home.missionTileDesc')}
                            </p>
                            <span style={{ textDecoration: 'underline', fontWeight: '600' }}>{t('home.missionTileLink')}</span>
                        </div>
                    </Link>

                    {/* Get Involved Tile */}
                    <Link to="/get-involved" style={{ display: 'block', position: 'relative', height: '250px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', color: 'white' }}>
                        <div style={{
                            position: 'absolute', inset: 0,
                            backgroundImage: 'url(/images/tile-involved.jpg)',
                            backgroundSize: 'cover', backgroundPosition: 'center',
                            backgroundColor: '#1f2937'
                        }}></div>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2.5rem' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                                {t('home.involvedTileTitle')}
                            </h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1rem', opacity: 0.9 }}>
                                {t('home.involvedTileDesc')}
                            </p>
                            <span style={{ textDecoration: 'underline', fontWeight: '600' }}>{t('home.involvedTileLink')}</span>
                        </div>
                    </Link>
                </div>
            </Section>
        </>
    );
};

export default Home;
