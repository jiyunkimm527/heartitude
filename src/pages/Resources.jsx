import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { resources } from '../data/resources';
import { ExternalLink } from 'lucide-react';

const ResourceCard = ({ resource }) => (
    <div className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <span style={{
                fontSize: '0.75rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: resource.category === 'Math' ? 'var(--color-blue-program)' : '#d97706',
                backgroundColor: resource.category === 'Math' ? 'var(--color-blue-bg)' : '#fef3c7',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px'
            }}>
                {resource.category}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>{resource.type}</span>
        </div>

        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', lineHeight: '1.4' }}>
            {resource.title}
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)', marginBottom: '1rem', flex: 1 }}>
            {resource.description}
        </p>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
            <span style={{ backgroundColor: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>{resource.gradeLevel}</span>
            <span style={{ backgroundColor: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>{resource.language}</span>
        </div>

        <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ width: '100%', marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
        >
            Open <ExternalLink size={16} />
        </a>
    </div>
);

const Resources = () => {
    const [activeTab, setActiveTab] = useState('learning'); // 'learning' or 'bridgeline'

    const learningResources = resources.filter(r => r.section === 'learning');
    const bridgeLineResources = resources.filter(r => r.section === 'bridgeline');

    return (
        <>
            <PageHero
                title="Resources & Materials"
                subtitle="Access our library of tutoring worksheets, learning guides, and School Start Guide Packs."
                imageSrc="/images/hero-resources.jpg"
            />
            {/* Note Section moved below Hero */}
            <div style={{ padding: '2rem 0', textAlign: 'center', backgroundColor: '#fffbeb' }}>
                <p style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    color: '#92400e',
                    fontSize: '0.95rem',
                    fontWeight: '500'
                }}>
                    Note: Materials are updated regularly. Educational support only—no medical advice.
                </p>
            </div>

            <Section>
                {/* Tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem', gap: '1rem' }}>
                    <button
                        onClick={() => setActiveTab('learning')}
                        style={{
                            padding: '0.75rem 1.5rem',
                            borderRadius: '999px',
                            border: activeTab === 'learning' ? 'none' : '1px solid #d1d5db',
                            backgroundColor: activeTab === 'learning' ? 'var(--color-primary)' : 'transparent',
                            color: activeTab === 'learning' ? 'white' : 'var(--color-text)',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        Learning Materials
                    </button>
                    <button
                        onClick={() => setActiveTab('bridgeline')}
                        style={{
                            padding: '0.75rem 1.5rem',
                            borderRadius: '999px',
                            border: activeTab === 'bridgeline' ? 'none' : '1px solid #d1d5db',
                            backgroundColor: activeTab === 'bridgeline' ? 'var(--color-red-program)' : 'transparent',
                            color: activeTab === 'bridgeline' ? 'white' : 'var(--color-text)',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        School Start Guide Pack
                    </button>
                </div>

                {/* Content */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {activeTab === 'learning' && learningResources.map(resource => (
                        <ResourceCard key={resource.id} resource={resource} />
                    ))}
                    {activeTab === 'bridgeline' && bridgeLineResources.map(resource => (
                        <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
            </Section>
        </>
    );
};

export default Resources;
