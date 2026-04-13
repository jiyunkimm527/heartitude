import React from 'react';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import StoryMapSection from '../components/StoryMapSection';
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
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                            {t('about.missionTitle')}
                        </h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)', fontWeight: '400' }}>
                            {t('about.missionText1')}
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)', fontWeight: '400', marginTop: '1rem' }}>
                            {t('about.missionText2')}
                        </p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: '1rem', fontStyle: 'italic' }}>
                            {t('about.missionDisclaimer')}
                        </p>
                    </div>

                    <StoryMapSection />

                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                            {t('about.whyTitle')}
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                            {t('about.whyText')}
                        </p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                            {t('about.valuesTitle')}
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            {['accessibility', 'consistency', 'empathy'].map((key) => (
                                <div key={key} style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: 'var(--radius-md)' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                        {t(`about.values.${key}.title`)}
                                    </h3>
                                    <p style={{ color: 'var(--color-text-light)' }}>
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
