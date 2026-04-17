import React, { useState } from 'react';
import Section from './Section';
import { useTranslation } from 'react-i18next';

const StoryMapSection = () => {
    const [imageError, setImageError] = useState(false);
    const { t } = useTranslation();

    return (
        <Section>
            <div className="text-center mb-8">
                <h2 style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-primary)'
                }}>
                    {t('storyMap.title')}
                </h2>
                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-text)',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    {t('storyMap.subtitle')}
                </p>
            </div>

            <div style={{
                maxWidth: '1100px',
                margin: '0 auto',
                backgroundColor: 'white',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                padding: '1rem'
            }}>
                {!imageError ? (
                    <img
                        src="/images/story-map.png"
                        alt="Project Story Map"
                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-md)' }}
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div style={{
                        padding: '4rem 2rem',
                        textAlign: 'center',
                        backgroundColor: '#f3f4f6',
                        borderRadius: 'var(--radius-md)',
                        border: '2px dashed #9ca3af',
                        color: '#4b5563'
                    }}>
                        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Image Placeholder</p>
                        <p>Story map image will be added here: /images/story-map.png</p>
                    </div>
                )}

                <div style={{
                    textAlign: 'center',
                    padding: '1.5rem 1rem 0.5rem 1rem',
                    color: 'var(--color-text-light)',
                    fontSize: '0.95rem',
                    fontStyle: 'italic'
                }}>
                    {t('storyMap.school')} + {t('storyMap.careSpace')} — BioRhythm Tools
                </div>
            </div>
        </Section>
    );
};

export default StoryMapSection;
