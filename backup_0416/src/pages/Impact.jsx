import React from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { useTranslation } from 'react-i18next';

const Impact = () => {
    const { t } = useTranslation();
    const principles = t('impact.principles', { returnObjects: true });
    const activities = t('impact.activities', { returnObjects: true });

    return (
        <>
            <PageHero
                title={t('impact.heroTitle')}
                subtitle={t('impact.heroSubtitle')}
                imageSrc="/images/hero-impact.jpg"
            />

            {/* ── Section 1: Principles ── */}
            <Section style={{ backgroundColor: '#faf9f7' }}>
                <div style={{ maxWidth: '860px', margin: '0 auto' }}>

                    <p style={{
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#9ca3af',
                        marginBottom: '1rem',
                    }}>
                        {t('impact.principlesTitle')}
                    </p>

                    <p style={{
                        fontSize: '1.05rem',
                        color: '#374151',
                        lineHeight: 1.75,
                        marginBottom: '3rem',
                        maxWidth: '620px',
                    }}>
                        {t('impact.principlesIntro')}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {Array.isArray(principles) && principles.map((p, i) => (
                            <div key={i} style={{
                                display: 'grid',
                                gridTemplateColumns: '2px 1fr',
                                gap: '0 2rem',
                                alignItems: 'start',
                            }}>
                                {/* Amber line */}
                                <div style={{ backgroundColor: '#fde68a', height: '100%', minHeight: '60px' }} />

                                <div>
                                    <p style={{
                                        fontSize: '1.05rem',
                                        fontStyle: 'italic',
                                        color: '#1c1108',
                                        lineHeight: 1.7,
                                        marginBottom: '0.5rem',
                                    }}>
                                        "{p.quote}"
                                    </p>
                                    <p style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        color: '#9ca3af',
                                        letterSpacing: '0.06em',
                                        textTransform: 'uppercase',
                                        marginBottom: '0.5rem',
                                    }}>
                                        — {p.source}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.65 }}>
                                        {p.note}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ── Divider ── */}
            <div style={{ borderTop: '1px solid #e5e7eb', maxWidth: '860px', margin: '0 auto' }} />

            {/* ── Section 2: Activities Timeline ── */}
            <Section>
                <div style={{ maxWidth: '860px', margin: '0 auto' }}>

                    <p style={{
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#9ca3af',
                        marginBottom: '1rem',
                    }}>
                        {t('impact.activitiesTitle')}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {Array.isArray(activities) && activities.map((a, i) => (
                            <div key={i} style={{
                                display: 'grid',
                                gridTemplateColumns: '140px 1px 1fr',
                                gap: '0 2.5rem',
                                paddingBottom: '2.5rem',
                            }}>
                                {/* Date */}
                                <div style={{ textAlign: 'right', paddingTop: '0.15rem' }}>
                                    <span style={{
                                        fontSize: '0.8rem',
                                        fontWeight: '700',
                                        color: a.status === 'pending' ? '#9ca3af' : '#b45309',
                                    }}>
                                        {a.date}
                                    </span>
                                </div>

                                {/* Timeline line + dot */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        backgroundColor: a.status === 'pending' ? '#e5e7eb' : '#1c1108',
                                        border: a.status === 'pending' ? '2px solid #d1d5db' : 'none',
                                        flexShrink: 0,
                                        marginTop: '0.25rem',
                                    }} />
                                    {i < activities.length - 1 && (
                                        <div style={{
                                            flex: 1,
                                            width: '1px',
                                            backgroundColor: a.status === 'pending' ? '#e5e7eb' : '#d1d5db',
                                            marginTop: '0.5rem',
                                        }} />
                                    )}
                                </div>

                                {/* Content */}
                                <div style={{ paddingBottom: '0.5rem' }}>
                                    <h3 style={{
                                        fontSize: '1rem',
                                        fontWeight: '700',
                                        color: a.status === 'pending' ? '#9ca3af' : '#1c1108',
                                        marginBottom: '0.4rem',
                                    }}>
                                        {a.title}
                                        {a.status === 'pending' && (
                                            <span style={{
                                                marginLeft: '0.6rem',
                                                fontSize: '0.65rem',
                                                fontWeight: '700',
                                                letterSpacing: '0.08em',
                                                textTransform: 'uppercase',
                                                color: '#9ca3af',
                                                backgroundColor: '#f3f4f6',
                                                padding: '0.15rem 0.4rem',
                                                borderRadius: '4px',
                                                verticalAlign: 'middle',
                                            }}>
                                                In Preparation
                                            </span>
                                        )}
                                    </h3>
                                    <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.65 }}>
                                        {a.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Impact;
