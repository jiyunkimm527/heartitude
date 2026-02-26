import React from 'react';
import Section from '../components/Section';

import PageHero from '../components/PageHero';
import StoryMapSection from '../components/StoryMapSection';

const About = () => {
    return (
        <>
            <PageHero
                title="About Heartitude"
                subtitle="A student-led service club supporting learning and care."
                imageSrc="/images/hero-about.jpg"
            />

            <Section>
                <div style={{ display: 'grid', gap: '4rem', maxWidth: '900px', margin: '0 auto' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Our Mission</h2>
                        <p style={{
                            fontSize: '1.2rem',
                            lineHeight: '1.8',
                            color: 'var(--color-text)',
                            fontWeight: '400'
                        }}>
                            Heartitude is a blend of ‘Heart’ + ‘Attitude’—showing up with empathy, consistency, and practical problem-solving. In Panama, we observed that learning gaps often come from a mix of missing school-system information, language barriers, fatigue, and limited support resources.
                            We respond through two service tracks—School Learning Support and Care-Space Learning Support—powered by BioRhythm, a student-built measurement-and-checklist approach that helps identify simple, low-cost improvements (lighting, noise, routines) and keeps learning continuous.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: '1rem', fontStyle: 'italic' }}>
                            * Educational support only—no medical advice.
                        </p>
                    </div>

                    <StoryMapSection />

                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Why We Started</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                            We noticed that students in two very different settings—under-resourced schools and hospitals—faced a similar challenge: a lack of continuity and accessible guidance. Heartitude was born from the idea that simple, practical tools combined with consistent human support can connect these dots.
                        </p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Our Values</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            {[
                                { title: "Accessibility", desc: "Making support easy to find and use." },
                                { title: "Consistency", desc: "Providing reliable routines for learners." },
                                { title: "Empathy", desc: "Understanding the unique challenges of each student." }
                            ].map((val, idx) => (
                                <div key={idx} style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: 'var(--radius-md)' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{val.title}</h3>
                                    <p style={{ color: 'var(--color-text-light)' }}>{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section >
        </>
    );
};

export default About;
