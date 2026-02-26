import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { useLocation } from 'react-router-dom';
import { BookOpen, CheckCircle } from 'lucide-react';

const Programs = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

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
                    School Learning Support
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--color-text)', marginBottom: '2rem' }}>
                    Focused on elementary math and middle/high school English support, helping students navigate school requirements with confidence.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <BookOpen size={20} color="var(--color-red-program)" /> Key Activities
                        </h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text-light)' }}>
                            <li>• Elementary Math + Middle/High English learning support.</li>
                            <li>• Mentoring on study habits & routines.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <CheckCircle size={20} color="var(--color-red-program)" /> School Start Pack
                        </h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text-light)' }}>
                            <li>• School system orientation checklist.</li>
                            <li>• Key contacts list & weekly routine planner.</li>
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
                    Care-Space Learning Support
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--color-text)', marginBottom: '2rem' }}>
                    Bringing learning moments into care settings with calm routines and adaptable support.
                </p>
                <p style={{ fontSize: '0.9rem', color: '#6b7280', fontStyle: 'italic', marginBottom: '2rem', marginTop: '-1rem' }}>
                    Educational support only—no medical advice.
                </p>


                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <BookOpen size={20} color="var(--color-blue-program)" /> Key Activities
                        </h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text-light)' }}>
                            <li>• Learning support adapted for care settings.</li>
                            <li>• Calm routines to reduce anxiety.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <CheckCircle size={20} color="var(--color-blue-program)" /> Care-Space Pack
                        </h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text-light)' }}>
                            <li>• Waiting-time learning menu.</li>
                            <li>• Simple routine cards.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    const BioRhythmSection = () => (
        <div style={{
            backgroundColor: '#f9fafb',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem',
            marginBottom: '4rem',
            border: '1px solid #e5e7eb'
        }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937', textAlign: 'center' }}>
                BioRhythm Tools (Research Backbone)
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
                We measure simple environmental signals (noise, light, temperature) and study signals (study time, reaction time, accuracy) to create the <strong>Focus Forecast + Study Checklist</strong>. This helps us recommend low-cost improvements like lighting placement, quiet corners, and better time-slot distribution.
            </p>
        </div>
    );

    return (
        <>
            <PageHero
                title="Our Programs"
                subtitle="Targeted support for two distinct communities with shared needs for guidance and continuity."
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
