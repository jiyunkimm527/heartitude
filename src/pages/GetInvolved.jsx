import React from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import Button from '../components/Button';
import { UserPlus, Building } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GetInvolved = () => {
    const { t } = useTranslation();

    return (
        <>
            <PageHero
                title={t('getInvolved.heroTitle')}
                subtitle={t('getInvolved.heroSubtitle')}
                imageSrc="/images/hero-get-involved.jpg"
            />
            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Volunteer */}
                    <div className="card" style={{ padding: '2rem' }}>
                        <div style={{ display: 'inline-block', padding: '1rem', backgroundColor: 'var(--color-blue-bg)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                            <UserPlus size={40} color="var(--color-blue-program)" />
                        </div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                            {t('getInvolved.volunteerTitle')}
                        </h2>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                            {t('getInvolved.volunteerDesc')}
                        </p>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
                            {t('getInvolved.openRolesTitle')}
                        </h3>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-text-light)' }}>
                            {t('getInvolved.openRoles', { returnObjects: true }).map((role, i) => (
                                <li key={i}>{role}</li>
                            ))}
                        </ul>
                        <Button to="/contact" variant="blue" className="w-full">
                            {t('getInvolved.volunteerBtn')}
                        </Button>
                    </div>

                    {/* Partner */}
                    <div className="card" style={{ padding: '2rem' }}>
                        <div style={{ display: 'inline-block', padding: '1rem', backgroundColor: 'var(--color-red-bg)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                            <Building size={40} color="var(--color-red-program)" />
                        </div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                            {t('getInvolved.partnerTitle')}
                        </h2>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                            {t('getInvolved.partnerDesc')}
                        </p>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
                            {t('getInvolved.servicesTitle')}
                        </h3>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--color-text-light)' }}>
                            {t('getInvolved.services', { returnObjects: true }).map((service, i) => (
                                <li key={i}>{service}</li>
                            ))}
                        </ul>
                        <Button to="/contact" variant="red" className="w-full">
                            {t('getInvolved.partnerBtn')}
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default GetInvolved;
