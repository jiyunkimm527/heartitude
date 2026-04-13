import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { useLocation } from 'react-router-dom';
import { BookOpen, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Programs = () => {
    const { hash } = useLocation();
    const { t } = useTranslation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    const BioRhythmSection = () => (
        <div style={{
            backgroundColor: '#f9fafb',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem',
            marginBottom: '4rem',
            border: '1px solid #e5e7eb'
        }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937', textAlign: 'center' }}>
                {t('programs.bioTitle')}
            </h2>
            <p
                style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#4b5563', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem auto' }}
                dangerouslySetInnerHTML={{ __html: t('programs.bioText') }}
            />
        </div>
    );

    const SchoolSupport = () => (
        <div id="school-support" style={{
            backgroundColor: 'white',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
            borderLeft: '8px solid var(--color-red-program)',
            marginBottom: '4rem'
        }}>
            <div style={{ padding: '3rem' }}>
                <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                    {t('programs.schoolTitle')}
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--color-text)', marginBottom: '2rem' }}>
                    {t('programs.schoolDesc')}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <BookOpen size={20} color="var(--color-red-program)" /> {t('programs.schoolActivitiesTitle')}
                        </h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text-light)' }}>
                            {t('programs.schoolActivities', { returnObjects: true }).map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <CheckCircle size={20} color="var(--color-red-program)" /> {t('programs.schoolPackTitle')}
                        </h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text-light)' }}>
                            {t('programs.schoolPackItems', { returnObjects: true }).map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    const CareSpaceSupport = () => (
        <div id="care-space-support" style={{
            backgroundColor: 'white',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
            borderLeft: '8px solid var(--color-blue-program)'
        }}>
            <div style={{ padding: '3rem' }}>
                <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                    {t('programs.careTitle')}
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                    {t('programs.careDesc')}
                </p>
                <p style={{ fontSize: '0.9rem', color: '#6b7280', fontStyle: 'italic', marginBottom: '2rem' }}>
                    {t('programs.careDisclaimer')}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <BookOpen size={20} color="var(--color-blue-program)" /> {t('programs.careActivitiesTitle')}
                        </h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text-light)' }}>
                            {t('programs.careActivities', { returnObjects: true }).map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <CheckCircle size={20} color="var(--color-blue-program)" /> {t('programs.carePackTitle')}
                        </h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text-light)' }}>
                            {t('programs.carePackItems', { returnObjects: true }).map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <PageHero
                title={t('programs.heroTitle')}
                subtitle={t('programs.heroSubtitle')}
                imageSrc="/images/hero-programs.jpg"
            />
            <Section>
                <BioRhythmSection />
                <SchoolSupport />
                <CareSpaceSupport />
            </Section>
        </>
    );
};

export default Programs;
