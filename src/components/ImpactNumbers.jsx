import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CountUp = ({ end, prefix = '', suffix = '', duration = 1800 }) => {
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
            { threshold: 0.1, rootMargin: '50px' }
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

const ImpactNumbers = () => {
    const { t } = useTranslation();
    const numbers = t('home.impactNumbers', { returnObjects: true });

    if (!numbers || typeof numbers !== 'object') return null;

    const items = Object.values(numbers);

    return (
        <section style={{
            backgroundColor: '#0f172a',
            color: '#ffffff',
            padding: '5.5rem 0',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Subtle background glow */}
            <div style={{
                position: 'absolute',
                top: '-150px',
                right: '-150px',
                width: '450px',
                height: '450px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-150px',
                left: '-150px',
                width: '450px',
                height: '450px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(225,29,72,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
                {/* Header with Title and Link to full impact page */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    flexWrap: 'wrap',
                    gap: '1.5rem',
                    marginBottom: '3.5rem',
                }}>
                    <div style={{ maxWidth: '680px' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            marginBottom: '0.6rem',
                        }}>
                            <span style={{
                                fontSize: '0.72rem',
                                fontWeight: '700',
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                                color: '#fbbf24',
                            }}>
                                {t('home.impactOverline', 'Verified Progress')}
                            </span>
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(1.85rem, 3.2vw, 2.35rem)',
                            fontWeight: '800',
                            color: '#ffffff',
                            margin: '0 0 0.6rem 0',
                            letterSpacing: '-0.02em',
                            fontFamily: 'var(--font-heading)',
                            lineHeight: 1.2,
                        }}>
                            {t('home.impactTitle')}
                        </h2>
                        <p style={{
                            fontSize: '0.96rem',
                            color: '#94a3b8',
                            lineHeight: 1.6,
                            margin: 0,
                        }}>
                            {t('home.impactSubtitle')}
                        </p>
                    </div>

                    <Link
                        to="/impact"
                        style={{
                            fontSize: '0.88rem',
                            fontWeight: '700',
                            color: '#ffffff',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            padding: '0.65rem 1.25rem',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.18)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        }}
                    >
                        <span>View Full Impact Report</span>
                        <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                </div>

                {/* Metrics Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                }}>
                    {items.map((item, i) => (
                        <div
                            key={i}
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '12px',
                                padding: '2rem 1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'all 0.25s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                                e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.4)';
                                e.currentTarget.style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div>
                                <div style={{
                                    fontSize: 'clamp(2.2rem, 3.2vw, 2.75rem)',
                                    fontWeight: '800',
                                    color: '#ffffff',
                                    letterSpacing: '-0.03em',
                                    lineHeight: 1.05,
                                    marginBottom: '0.85rem',
                                    fontFamily: 'var(--font-heading)',
                                }}>
                                    <CountUp
                                        end={item.value}
                                        prefix={item.prefix || ''}
                                        suffix={item.suffix || ''}
                                        duration={1800}
                                    />
                                </div>
                                <h4 style={{
                                    fontSize: '0.94rem',
                                    fontWeight: '700',
                                    color: '#e2e8f0',
                                    lineHeight: 1.35,
                                    margin: '0 0 0.45rem 0',
                                }}>
                                    {item.label}
                                </h4>
                            </div>

                            {item.sub && (
                                <p style={{
                                    fontSize: '0.78rem',
                                    color: '#94a3b8',
                                    lineHeight: 1.45,
                                    margin: '0.75rem 0 0 0',
                                    paddingTop: '0.75rem',
                                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                                }}>
                                    {item.sub}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactNumbers;
