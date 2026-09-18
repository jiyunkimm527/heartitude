import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import ThreePillars from '../components/ThreePillars';
import OurStory from '../components/OurStory';

const PARTNERS = [
    {
        name: 'Fundación Latidos',
        roleEn: 'Pediatric Cardiac Care',
        roleEs: 'Atención Cardíaca Pediátrica',
        logo: '/images/logo-latidos.png',
        height: '46px',
    },
    {
        name: 'Fundación Gabriel Lewis Galindo',
        roleEn: 'English Education',
        roleEs: 'Educación en Inglés',
        logo: '/images/logo-gabriel-lewis.webp',
        height: '42px',
    },
    {
        name: 'Universidad de Panamá',
        roleEn: 'Academic Co-Development',
        roleEs: 'Co-Desarrollo Académico',
        logo: '/images/logo-universidad-panama.png',
        height: '38px',
    },
    {
        name: 'Hospital del Niño',
        roleEn: 'Direct Care & Field Research',
        roleEs: 'Atención Directa e Investigación',
        logo: '/images/logo-hospital-nino.png',
        height: '40px',
    },
    {
        name: 'Balboa Academy',
        roleEn: 'Institutional Home',
        roleEs: 'Base Institucional',
        logo: '/images/balboa_logo.png',
        height: '42px',
    },
];

const Home = () => {
    const { t, i18n } = useTranslation();
    const isEs = i18n.language?.startsWith('es');

    return (
        <>
            {/* ── 1. Hero Section ── */}
            <PageHero
                isHome={true}
                tag={t('home.heroTag')}
                title={t('home.heroTitle')}
                subtitle={t('home.heroSubtitle')}
                slogan={t('home.heroSlogan')}
                imageSrc="/images/WebP_Image.webp"
                height="580px"
            >
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                    <Link
                        to="/programs"
                        style={{
                            fontSize: '0.94rem',
                            fontWeight: '700',
                            padding: '0.85rem 1.85rem',
                            borderRadius: '6px',
                            backgroundColor: '#e11d48',
                            color: '#ffffff',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            boxShadow: '0 4px 16px rgba(225, 29, 72, 0.35)',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = '#be123c';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = '#e11d48';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <span>{t('home.heroCtaExplore', 'Explore Our Programs')}</span>
                        <ArrowRight size={15} strokeWidth={2.5} />
                    </Link>

                    <Link
                        to="/get-involved"
                        style={{
                            fontSize: '0.94rem',
                            fontWeight: '700',
                            padding: '0.85rem 1.85rem',
                            borderRadius: '6px',
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            border: '1px solid rgba(255, 255, 255, 0.4)',
                            color: '#ffffff',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            backdropFilter: 'blur(6px)',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <span>{t('home.heroCtaVolunteer', 'Get Involved')}</span>
                    </Link>
                </div>
            </PageHero>

            {/* ── 2. Who We Are — Emotional Connection First ── */}
            <OurStory />

            {/* ── 3. Three Pillars (Learn · Heal · Grow) ── */}
            <ThreePillars />


            {/* ── 5. Institutional Collaborators Bar ── */}
            <section style={{
                backgroundColor: '#ffffff',
                borderBottom: '1px solid #e2e8f0',
                padding: '3.5rem 0',
            }}>
                <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 1.5rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <span style={{
                            display: 'inline-block',
                            fontSize: '0.72rem',
                            fontWeight: '700',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: '#64748b',
                            marginBottom: '0.35rem',
                        }}>
                            {t('home.partnersLabel', 'Institutional Partners & Collaborators')}
                        </span>
                        <p style={{
                            fontSize: '0.92rem',
                            color: '#64748b',
                            margin: 0,
                            maxWidth: '650px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}>
                            {t('home.partnersSubtitle', 'Working alongside healthcare, educational, and academic institutions across Panama')}
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
                        gap: '1.5rem',
                        alignItems: 'center',
                    }}>
                        {PARTNERS.map((p, idx) => (
                            <div
                                key={idx}
                                style={{
                                    backgroundColor: '#fafbfc',
                                    border: '1px solid #f1f5f9',
                                    borderRadius: '10px',
                                    padding: '1.25rem 1rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    minHeight: '120px',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.backgroundColor = '#ffffff';
                                    e.currentTarget.style.borderColor = '#cbd5e1';
                                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(15, 23, 42, 0.06)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.backgroundColor = '#fafbfc';
                                    e.currentTarget.style.borderColor = '#f1f5f9';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <div style={{ height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                                    <img
                                        src={p.logo}
                                        alt={p.name}
                                        style={{
                                            maxHeight: p.height,
                                            maxWidth: '140px',
                                            width: 'auto',
                                            objectFit: 'contain',
                                            filter: 'grayscale(20%)',
                                            opacity: 0.95,
                                            transition: 'filter 0.2s ease, opacity 0.2s ease',
                                        }}
                                    />
                                </div>
                                <span style={{
                                    fontSize: '0.78rem',
                                    fontWeight: '700',
                                    color: '#0f172a',
                                    lineHeight: 1.3,
                                    display: 'block',
                                    marginBottom: '0.2rem',
                                }}>
                                    {p.name}
                                </span>
                                <span style={{
                                    fontSize: '0.68rem',
                                    color: '#64748b',
                                    fontWeight: '600',
                                    lineHeight: 1.25,
                                }}>
                                    {isEs ? p.roleEs : p.roleEn}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </>
    );
};

export default Home;
