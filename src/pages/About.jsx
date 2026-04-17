import React from 'react';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <>
            <PageHero
                title={t('about.heroTitle')}
                subtitle={t('about.heroSubtitle')}
                imageSrc="/images/hero-about.jpg"
            />

            <Section>
                <div style={{ display: 'grid', gap: '4rem', maxWidth: '900px', margin: '0 auto' }}>
                    <div>
                        <h2 style={{ fontSize: 'var(--size-h2)', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--color-text-dark)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                            {t('about.missionTitle')}
                        </h2>
                        <p style={{ fontSize: 'var(--size-body-md)', lineHeight: '1.85', color: 'var(--color-text-body)', fontWeight: '400' }}>
                            {t('about.missionText1')}
                        </p>
                        <p style={{ fontSize: 'var(--size-body-md)', lineHeight: '1.85', color: 'var(--color-text-body)', fontWeight: '400', marginTop: '1.5rem' }}>
                            {t('about.missionText2')}
                        </p>
                        <p style={{ fontSize: 'var(--size-body-md)', lineHeight: '1.85', color: 'var(--color-text-body)', fontWeight: '400', marginTop: '1.5rem' }}>
                            {t('about.missionText3a')}
                        </p>
                        <p style={{ fontSize: 'var(--size-body-md)', lineHeight: '1.85', color: 'var(--color-text-body)', fontWeight: '400', marginTop: '1rem' }}>
                            {t('about.missionText3b')}
                        </p>

                    </div>

                    <div>
                        <h2 style={{ fontSize: 'var(--size-h2)', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--color-text-dark)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                            {t('about.whyTitle')}
                        </h2>
                        <p style={{ fontSize: 'var(--size-body-md)', lineHeight: '1.85', color: 'var(--color-text-body)' }}>
                            {t('about.whyText')}
                        </p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: 'var(--size-h2)', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--color-text-dark)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                            {t('about.valuesTitle')}
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                            {['accessibility', 'consistency', 'empathy'].map((key) => (
                                <div key={key} style={{ padding: '1.5rem', backgroundColor: '#fafafa', borderRadius: 'var(--radius-md)', borderTop: '3px solid var(--color-amber)' }}>
                                    <h3 style={{ fontSize: 'var(--size-h4)', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-text-dark)' }}>
                                        {t(`about.values.${key}.title`)}
                                    </h3>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--size-body)', lineHeight: 1.7 }}>
                                        {t(`about.values.${key}.desc`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default About;
