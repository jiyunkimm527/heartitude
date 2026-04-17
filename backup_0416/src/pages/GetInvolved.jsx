import React from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GetInvolved = () => {
    const { t } = useTranslation();

    const volunteerRoles = t('getInvolved.openRoles', { returnObjects: true });
    const services = t('getInvolved.services', { returnObjects: true });

    return (
        <>
            <PageHero
                title={t('getInvolved.heroTitle')}
                subtitle={t('getInvolved.heroSubtitle')}
                imageSrc="/images/hero-get-involved.jpg"
            />

            <Section style={{ backgroundColor: '#ffffff', padding: '5rem 0' }}>
                <div style={{
                    maxWidth: '960px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1px 1fr',
                    gap: '0',
                    alignItems: 'start',
                }}>

                    {/* Volunteer */}
                    <div style={{ padding: '0 3rem 0 0' }}>
                        <p style={{
                            fontSize: '0.72rem',
                            fontWeight: '700',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: '#9ca3af',
                            marginBottom: '1.25rem',
                        }}>01</p>

                        <h2 style={{
                            fontSize: '2rem',
                            fontWeight: '800',
                            color: '#111827',
                            letterSpacing: '-0.025em',
                            lineHeight: 1.15,
                            marginBottom: '1.25rem',
                        }}>
                            {t('getInvolved.volunteerTitle')}
                        </h2>

                        <p style={{
                            fontSize: '0.95rem',
                            color: '#6b7280',
                            lineHeight: 1.75,
                            marginBottom: '2rem',
                            minHeight: '5.5rem',
                        }}>
                            {t('getInvolved.volunteerDesc')}
                        </p>

                        <p style={{
                            fontSize: '0.72rem',
                            fontWeight: '700',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#374151',
                            marginBottom: '1rem',
                        }}>
                            {t('getInvolved.openRolesTitle')}
                        </p>

                        <ul style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.65rem',
                            marginBottom: '2.5rem',
                        }}>
                            {volunteerRoles.map((role, i) => (
                                <li key={i} style={{
                                    fontSize: '0.925rem',
                                    color: '#374151',
                                    paddingLeft: '1rem',
                                    borderLeft: '2px solid #fde68a',
                                }}>
                                    {role}
                                </li>
                            ))}
                        </ul>

                        <Link to="/contact" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.875rem',
                            fontWeight: '700',
                            color: '#111827',
                            textDecoration: 'none',
                            borderBottom: '2px solid #fbbf24',
                            paddingBottom: '2px',
                            transition: 'color 0.2s',
                        }}
                            onMouseEnter={e => e.currentTarget.style.color = '#b45309'}
                            onMouseLeave={e => e.currentTarget.style.color = '#111827'}
                        >
                            {t('getInvolved.volunteerBtn')} <ArrowRight size={14} />
                        </Link>
                    </div>

                    {/* Divider */}
                    <div style={{ backgroundColor: '#e5e7eb', width: '1px', height: '100%', minHeight: '320px' }} />

                    {/* Partner */}
                    <div style={{ padding: '0 0 0 3rem' }}>
                        <p style={{
                            fontSize: '0.72rem',
                            fontWeight: '700',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: '#9ca3af',
                            marginBottom: '1.25rem',
                        }}>02</p>

                        <h2 style={{
                            fontSize: '2rem',
                            fontWeight: '800',
                            color: '#111827',
                            letterSpacing: '-0.025em',
                            lineHeight: 1.15,
                            marginBottom: '1.25rem',
                        }}>
                            {t('getInvolved.partnerTitle')}
                        </h2>

                        <p style={{
                            fontSize: '0.95rem',
                            color: '#6b7280',
                            lineHeight: 1.75,
                            marginBottom: '2rem',
                            minHeight: '5.5rem',
                        }}>
                            {t('getInvolved.partnerDesc')}
                        </p>

                        <p style={{
                            fontSize: '0.72rem',
                            fontWeight: '700',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#374151',
                            marginBottom: '1rem',
                        }}>
                            {t('getInvolved.servicesTitle')}
                        </p>

                        <ul style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.65rem',
                            marginBottom: '2.5rem',
                        }}>
                            {services.map((service, i) => (
                                <li key={i} style={{
                                    fontSize: '0.925rem',
                                    color: '#374151',
                                    paddingLeft: '1rem',
                                    borderLeft: '2px solid #fde68a',
                                }}>
                                    {service}
                                </li>
                            ))}
                        </ul>

                        <Link to="/contact" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.875rem',
                            fontWeight: '700',
                            color: '#111827',
                            textDecoration: 'none',
                            borderBottom: '2px solid #fbbf24',
                            paddingBottom: '2px',
                            transition: 'color 0.2s',
                        }}
                            onMouseEnter={e => e.currentTarget.style.color = '#b45309'}
                            onMouseLeave={e => e.currentTarget.style.color = '#111827'}
                        >
                            {t('getInvolved.partnerBtn')} <ArrowRight size={14} />
                        </Link>
                    </div>

                </div>
            </Section>
        </>
    );
};

export default GetInvolved;
