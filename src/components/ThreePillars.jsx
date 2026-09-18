import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/* ── Pillar groups with programs ── */
const PILLAR_GROUPS = [
    {
        key: 'learn',
        number: '01',
        label: 'LEARN',
        subtitle: 'Education & Tutoring',
        color: '#2563eb',
        bg: '#f5f8ff',
        programs: [
            {
                id: 'math-tutoring',
                titleKey: 'nav.programsSub.math',
                fallback: 'Math Tutoring',
                image: '/images/programs/math-tutoring/photo_1.jpg',
                tagline: 'One-on-one math support for pediatric cardiac children, helping them stay on track with their studies while navigating ongoing medical care.',
                statNum: '5', statLabel: 'Children',
                tags: 'Every Saturday · 1:1 In-person · Active',
            },
            {
                id: 'english-tutoring',
                titleKey: 'nav.programsSub.english',
                fallback: 'English Tutoring',
                image: '/images/programs/english-tutoring/photo_1.jpg',
                tagline: 'Intensive virtual English conversation sessions for underserved students — building confidence and real-world communication skills.',
                statNum: '25', statLabel: 'Students Mentored',
                tags: '12 Sessions · FGLG Partnership',
            },
            {
                id: 'platform',
                titleKey: 'nav.programsSub.digital',
                fallback: 'Digital Math Platform',
                image: '/images/resources/hero/res_1.jpg',
                tagline: 'A free digital math platform for Pre-K to Grade 6, co-developed with Universidad de Panamá — expanding access to quality math education across Panama.',
                statNum: '75', statLabel: 'Recipients Reached',
                tags: '32 Teachers · 20 Schools · Open Access',
            },
        ],
    },
];

const BOTTOM_ROW = [
    {
        key: 'heal',
        number: '02',
        label: 'HEAL',
        subtitle: 'Health & Patient Support',
        color: '#e11d48',
        bg: '#fff5f6',
        programs: [
            {
                id: 'patient-management',
                titleKey: 'nav.programsSub.patients',
                fallback: 'Patient Registry',
                image: '/images/programs/patient-management/poster.jpeg?v=1',
                objectFit: 'contain',
                tagline: 'Managing patient records, surgical waitlists, and donations for Fundación Latidos through a purpose-built digital platform — keeping every cardiac child\'s care on track.',
                statNum: '717+', statLabel: 'Records · 268 Waitlist',
                tags: '573 Beneficiaries · Ongoing',
            },
            {
                id: 'hospital-care',
                titleKey: 'nav.programsSub.hospital',
                fallback: 'Community Events & Fundraising',
                image: '/images/programs/hospital-care/cover.jpg?v=2',
                tagline: 'Community events and direct fundraising for pediatric cardiac children — bringing joy and companionship to the hospital, and raising funds for essential medical supplies their families could not otherwise afford.',
                statNum: '$2,000', statLabel: 'Fundraising Goal',
                tags: 'Medical Aid · Surgery Supplies · Active',
            },
        ],
    },
    {
        key: 'grow',
        number: '03',
        label: 'GROW',
        subtitle: 'Healthy Spaces',
        color: '#059669',
        bg: '#f3fdf7',
        programs: [
            {
                id: 'environment-research',
                titleKey: 'nav.programsSub.environment',
                fallback: 'BioRhythm Research',
                image: '/images/programs/hero/3-1.jpg',
                tagline: 'Field research into the physical environments of schools and pediatric care spaces — understanding how noise, light, and climate conditions impact children\'s ability to learn and recover.',
                statusText: 'Investigating recovery & learning environments in Panama healthcare and schools.',
                tags: 'Hospital del Niño · dB & Lux Data · Active Research',
            },
        ],
    },
];

const ProgramCard = ({ program, t, pillarColor }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Link
            to={`/programs/${program.id}`}
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', height: '100%' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                transition: 'all 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hovered
                    ? '0 16px 32px -8px rgba(15, 23, 42, 0.1)'
                    : '0 2px 6px -1px rgba(15, 23, 42, 0.04)',
            }}>
                {/* Image */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '3/2',
                    overflow: 'hidden',
                    background: program.objectFit === 'contain' ? '#ffffff' : '#f8fafc',
                }}>
                    <img
                        src={program.image}
                        alt={t(program.titleKey, program.fallback)}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: program.objectFit || 'cover',
                            display: 'block',
                            transform: hovered ? 'scale(1.05)' : 'scale(1)',
                            transition: 'transform 0.45s ease',
                        }}
                        loading="lazy"
                    />
                </div>

                {/* Content */}
                <div style={{ padding: '1rem 1.3rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h4 style={{
                        fontSize: '1.08rem',
                        fontWeight: '800',
                        color: '#0f172a',
                        margin: '0 0 0.6rem',
                        lineHeight: 1.3,
                        letterSpacing: '-0.015em',
                        fontFamily: 'var(--font-heading)',
                    }}>
                        {t(program.titleKey, program.fallback)}
                    </h4>

                    {/* Impact Stats */}
                    <div style={{ marginTop: 'auto' }}>
                        {program.statNum && (
                            <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                                <span style={{
                                    fontSize: '1.35rem',
                                    fontWeight: '800',
                                    color: pillarColor,
                                    letterSpacing: '-0.02em',
                                    fontFamily: 'var(--font-heading)',
                                }}>
                                    {program.statNum}
                                </span>
                                <span style={{
                                    fontSize: '0.72rem',
                                    fontWeight: '600',
                                    color: '#64748b',
                                }}>
                                    {program.statLabel}
                                </span>
                            </div>
                        )}
                        {!program.statNum && program.statusText && (
                            <p style={{
                                fontSize: '0.82rem',
                                color: '#475569',
                                margin: '0 0 0.5rem',
                                lineHeight: 1.55,
                            }}>
                                {program.statusText}
                            </p>
                        )}
                        {program.tags && (
                            <p style={{
                                fontSize: '0.72rem',
                                color: '#94a3b8',
                                margin: 0,
                                lineHeight: 1.5,
                            }}>
                                {program.tags}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

const ThreePillars = () => {
    const { t } = useTranslation();

    return (
        <section style={{
            backgroundColor: '#fafbfc',
            padding: '5.5rem 0',
            borderTop: '1px solid #e2e8f0',
            borderBottom: '1px solid #e2e8f0',
        }}>
            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
                    <span style={{
                        display: 'inline-block',
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#b45309',
                        marginBottom: '0.5rem',
                    }}>
                        {t('home.pillarsOverline', 'Core Focus Areas')}
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(1.85rem, 3.2vw, 2.35rem)',
                        fontWeight: '800',
                        color: '#0f172a',
                        margin: '0 0 0.75rem 0',
                        letterSpacing: '-0.02em',
                        fontFamily: 'var(--font-heading)',
                    }}>
                        {t('home.pillarsTitle')}
                    </h2>
                    <p style={{
                        fontSize: '0.98rem',
                        color: '#64748b',
                        lineHeight: 1.65,
                        margin: 0,
                        textWrap: 'balance',
                    }}>
                        {t('home.pillarsSubtitle')}
                    </p>
                </div>

                {/* Learn Group (full width) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {PILLAR_GROUPS.map((group) => (
                        <div key={group.key} style={{
                            border: '1px solid #e2e8f0',
                            borderRadius: '16px',
                            padding: '1.5rem',
                            backgroundColor: group.bg,
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'baseline',
                                gap: '0.6rem',
                                marginBottom: '1.25rem',
                                paddingBottom: '0.75rem',
                                borderBottom: '1px solid #f1f5f9',
                            }}>
                                <span style={{ fontSize: '0.72rem', fontWeight: '800', color: group.color, letterSpacing: '0.06em', opacity: 0.6 }}>
                                    {group.number}
                                </span>
                                <span style={{ fontSize: '0.82rem', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: group.color }}>
                                    {group.label}
                                </span>
                                <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: '500' }}>
                                    {group.subtitle}
                                </span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
                                {group.programs.map((program) => (
                                    <ProgramCard key={program.id} program={program} t={t} pillarColor={group.color} />
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Heal & Grow side by side */}
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                        {BOTTOM_ROW.map((group) => (
                            <div key={group.key} style={{
                                border: '1px solid #e2e8f0',
                                borderRadius: '16px',
                                padding: '1.5rem',
                                backgroundColor: group.bg,
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'baseline',
                                    gap: '0.6rem',
                                    marginBottom: '1.25rem',
                                    paddingBottom: '0.75rem',
                                    borderBottom: '1px solid #f1f5f9',
                                }}>
                                    <span style={{ fontSize: '0.72rem', fontWeight: '800', color: group.color, letterSpacing: '0.06em', opacity: 0.6 }}>
                                        {group.number}
                                    </span>
                                    <span style={{ fontSize: '0.82rem', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: group.color }}>
                                        {group.label}
                                    </span>
                                    <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: '500' }}>
                                        {group.subtitle}
                                    </span>
                                </div>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: group.programs.length > 1 ? 'repeat(2, 1fr)' : '1fr',
                                    gap: '1.25rem',
                                }}>
                                    {group.programs.map((program) => (
                                        <ProgramCard key={program.id} program={program} t={t} pillarColor={group.color} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Programs */}
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link
                        to="/programs"
                        style={{
                            fontSize: '0.9rem',
                            fontWeight: '700',
                            color: '#0f172a',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem 1.6rem',
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            backgroundColor: '#ffffff',
                            boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
                            transition: 'all 0.2s ease',
                        }}
                    >
                        <span>{t('home.programsGlanceLink', 'View All Programs')}</span>
                        <ArrowRight size={16} strokeWidth={2.5} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ThreePillars;
