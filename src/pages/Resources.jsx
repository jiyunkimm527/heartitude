import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { resources } from '../data/resources';
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
