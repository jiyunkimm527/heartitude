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
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1c1108' }}>
                            {t('about.missionTitle')}
                        </h2>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#374151', fontWeight: '400' }}>
                            {t('about.missionText1')}
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#374151', fontWeight: '400', marginTop: '1.5rem' }}>
                            {t('about.missionText2')}
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#374151', fontWeight: '400', marginTop: '1.5rem' }}>
                            {t('about.missionText3a')}
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#374151', fontWeight: '400', marginTop: '1rem' }}>
                            {t('about.missionText3b')}
                        </p>

                    </div>

                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1c1108' }}>
                            {t('about.whyTitle')}
                        </h2>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#374151' }}>
                            {t('about.whyText')}
                        </p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1c1108' }}>
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
