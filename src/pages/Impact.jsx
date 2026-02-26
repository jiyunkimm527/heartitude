import React from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import StoryMapSection from '../components/StoryMapSection';

const Impact = () => {
    return (
        <>
            <PageHero
                title="Our Impact"
                subtitle="Measuring the difference we make in students' lives."
                imageSrc="/images/hero-impact.jpg"
            />

            <StoryMapSection />

            <Section>
                <div style={{ textAlign: 'center', padding: '4rem 0', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                    <h2 style={{ marginBottom: '1rem', color: 'var(--color-text-light)' }}>Detailed Impact Report Coming Soon</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-light)' }}>
                        We are currently collecting data from our pilot programs. Check back soon to see how Heartitude is changing lives through tutoring and guidance kits.
                    </p>
                </div>
            </Section>
        </>
    );
};

export default Impact;
