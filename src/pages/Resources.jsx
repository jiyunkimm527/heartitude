import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { resources } from '../data/resources';
import { useTranslation } from 'react-i18next';

const CATEGORIES = ['Math', 'English', 'BioRhythm'];

const CategoryTab = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        style={{
            padding: '0.6rem 1.5rem',
            borderRadius: '999px',
            border: active ? 'none' : '1px solid #e5e7eb',
            backgroundColor: active ? '#1c1108' : 'transparent',
            color: active ? '#ffffff' : '#6b7280',
            fontWeight: '600',
            fontSize: '0.875rem',
            cursor: 'pointer',
            transition: 'all 0.2s',
            letterSpacing: '0.02em',
        }}
    >
        {label}
    </button>
);

const ResourceCard = ({ resource }) => {
    const [showViewer, setShowViewer] = useState(false);
    const hasLink = resource.url && resource.url !== '#';

    return (
        <>
            <div style={{
                padding: '1.5rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#b45309',
                        backgroundColor: '#fef3c7',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                    }}>
                        {resource.gradeLevel}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{resource.type}</span>
                </div>

                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#1c1108', lineHeight: 1.4 }}>
                    {resource.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.65, flex: 1 }}>
                    {resource.description}
                </p>

                <button
                    onClick={() => hasLink && setShowViewer(true)}
                    disabled={!hasLink}
                    style={{
                        marginTop: 'auto',
                        padding: '0.55rem 1rem',
                        borderRadius: '6px',
                        border: 'none',
                        backgroundColor: hasLink ? '#1c1108' : '#f3f4f6',
                        color: hasLink ? '#ffffff' : '#9ca3af',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        cursor: hasLink ? 'pointer' : 'default',
                        transition: 'opacity 0.2s',
                    }}
                >
                    {hasLink ? 'Open Resource' : 'Coming Soon'}
                </button>
            </div>

            {/* Iframe Modal Viewer */}
            {showViewer && (
                <div
                    onClick={() => setShowViewer(false)}
                    style={{
                        position: 'fixed', inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem',
                    }}
                >
                    <div
                        onClick={e => e.stopPropagation()}
                        style={{
                            width: '100%',
                            maxWidth: '900px',
                            height: '80vh',
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', borderBottom: '1px solid #e5e7eb' }}>
                            <span style={{ fontWeight: '700', color: '#1c1108', fontSize: '0.95rem' }}>{resource.title}</span>
                            <button
                                onClick={() => setShowViewer(false)}
                                style={{ background: 'none', border: 'none', fontSize: '1.25rem', cursor: 'pointer', color: '#6b7280' }}
                            >✕</button>
                        </div>
                        <iframe
                            src={resource.url}
                            title={resource.title}
                            style={{ flex: 1, border: 'none', width: '100%' }}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

const EmptyState = ({ category }) => (
    <div style={{
        gridColumn: '1 / -1',
        textAlign: 'center',
        padding: '4rem 2rem',
        color: '#9ca3af',
    }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📂</div>
        <p style={{ fontSize: '1rem', fontWeight: '600', color: '#6b7280', marginBottom: '0.5rem' }}>
            {category} materials are being prepared.
        </p>
        <p style={{ fontSize: '0.875rem' }}>
            Check back soon — we'll add resources here as they're created.
        </p>
    </div>
);

const Resources = () => {
    const [activeCategory, setActiveCategory] = useState('Math');
    const filtered = resources.filter(r => r.category === activeCategory);

    return (
        <>
            <PageHero
                title="Resources"
                subtitle="Free learning materials for students and families — added as we create them."
                imageSrc="/images/hero-resources.jpg"
            />

            <Section>
                {/* Category Tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                    {CATEGORIES.map(cat => (
                        <CategoryTab
                            key={cat}
                            label={cat}
                            active={activeCategory === cat}
                            onClick={() => setActiveCategory(cat)}
                        />
                    ))}
                </div>

                {/* Resource Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {filtered.length === 0
                        ? <EmptyState category={activeCategory} />
                        : filtered.map(r => <ResourceCard key={r.id} resource={r} />)
                    }
                </div>
            </Section>
        </>
    );
};

export default Resources;
