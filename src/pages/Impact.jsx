import React, { useState, useEffect, useRef } from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

/* ── CountUp Component with IntersectionObserver ── */
const MetricCounter = ({ end, prefix = '', suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        const endNum = parseInt(end, 10);
        if (isNaN(endNum)) {
            setCount(end);
            return;
        }
        const increment = Math.max(Math.ceil(endNum / (duration / 16)), 1);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= endNum) {
                setCount(endNum);
                clearInterval(timer);
            } else {
                setCount(current);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [started, end, duration]);

    return (
        <span ref={ref}>
            {prefix}{typeof count === 'number' ? count.toLocaleString() : count}{suffix}
        </span>
    );
};

const Impact = () => {
    const { t, i18n } = useTranslation();
    const isEs = i18n.language?.startsWith('es');
    const pillars = t('impact.pillars', { returnObjects: true });
    const activities = t('impact.activities', { returnObjects: true });

    const partnerList = [
        {
            role: isEs ? "Atención Cardíaca Pediátrica" : "Pediatric Cardiac Care",
            name: "Fundación Latidos",
            logo: "/images/logo-latidos.png",
            logoHeight: "44px",
            url: "https://www.latidospanama.org",
            desc: isEs
                ? "Una fundación dedicada a la cirugía, tratamiento y apoyo integral de niños con cardiopatías en Panamá. Junto a Latidos, Heartitude brinda tutoría matemática presencial semanal para sus pacientes pediátricos, acompañamiento hospitalario a las familias, una plataforma digital de gestión de pacientes adoptada oficialmente por la fundación, y campañas activas de recaudación de suministros médicos."
                : "A foundation dedicated to the surgery, treatment, and holistic support of children with heart conditions in Panama. Together with Latidos, Heartitude provides weekly in-person math tutoring for their pediatric patients, bedside companionship for families, a digital patient management platform officially adopted by the foundation, and active medical supply fundraising campaigns.",
        },
        {
            role: isEs ? "Educación en Inglés" : "English Education",
            name: "Fundación Gabriel Lewis Galindo",
            logo: "/images/logo-gabriel-lewis.webp",
            logoHeight: "40px",
            url: "https://fglg.org.pa",
            desc: isEs
                ? "Colaboración para diseñar e impartir un programa de 12 sesiones de conversación en inglés para 25 estudiantes de escuelas públicas. FGLG otorgó certificados de reconocimiento a los 5 tutores de Heartitude por su contribución."
                : "Collaborated to design and deliver a 12-session conversational English program for 25 public school students. FGLG awarded certificates of recognition to all 5 Heartitude tutors for their contribution.",
        },
        {
            role: isEs ? "Co-Desarrollo Académico" : "Academic Co-Development",
            name: "Universidad de Panamá",
            logo: "/images/logo-universidad-panama.png",
            logoHeight: "36px",
            url: "https://up.ac.pa",
            desc: isEs
                ? "Tras revisar nuestra plataforma matemática, la Facultad de Ciencias de la Educación (GIEM) contactó directamente a Heartitude. Actualmente lideramos talleres en aulas universitarias junto a profesores, co-diseñando contenido instruccional y las funcionalidades de la próxima generación."
                : "After reviewing our math platform, the Faculty of Educational Sciences (GIEM) reached out directly to Heartitude. We now lead workshops in university classrooms alongside professors, co-designing instructional content and next-generation platform features.",
        },
        {
            role: isEs ? "Atención Directa e Investigación" : "Direct Care & Field Research",
            name: "Hospital del Niño & Casita de Mausi",
            logo: "/images/logo-hospital-nino.png",
            logoHeight: "38px",
            url: "https://hn.sld.pa",
            desc: isEs
                ? "Acompañamiento y orientación a familias de pacientes cardíacos pediátricos, apoyo operativo a Fundación Latidos en sus actividades hospitalarias, y sede de investigación para nuestro estudio ambiental BioRhythm."
                : "Family counseling and support for pediatric cardiac patients, operational assistance alongside Fundación Latidos during hospital activities, and research site for our BioRhythm environmental study.",
        },
        {
            role: isEs ? "Base Institucional" : "Institutional Home",
            name: "Balboa Academy",
            logo: "/images/balboa_logo.png",
            logoHeight: "24px",
            url: "https://www.balboaacademy.edu.pa",
            desc: isEs
                ? "Donde Heartitude fue fundada como club estudiantil — proporcionando la red de tutores voluntarios, la estructura de liderazgo y la movilización comunitaria que impulsa nuestros programas."
                : "Where Heartitude was founded as a student club — providing the volunteer tutor network, leadership structure, and community mobilization that powers our programs.",
        },
    ];

    return (
        <>
            <style>{`
                @media (max-width: 768px) {
                    .imp-partner-row {
                        grid-template-columns: 1fr !important;
                        gap: 0.75rem !important;
                    }
                    .imp-timeline-row {
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 0.5rem !important;
                        padding-bottom: 1.75rem !important;
                        padding-left: 1rem !important;
                        border-left: 2px solid #e5e7eb;
                    }
                    .imp-timeline-date { text-align: left !important; padding-top: 0 !important; }
                    .imp-timeline-center { display: none !important; }
                }
            `}</style>
            <PageHero
                title={t('impact.heroTitle')}
                subtitle={t('impact.heroSubtitle')}
                images={[
                    "/images/impact/a1.jpg",
                    "/images/impact/a2.jpeg",
                    "/images/impact/a3.jpg",
                    "/images/impact/b1.jpeg",
                    "/images/impact/b2.jpeg",
                    "/images/impact/b3.jpeg",
                    "/images/impact/c1.jpeg",
                    "/images/impact/c2.jpeg",
                    "/images/impact/c3.jpeg",
                    "/images/impact/c4.jpeg",
                ]}
                overlay="center"
            />

            {/* ── Section 1: Impact by the Numbers (Pillars Card Summary) ── */}
            <Section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
                        <p style={{
                            fontSize: '0.74rem',
                            fontWeight: '700',
                            letterSpacing: '0.16em',
                            textTransform: 'uppercase',
                            color: '#b45309',
                            marginBottom: '0.5rem',
                        }}>
                            {t('impact.metricsOverline')}
                        </p>
                        <h2 style={{
                            fontFamily: 'var(--font-display, serif)',
                            fontSize: 'clamp(1.85rem, 3.5vw, 2.4rem)',
                            fontWeight: '700',
                            letterSpacing: '-0.02em',
                            color: '#1c1108',
                            marginBottom: '0.75rem',
                        }}>
                            {t('impact.metricsTitle')}
                        </h2>
                        <p style={{
                            fontSize: '0.95rem',
                            color: '#6b7280',
                            lineHeight: 1.65,
                            margin: 0,
                        }}>
                            {t('impact.metricsSubtitle')}
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        {Array.isArray(pillars) && pillars.map((pillar, pi) => (
                            <div key={pi}>
                                {/* Pillar heading */}
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '0.72rem', fontWeight: '800', color: pillar.color || '#9ca3af', letterSpacing: '0.08em' }}>{pillar.num}</span>
                                    <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#111827' }}>{pillar.label}</span>
                                    <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>{pillar.subtitle}</span>
                                </div>

                                {/* Cards Grid */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: pillar.cols === 3
                                        ? 'repeat(auto-fit, minmax(280px, 1fr))'
                                        : pillar.cols === 2
                                            ? 'repeat(auto-fit, minmax(320px, 1fr))'
                                            : '1fr',
                                    gap: '1.25rem',
                                }}>
                                    {Array.isArray(pillar.cards) && pillar.cards.map((c, ci) => (
                                        <div
                                            key={ci}
                                            style={{
                                                background: '#ffffff',
                                                border: '1px solid #e2e8f0',
                                                padding: '1.75rem',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '0.5rem',
                                                transition: 'border-color 0.2s ease',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.borderColor = '#0f172a';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.borderColor = '#e2e8f0';
                                            }}
                                        >
                                            {/* Key Stat Badge */}
                                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.45rem', marginBottom: '0.15rem' }}>
                                                <span style={{
                                                    fontSize: '1.75rem',
                                                    fontWeight: '800',
                                                    color: pillar.color || '#1c1108',
                                                    letterSpacing: '-0.03em',
                                                    lineHeight: 1,
                                                }}>
                                                    <MetricCounter
                                                        end={c.statNum}
                                                        prefix={c.prefix || ''}
                                                        suffix={c.suffix || ''}
                                                        duration={1800}
                                                    />
                                                </span>
                                                {c.statLabel && (
                                                    <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#4b5563' }}>
                                                        {c.statLabel}
                                                    </span>
                                                )}
                                            </div>

                                            <span style={{ fontSize: '1rem', fontWeight: '800', color: '#111827', letterSpacing: '-0.01em', lineHeight: 1.35 }}>
                                                {c.title}
                                            </span>

                                            <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.65, margin: '0 0 0.5rem' }}>
                                                {c.desc}
                                            </p>

                                            {/* Sub-steps if present (e.g. GROW) */}
                                            {Array.isArray(c.steps) && (
                                                <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '0.35rem',
                                                    margin: '0.2rem 0 0.6rem',
                                                    background: '#ffffff',
                                                    padding: '0.85rem 1rem',
                                                    borderRadius: '8px',
                                                    border: '1px solid #e5e7eb',
                                                }}>
                                                    {c.steps.map((s, si) => (
                                                        <div key={si} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                                                            <span style={{ fontSize: '0.85rem', fontWeight: '800', color: pillar.color || '#059669', flexShrink: 0, lineHeight: 1.6 }}>
                                                                {s.num}
                                                            </span>
                                                            <div style={{ fontSize: '0.84rem', lineHeight: 1.55 }}>
                                                                <span style={{ fontWeight: '700', color: '#111827' }}>{s.label}</span>
                                                                <span style={{ color: '#64748b', marginLeft: '0.35rem' }}>— {s.detail}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Footer Tags */}
                                            <div style={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                columnGap: '0.6rem',
                                                rowGap: '0.25rem',
                                                fontSize: '0.8rem',
                                                color: '#9ca3af',
                                                marginTop: 'auto',
                                                paddingTop: '0.6rem',
                                                borderTop: '1px solid #f1f5f9',
                                            }}>
                                                {c.tags && c.tags.split('·').map((tag, idx) => {
                                                    const text = tag.trim();
                                                    if (!text) return null;
                                                    return (
                                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                                            <span>·</span>
                                                            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ── Section 2: Institutional Validation & Cross-Sector Network ── */}
            <Section style={{ backgroundColor: '#faf9f7', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                    <div style={{ maxWidth: '600px', marginBottom: '2.5rem' }}>
                        <p style={{
                            fontSize: 'var(--size-overline)',
                            fontWeight: '700',
                            letterSpacing: '0.16em',
                            textTransform: 'uppercase',
                            color: 'var(--color-text-subtle)',
                            marginBottom: '0.4rem',
                        }}>
                            {t('impact.partnersOverline')}
                        </p>
                        <h2 style={{
                            fontSize: '1.6rem',
                            fontWeight: '700',
                            color: '#1c1108',
                            letterSpacing: '-0.02em',
                            marginBottom: '0.5rem',
                        }}>
                            {t('impact.partnersTitle')}
                        </h2>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
                            {t('impact.partnersSubtitle')}
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {partnerList.map((p, i) => (
                            <div
                                key={i}
                                className="imp-partner-row"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '200px 1fr',
                                    gap: '1.5rem',
                                    padding: '1.5rem 0',
                                    borderTop: i === 0 ? '1px solid #e5e7eb' : '1px solid #f1f5f9',
                                    alignItems: 'start',
                                }}
                            >
                                {/* Left: Logo + Name */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <div style={{
                                        height: '36px',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}>
                                        <a
                                            href={p.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={`${p.name} - Open Website`}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                textDecoration: 'none',
                                                cursor: 'pointer',
                                                transition: 'opacity 0.2s ease, transform 0.2s ease',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.opacity = '0.75';
                                                e.currentTarget.style.transform = 'scale(1.02)';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.opacity = '1';
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}
                                        >
                                            <img
                                                src={p.logo}
                                                alt={p.name}
                                                style={{
                                                    maxHeight: p.logoHeight || '36px',
                                                    maxWidth: '160px',
                                                    objectFit: 'contain',
                                                }}
                                            />
                                        </a>
                                    </div>
                                    <span style={{
                                        fontSize: '0.72rem',
                                        fontWeight: '600',
                                        letterSpacing: '0.06em',
                                        textTransform: 'uppercase',
                                        color: '#9ca3af',
                                    }}>
                                        {p.role}
                                    </span>
                                </div>

                                {/* Right: Description */}
                                <div>
                                    <h4 style={{
                                        fontSize: '0.95rem',
                                        fontWeight: '700',
                                        color: '#111827',
                                        marginBottom: '0.35rem',
                                        lineHeight: 1.35,
                                    }}>
                                        <a
                                            href={p.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={`${p.name} - Open Website`}
                                            style={{
                                                color: '#111827',
                                                textDecoration: 'none',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.35rem',
                                                cursor: 'pointer',
                                                transition: 'color 0.15s ease',
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.color = '#3b82f6'}
                                            onMouseLeave={e => e.currentTarget.style.color = '#111827'}
                                        >
                                            {p.name}
                                            <ExternalLink size={13} style={{ opacity: 0.5 }} />
                                        </a>
                                    </h4>
                                    <p style={{
                                        fontSize: '0.85rem',
                                        color: '#6b7280',
                                        lineHeight: 1.65,
                                        margin: 0,
                                    }}>
                                        {p.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ── Section 3: Activities Timeline (Depth of Commitment) ── */}
            <Section style={{ backgroundColor: '#ffffff' }}>
                <div style={{ maxWidth: '860px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '3.5rem' }}>
                        <p style={{
                            fontSize: 'var(--size-overline)',
                            fontWeight: '700',
                            letterSpacing: '0.16em',
                            textTransform: 'uppercase',
                            color: '#b45309',
                            marginBottom: '0.5rem',
                        }}>
                            {t('impact.activitiesOverline')}
                        </p>
                        <h2 style={{
                            fontFamily: 'var(--font-display, serif)',
                            fontSize: 'clamp(1.8rem, 3.2vw, 2.2rem)',
                            fontWeight: '700',
                            color: '#1c1108',
                            letterSpacing: '-0.02em',
                            marginBottom: '0.6rem',
                        }}>
                            {t('impact.activitiesTitle')}
                        </h2>
                        <p style={{ fontSize: '0.95rem', color: '#6b7280', margin: 0 }}>
                            {t('impact.activitiesSubtitle')}
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {Array.isArray(activities) && activities.map((a, i) => (
                            <div key={i} className="imp-timeline-row" style={{
                                display: 'grid',
                                gridTemplateColumns: '150px 1px 1fr',
                                gap: '0 2.5rem',
                                paddingBottom: '2.5rem',
                            }}>
                                {/* Date */}
                                <div className="imp-timeline-date" style={{ textAlign: 'right', paddingTop: '0.15rem' }}>
                                    <span style={{
                                        fontSize: '0.82rem',
                                        fontWeight: '700',
                                        color: a.status === 'pending' ? '#9ca3af' : '#b45309',
                                        letterSpacing: '0.02em',
                                    }}>
                                        {a.date}
                                    </span>
                                </div>

                                {/* Timeline line + dot */}
                                <div className="imp-timeline-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        backgroundColor: a.status === 'pending' ? '#e5e7eb' : '#1c1108',
                                        border: a.status === 'pending' ? '2px solid #d1d5db' : '2px solid #fbbf24',
                                        flexShrink: 0,
                                        marginTop: '0.2rem',
                                    }} />
                                    {i < activities.length - 1 && (
                                        <div style={{
                                            flex: 1,
                                            width: '1px',
                                            backgroundColor: a.status === 'pending' ? '#e5e7eb' : '#d1d5db',
                                            marginTop: '0.5rem',
                                        }} />
                                    )}
                                </div>

                                {/* Content */}
                                <div style={{ paddingBottom: '0.5rem' }}>
                                    <h3 style={{
                                        fontSize: '1.05rem',
                                        fontWeight: '700',
                                        color: a.status === 'pending' ? '#9ca3af' : '#1c1108',
                                        marginBottom: '0.4rem',
                                        lineHeight: 1.35,
                                    }}>
                                        {a.title}
                                    </h3>
                                    <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.65, margin: 0 }}>
                                        {a.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Impact;
