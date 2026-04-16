import React from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { useTranslation } from 'react-i18next';

const Programs = () => {
    const { t } = useTranslation();

    return (
        <>
            <PageHero
                title={t('programs.heroTitle')}
                subtitle={t('programs.heroSubtitle')}
                imageSrc="/images/hero-programs.jpg"
            />
            <Section>
                {/* Editorial 2-column grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1px 1fr',
                    gap: '0 5rem',
                    alignItems: 'start',
                }}>

                    {/* ── Track 01 ── */}
                    <div>
                        <p style={{
                            fontSize: '0.72rem',
                            fontWeight: '700',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: '#9ca3af',
                            marginBottom: '1.25rem',
                        }}>01</p>

                        <h2 style={{
                            fontSize: '1.75rem',
                            fontWeight: '800',
                            color: '#1c1108',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.2,
                            marginBottom: '2rem',
                        }}>
                            {t('programs.track1Title')}
                        </h2>

                        {/* Subjects */}
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                            <li style={{ display: 'flex', flexDirection: 'column', paddingLeft: '1rem', borderLeft: '2px solid #fde68a' }}>
                                <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1c1108' }}>
                                    {t('programs.track1English')}
                                </span>
                                <span style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.2rem' }}>
                                    {t('programs.track1EnglishSchedule')}
                                </span>
                            </li>
                            <li style={{ display: 'flex', flexDirection: 'column', paddingLeft: '1rem', borderLeft: '2px solid #fde68a' }}>
                                <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1c1108' }}>
                                    {t('programs.track1Math')}
                                </span>
                                <span style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.2rem' }}>
                                    {t('programs.track1MathSchedule')}
                                </span>
                            </li>
                        </ul>

                        <p style={{ fontSize: '0.925rem', color: '#374151', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                            {t('programs.track1Materials')}
                        </p>

                        {/* Health Record Booklet */}
                        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem' }}>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <span style={{ fontSize: '0.875rem', fontWeight: '700', color: '#1c1108' }}>
                                    {t('programs.track1HealthTitle')}
                                </span>
                            </div>
                            <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.7 }}>
                                {t('programs.track1HealthDesc')}
                            </p>
                        </div>
                    </div>

                    {/* ── Divider ── */}
                    <div style={{ backgroundColor: '#e5e7eb', height: '100%', minHeight: '400px' }} />

                    {/* ── Track 02 ── */}
                    <div>
                        <p style={{
                            fontSize: '0.72rem',
                            fontWeight: '700',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: '#9ca3af',
                            marginBottom: '1.25rem',
                        }}>02</p>

                        <h2 style={{
                            fontSize: '1.75rem',
                            fontWeight: '800',
                            color: '#1c1108',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.2,
                            marginBottom: '0.75rem',
                        }}>
                            {t('programs.track2Title')}
                        </h2>

                        <span style={{
                            display: 'inline-block',
                            fontSize: '0.7rem',
                            fontWeight: '700',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#6b7280',
                            backgroundColor: '#f3f4f6',
                            padding: '0.25rem 0.6rem',
                            borderRadius: '4px',
                            marginBottom: '2rem',
                        }}>
                            {t('programs.track2Badge')}
                        </span>

                        <p style={{
                            fontSize: '1rem',
                            fontWeight: '700',
                            color: '#1c1108',
                            lineHeight: 1.5,
                            marginBottom: '1.25rem',
                            paddingLeft: '1rem',
                            borderLeft: '2px solid #fde68a',
                        }}>
                            {t('programs.track2Premise')}
                        </p>

                        <p style={{ fontSize: '0.925rem', color: '#374151', lineHeight: 1.75 }}>
                            {t('programs.track2Desc')}
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Programs;
