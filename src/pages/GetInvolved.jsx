import React from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import Button from '../components/Button';
import { UserPlus, Building, Mail } from 'lucide-react';

const GetInvolved = () => {
    return (
        <>
            <PageHero
                title="Get Involved"
                subtitle="Join us in making a difference. Whether you want to volunteer or partner with us, we need your help."
                imageSrc="/images/hero-get-involved.jpg"
            />

            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Volunteer */}
                    <div className="card" style={{ padding: '2rem' }}>
                        <div style={{ display: 'inline-block', padding: '1rem', backgroundColor: 'var(--color-blue-bg)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                            <UserPlus size={40} color="var(--color-blue-program)" />
                        </div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Volunteer</h2>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                            We're looking for passionate individuals to help with tutoring and content creation.
                        </p>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Open Roles:</h3>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-text-light)' }}>
                            <li>Tutors (Math / English)</li>
                            <li>Content Helpers (Guides, Checklists)</li>
                            <li>Partner Coordinators</li>
                        </ul>
                        <Button to="/contact" variant="blue" className="w-full">Apply to Volunteer</Button>
                    </div>

                    {/* Partner */}
                    <div className="card" style={{ padding: '2rem' }}>
                        <div style={{ display: 'inline-block', padding: '1rem', backgroundColor: 'var(--color-red-bg)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                            <Building size={40} color="var(--color-red-program)" />
                        </div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Partner</h2>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                            Schools, NGOs, and care centers can request School Start Guide & Care-Space packs and implementation guides.
                        </p>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Services:</h3>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-text-light)' }}>
                            <li>School Start Guide Pack Implementation</li>
                            <li>Tutoring Program Setup</li>
                            <li>Environment Optimization</li>
                        </ul>
                        <Button to="/contact" variant="red" className="w-full">Partner Inquiry</Button>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default GetInvolved;
