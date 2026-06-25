import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { resources, featuredApps } from '../data/resources';
import { useTranslation } from 'react-i18next';

const CATEGORIES = [
    { key: 'Math',      icon: '📐', color: '#0891b2', bg: '#ecfeff', light: '#a5f3fc' },
    { key: 'English',   icon: '📖', color: '#f9a8d4', bg: '#fdf2f8', light: '#fbcfe8' },
    { key: 'BioRhythm', icon: '💚', color: '#059669', bg: '#ecfdf5', light: '#6ee7b7' },
];

const CategoryTab = ({ cat, active, onClick }) => (
    <button
        onClick={onClick}
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.6rem 1.4rem',
            borderRadius: '999px',
            border: active ? 'none' : '1.5px solid #e5e7eb',
            backgroundColor: active ? cat.color : 'transparent',
            color: active ? '#ffffff' : '#6b7280',
            fontWeight: '600',
            fontSize: '0.875rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: active ? `0 4px 14px -2px ${cat.color}55` : 'none',
            letterSpacing: '0.01em',
        }}
        onMouseEnter={e => {
            if (!active) {
                e.currentTarget.style.borderColor = cat.color;
                e.currentTarget.style.color = cat.color;
                e.currentTarget.style.backgroundColor = cat.bg;
            }
        }}
        onMouseLeave={e => {
            if (!active) {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.color = '#6b7280';
                e.currentTarget.style.backgroundColor = 'transparent';
            }
        }}
    >
        <span>{cat.icon}</span>
        {cat.key}
    </button>
);

const ResourceCard = ({ resource, accentColor, accentBg }) => {
    const hasLink = resource.url && resource.url !== '#';
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hovered
                    ? `0 12px 28px -4px ${accentColor}22, 0 4px 8px -2px rgba(0,0,0,0.08)`
                    : '0 1px 4px rgba(0,0,0,0.06)',
            }}
        >
            {/* Accent top bar */}
            <div style={{ height: '4px', backgroundColor: accentColor, flexShrink: 0 }} />

            <div style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                {/* Badge row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                        fontSize: '0.68rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: accentColor,
                        backgroundColor: accentBg,
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                    }}>
                        {resource.gradeLevel}
                    </span>
                    <span style={{
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: '#94a3b8',
                        letterSpacing: '0.04em',
                    }}>
                        {resource.type}
                    </span>
                </div>

                {/* Title */}
                <h3 style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#1c1108',
                    lineHeight: 1.4,
                }}>
                    {resource.title}
                </h3>

                {/* Description */}
                <p style={{
                    fontSize: '0.85rem',
                    color: '#6b7280',
                    lineHeight: 1.65,
                    flex: 1,
                }}>
                    {resource.description}
                </p>

                {/* Button */}
                <button
                    onClick={() => hasLink && window.open(resource.url, '_blank')}
                    disabled={!hasLink}
                    style={{
                        marginTop: '0.5rem',
                        padding: '0.55rem 1rem',
                        borderRadius: '7px',
                        border: 'none',
                        backgroundColor: hasLink ? accentColor : '#f3f4f6',
                        color: hasLink ? '#ffffff' : '#9ca3af',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        cursor: hasLink ? 'pointer' : 'default',
                        transition: 'opacity 0.2s',
                        opacity: hovered && hasLink ? 0.88 : 1,
                    }}
                >
                    {hasLink ? 'Open Resource →' : 'Coming Soon'}
                </button>
            </div>
        </div>
    );
};

const EmptyState = ({ cat }) => (
    <div style={{
        gridColumn: '1 / -1',
        textAlign: 'center',
        padding: '4rem 2rem',
        backgroundColor: cat.bg,
        borderRadius: '16px',
        border: `1.5px dashed ${cat.light}`,
    }}>
        <div style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>{cat.icon}</div>
        <p style={{ fontSize: '1rem', fontWeight: '700', color: cat.color, marginBottom: '0.4rem' }}>
            {cat.key} materials are on the way
        </p>
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            We'll add resources here as they're created. Check back soon!
        </p>
    </div>
);

const FeaturedAppCard = ({ app }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: 'relative',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hovered 
                    ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                overflow: 'hidden'
            }}
        >
            {/* Glowing top line with app gradient */}
            <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                height: '6px', 
                background: app.gradient 
            }} />

            {/* Header info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                <div>
                    <span style={{ 
                        fontSize: '0.72rem', 
                        fontWeight: '700', 
                        textTransform: 'uppercase', 
                        color: '#64748b',
                        letterSpacing: '0.06em'
                    }}>
                        {app.subtitle}
                    </span>
                    <h3 style={{ 
                        fontSize: '1.15rem', 
                        fontWeight: '800', 
                        color: '#1c1108',
                        marginTop: '0.2rem',
                        lineHeight: 1.3
                    }}>
                        {app.title}
                    </h3>
                </div>
                <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: app.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    color: '#ffffff',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    flexShrink: 0
                }}>
                    {app.icon}
                </div>
            </div>

            {/* Description */}
            <p style={{ 
                fontSize: '0.85rem', 
                color: '#475569', 
                lineHeight: 1.6,
                flex: 1
            }}>
                {app.description}
            </p>

            {/* Bottom row: Badge + Button */}
            <div style={{ 
                marginTop: '0.5rem', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1rem' 
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        color: '#0f172a',
                        background: '#f1f5f9',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                    }}>
                        {app.id === 'fa2' && (
                            <span style={{
                                width: '6px',
                                height: '6px',
                                background: '#10b981',
                                borderRadius: '50%',
                                display: 'inline-block',
                                animation: 'pulse 1.8s infinite'
                            }} />
                        )}
                        {app.badge}
                    </span>
                </div>

                <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        background: app.gradient,
                        color: '#ffffff',
                        fontWeight: '700',
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                        textAlign: 'center',
                        boxShadow: hovered ? '0 10px 15px -3px rgba(0,0,0,0.15)' : 'none',
                        transition: 'all 0.2s ease',
                        opacity: hovered ? 0.92 : 1
                    }}
                >
                    {app.btnText}
                </a>
            </div>
        </div>
    );
};

const Resources = () => {
    const [activeKey, setActiveKey] = useState('Math');
    const activeCat = CATEGORIES.find(c => c.key === activeKey);
    const filtered = resources.filter(r => r.category === activeKey);

    return (
        <>
            <PageHero
                title="Resources"
                subtitle="Free learning materials for students and families — added as we create them."
                imageSrc="/images/hero-resources.jpg"
            />

            <Section>
                {/* Category Tabs */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginBottom: '3rem',
                    flexWrap: 'wrap',
                }}>
                    {CATEGORIES.map(cat => (
                        <CategoryTab
                            key={cat.key}
                            cat={cat}
                            active={activeKey === cat.key}
                            onClick={() => setActiveKey(cat.key)}
                        />
                    ))}
                </div>

                {/* CSS Micro-animations */}
                <style>{`
                    @keyframes pulse {
                        0% { transform: scale(0.95); opacity: 1; }
                        50% { transform: scale(1.3); opacity: 0.5; }
                        100% { transform: scale(0.95); opacity: 1; }
                    }
                `}</style>

                {/* Featured Apps Section for Math */}
                {activeKey === 'Math' && (
                    <div style={{ marginBottom: '3.5rem' }}>
                        <h2 style={{
                            fontSize: '1.25rem',
                            fontWeight: '800',
                            color: '#1c1108',
                            marginBottom: '1.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            letterSpacing: '0.01em',
                            borderBottom: '2px solid #f1f5f9',
                            paddingBottom: '0.75rem'
                        }}>
                            ✨ Recommended Learning Apps
                        </h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '1.5rem',
                        }}>
                            {featuredApps.filter(app => app.category === 'Math').map(app => (
                                <FeaturedAppCard key={app.id} app={app} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Count label */}
                {filtered.length > 0 && (
                    <p style={{
                        textAlign: 'center',
                        fontSize: '0.8rem',
                        color: '#9ca3af',
                        marginBottom: '1.5rem',
                        fontWeight: '500',
                        letterSpacing: '0.04em',
                    }}>
                        {filtered.length} resource{filtered.length > 1 ? 's' : ''} available
                    </p>
                )}

                {/* Resource Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {filtered.length === 0
                        ? <EmptyState cat={activeCat} />
                        : filtered.map(r => (
                            <ResourceCard
                                key={r.id}
                                resource={r}
                                accentColor={activeCat.color}
                                accentBg={activeCat.bg}
                            />
                        ))
                    }
                </div>
            </Section>
        </>
    );
};

export default Resources;
