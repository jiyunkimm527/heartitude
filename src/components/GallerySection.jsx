import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Instagram, X } from 'lucide-react';
import Section from './Section';

const galleryItems = [
    {
        src: '/images/gallery/face_painting_1.jpg',
        title: 'Creative Smiles & Face Painting',
        tag: 'Latidos Volunteer Day',
        date: 'Jan 2026'
    },
    {
        src: '/images/gallery/face_painting_2.jpg',
        title: 'Bedside Companionship & Care',
        tag: 'Emotional Support',
        date: 'Jan 2026'
    },
    {
        src: '/images/gallery/face_painting_3.jpg',
        title: 'Bringing Warmth to Pediatric Patients',
        tag: 'Patient Care',
        date: 'Jan 2026'
    },
    {
        src: '/images/gallery/event_latidos_1.jpg',
        title: 'Community Gathering & Activities',
        tag: 'Fundación Latidos',
        date: 'Jan 2026'
    },
    {
        src: '/images/gallery/event_latidos_2.jpg',
        title: 'Interactive Fun & Learning Moments',
        tag: 'Student Volunteers',
        date: 'Jan 2026'
    },
    {
        src: '/images/gallery/event_latidos_3.jpg',
        title: 'Shared Moments of Joy',
        tag: 'Heartitude in Action',
        date: 'Jan 2026'
    },
];

const GallerySection = () => {
    const { t } = useTranslation();
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <Section style={{ backgroundColor: '#ffffff', padding: '5rem 0' }}>
            <div className="container">
                {/* Header */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginBottom: '2.5rem',
                    gap: '1rem'
                }}>
                    <div>
                        <span style={{
                            display: 'inline-block',
                            fontSize: '0.72rem',
                            fontWeight: '700',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: '#b45309',
                            marginBottom: '0.5rem',
                        }}>
                            {t('home.galleryTitle', 'See Us in Action')}
                        </span>
                        <h2 style={{
                            fontSize: 'var(--size-h2)',
                            fontWeight: '800',
                            color: 'var(--color-text-dark)',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.2,
                            margin: 0
                        }}>
                            {t('home.gallerySubtitle', 'Our work in the field.')}
                        </h2>
                    </div>

                    <a
                        href="https://instagram.com/heartitude_ba"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '0.9rem',
                            fontWeight: '700',
                            color: '#e11d48',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            padding: '0.5rem 1.2rem',
                            borderRadius: '999px',
                            backgroundColor: '#fff1f2',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = '#ffe4e6';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = '#fff1f2';
                        }}
                    >
                        <Instagram size={15} strokeWidth={2} />
                        {t('home.galleryFollow', 'Follow @heartitude_ba →')}
                    </a>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.25rem',
                }}>
                    {galleryItems.map((item, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedImg(item)}
                            style={{
                                position: 'relative',
                                borderRadius: '14px',
                                overflow: 'hidden',
                                height: '260px',
                                cursor: 'pointer',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                                transition: 'transform 0.28s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.14)';
                                const overlay = e.currentTarget.querySelector('.gallery-overlay');
                                if (overlay) overlay.style.opacity = '1';
                                const img = e.currentTarget.querySelector('img');
                                if (img) img.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.06)';
                                const overlay = e.currentTarget.querySelector('.gallery-overlay');
                                if (overlay) overlay.style.opacity = '0';
                                const img = e.currentTarget.querySelector('img');
                                if (img) img.style.transform = 'scale(1)';
                            }}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.35s ease',
                                }}
                            />

                            {/* Gradient overlay with details */}
                            <div
                                className="gallery-overlay"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.88) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)',
                                    opacity: 0,
                                    transition: 'opacity 0.25s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    padding: '1.25rem',
                                    color: 'white',
                                }}
                            >
                                <span style={{
                                    fontSize: '0.68rem',
                                    fontWeight: '700',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    color: '#fcd34d',
                                    marginBottom: '0.2rem',
                                }}>
                                    {item.tag}
                                </span>
                                <h4 style={{
                                    fontSize: '1rem',
                                    fontWeight: '700',
                                    lineHeight: 1.3,
                                    margin: 0,
                                }}>
                                    {item.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImg && (
                <div
                    onClick={() => setSelectedImg(null)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem',
                        backdropFilter: 'blur(5px)',
                    }}
                >
                    <div
                        onClick={e => e.stopPropagation()}
                        style={{
                            maxWidth: '900px',
                            maxHeight: '90vh',
                            position: 'relative',
                            backgroundColor: '#111827',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <button
                            onClick={() => setSelectedImg(null)}
                            style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: 'rgba(0,0,0,0.6)',
                                border: 'none',
                                color: 'white',
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                fontSize: '1.25rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                            }}
                        >
                            <X size={20} />
                        </button>
                        <img
                            src={selectedImg.src}
                            alt={selectedImg.title}
                            style={{
                                width: '100%',
                                maxHeight: '72vh',
                                objectFit: 'contain',
                                display: 'block',
                            }}
                        />
                        <div style={{ padding: '1.25rem 1.5rem', color: 'white' }}>
                            <span style={{ fontSize: '0.72rem', color: '#fcd34d', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                {selectedImg.tag} · {selectedImg.date}
                            </span>
                            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginTop: '0.2rem' }}>
                                {selectedImg.title}
                            </h3>
                        </div>
                    </div>
                </div>
            )}
        </Section>
    );
};

export default GallerySection;
