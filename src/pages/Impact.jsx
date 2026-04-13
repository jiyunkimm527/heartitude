import React from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import StoryMapSection from '../components/StoryMapSection';
import { useTranslation } from 'react-i18next';

const Impact = () => {
    const { t } = useTranslation();

    return (
        <>
            <PageHero
                title={t('impact.heroTitle')}
                subtitle={t('impact.heroSubtitle')}
                imageSrc="/images/hero-impact.jpg"
            />
            <StoryMapSection />
            <Section>
                <div style={{ textAlign: 'center', padding: '4rem 0', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                    <h2 style={{ marginBottom: '1rem', color: 'var(--color-text-light)' }}>
                        {t('impact.comingSoonTitle')}
                    </h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-light)' }}>
                        {t('impact.comingSoonText')}
                    </p>
                </div>
            </Section>
        </>
    );
};

export default Impact;
