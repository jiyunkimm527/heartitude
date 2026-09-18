import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import {
    ExternalLink,
    Download,
    Eye,
    X,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import {
    englishResources,
    healResources,
    growResources,
    preKGrades,
    mathGrades,
} from '../data/resources';

// Convert Google Drive /view link to /preview for iframe embedding
const toEmbedUrl = (url) => {
    if (!url || url === '#') return url;
    return url.replace(/\/view(\?.*)?$/, '/preview');
};

// Convert Google Drive link to direct download URL
const toDownloadUrl = (url) => {
    if (!url || url === '#') return null;
    const match = url.match(/\/d\/([^/]+)/);
    if (!match) return url;
    return `https://drive.google.com/uc?export=download&id=${match[1]}`;
};

// Math Platform & App data (inline — no longer imported from resources.js)
const MATH_PLATFORM = {
    title: 'Elementary Math Learning Platform',
    description: 'A digital learning platform developed by Heartitude for use in math tutoring volunteer work, referencing MEDUCA national curriculum guidelines. It covers the elementary school range, providing structured units and guided exercises.',
    url: 'https://jy-matematica-panama.vercel.app/',
    pdfUrl: 'https://drive.google.com/file/d/13oXMoK-uR1h-LdfQWPyWmw-7-Pv6e2_h/view?usp=drive_link',
};

const KIDS_APP = {
    title: 'Kids Math Practice App',
    description: 'A mobile-friendly web app developed to engage pediatric cardiac patients in Panama in fun math learning (numbers and operations). It features number recognition, basic arithmetic, and interactive games, enabling in-person tutoring without the need for additional physical materials.',
    url: 'https://latidos-ninos.vercel.app/index.html',
};

const Resources = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [embedUrl, setEmbedUrl] = useState(null);
    const [embedTitle] = useState('');
    const [showMaterials, setShowMaterials] = useState(false);
    const [showKidsMaterials, setShowKidsMaterials] = useState(false);
    const [showEnglishMaterials, setShowEnglishMaterials] = useState(false);
    const [activeGradeId, setActiveGradeId] = useState('mg1');
    const [activeKidsGradeId] = useState('pk1');

    // Handle hash scrolling from navbar dropdown
    useEffect(() => {
        const scrollToHash = () => {
            const hash = window.location.hash || location.hash;
            if (!hash) return;
            const id = hash.replace('#', '');

            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    const navHeader = document.querySelector('header');
                    const navHeight = navHeader ? navHeader.getBoundingClientRect().height : 112;
                    const y = el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
                    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
                }
            }, 80);
        };

        scrollToHash();
        window.addEventListener('hashchange', scrollToHash);
        return () => window.removeEventListener('hashchange', scrollToHash);
    }, [location.hash, location.pathname]);


    return (
        <>
            {/* ── Page Hero ── */}
            <PageHero
                theme="light"
                height="180px"
                title={t('resources.heroTitle', 'Resources')}
                subtitle={t('resources.heroSubtitle', "Math learning platforms, an English conversation curriculum, and the Latidos patient management system\n— tools built and maintained by Heartitude for our programs in Panama.")}
            />

            {/* ── Main Content Area ── */}
            <div style={{ background: '#ffffff', padding: '3.5rem 0 6rem' }}>
                <div className="container">

                    {/* ══════════════════════════════════════════════════════════════
                        MATH
                    ══════════════════════════════════════════════════════════════ */}
                    <div id="math" style={{ marginBottom: '5.5rem', scrollMarginTop: '120px' }}>



                            {/* ── Math Cards ── */}
                            <div
                                style={{ marginBottom: '2.5rem' }}
                            >
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                    gap: '1.25rem',
                                }}>

                                    {/* ── Card 1: Learning Platform ── */}
                                    <div style={{
                                        background: '#ffffff',
                                        border: '1px solid #e2e8f0',
                                        padding: '2rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1.25rem',
                                        transition: 'border-color 0.2s ease',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.borderColor = '#0f172a'}
                                    onMouseLeave={e => e.currentTarget.style.borderColor = '#e2e8f0'}
                                    >
                                        {/* Top row: label + QR placeholder */}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                                            <div style={{ flex: 1 }}>
                                                <span style={{
                                                    display: 'inline-block',
                                                    fontSize: '0.68rem',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.12em',
                                                    color: '#64748b',
                                                    marginBottom: '0.4rem',
                                                }}>Web Platform</span>
                                                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0f172a', margin: '0 0 0.55rem', lineHeight: 1.3, fontFamily: 'var(--font-heading)' }}>
                                                    {MATH_PLATFORM.title}
                                                </h3>
                                                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                                                    {MATH_PLATFORM.description}
                                                </p>
                                            </div>
                                            {/* QR Code — Math Platform */}
                                            <a
                                                href={MATH_PLATFORM.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="Scan to open Math Platform"
                                                style={{
                                                    flexShrink: 0,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    gap: '0.3rem',
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                <img
                                                    src="https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=https://jy-matematica-panama.vercel.app/&margin=4&color=0f172a&bgcolor=ffffff"
                                                    alt="QR code for Math Learning Platform"
                                                    style={{
                                                        width: '96px',
                                                        height: '96px',
                                                        borderRadius: '2px',
                                                        border: '1px solid #e2e8f0',
                                                        display: 'block',
                                                    }}
                                                />
                                                <span style={{ fontSize: '0.6rem', color: '#94a3b8', fontWeight: '600', textAlign: 'center', lineHeight: 1.2 }}>Scan / Open</span>
                                            </a>
                                        </div>

                                        {/* Action buttons */}
                                        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', paddingTop: '0.5rem', borderTop: '1px solid #f1f5f9' }}>
                                            <a
                                                href={MATH_PLATFORM.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '0.4rem',
                                                    padding: '0.55rem 1.1rem',
                                                    background: '#0f172a',
                                                    color: '#ffffff',
                                                    borderRadius: '4px',
                                                    fontSize: '0.82rem',
                                                    fontWeight: '600',
                                                    textDecoration: 'none',
                                                    transition: 'opacity 0.15s',
                                                }}
                                                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                                                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                            >
                                                <ExternalLink size={13} />
                                                Visit Platform
                                            </a>
                                            <button
                                                onClick={() => setShowMaterials(v => !v)}
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '0.4rem',
                                                    padding: '0.55rem 1.1rem',
                                                    background: showMaterials ? '#0f172a' : '#ffffff',
                                                    color: showMaterials ? '#ffffff' : '#334155',
                                                    border: '1px solid #cbd5e1',
                                                    borderRadius: '4px',
                                                    fontSize: '0.82rem',
                                                    fontWeight: '600',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.15s',
                                                }}
                                            >
                                                <Download size={13} />
                                                Learning Materials
                                            </button>
                                        </div>
                                    </div>

                                    {/* ── Card 2: Kids App ── */}
                                    <div style={{
                                        background: '#ffffff',
                                        border: '1px solid #e2e8f0',
                                        padding: '2rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1.25rem',
                                        transition: 'border-color 0.2s ease',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.borderColor = '#0f172a'}
                                    onMouseLeave={e => e.currentTarget.style.borderColor = '#e2e8f0'}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                                            <div style={{ flex: 1 }}>
                                                <span style={{
                                                    display: 'inline-block',
                                                    fontSize: '0.68rem',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.12em',
                                                    color: '#64748b',
                                                    marginBottom: '0.4rem',
                                                }}>Mobile App</span>
                                                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0f172a', margin: '0 0 0.55rem', lineHeight: 1.3, fontFamily: 'var(--font-heading)' }}>
                                                    {KIDS_APP.title}
                                                </h3>
                                                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                                                    {KIDS_APP.description}
                                                </p>
                                            </div>
                                            {/* QR Code — Kids App */}
                                            <a
                                                href={KIDS_APP.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="Scan to open Kids App"
                                                style={{
                                                    flexShrink: 0,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    gap: '0.3rem',
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                <img
                                                    src="https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=https://latidos-ninos.vercel.app/index.html&margin=4&color=0f172a&bgcolor=ffffff"
                                                    alt="QR code for Kids Math Practice App"
                                                    style={{
                                                        width: '96px',
                                                        height: '96px',
                                                        borderRadius: '2px',
                                                        border: '1px solid #e2e8f0',
                                                        display: 'block',
                                                    }}
                                                />
                                                <span style={{ fontSize: '0.6rem', color: '#94a3b8', fontWeight: '600', textAlign: 'center', lineHeight: 1.2 }}>Scan / Open</span>
                                            </a>
                                        </div>

                                        {/* Action buttons */}
                                        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', paddingTop: '0.5rem', borderTop: '1px solid #f1f5f9' }}>
                                            <a
                                                href={KIDS_APP.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '0.4rem',
                                                    padding: '0.55rem 1.1rem',
                                                    background: '#0f172a',
                                                    color: '#ffffff',
                                                    borderRadius: '4px',
                                                    fontSize: '0.82rem',
                                                    fontWeight: '600',
                                                    textDecoration: 'none',
                                                    transition: 'opacity 0.15s',
                                                }}
                                                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                                                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                            >
                                                <ExternalLink size={13} />
                                                Open App
                                            </a>
                                            <button
                                                onClick={() => setShowKidsMaterials(v => !v)}
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '0.4rem',
                                                    padding: '0.55rem 1.1rem',
                                                    background: showKidsMaterials ? '#0f172a' : '#ffffff',
                                                    color: showKidsMaterials ? '#ffffff' : '#334155',
                                                    border: '1px solid #cbd5e1',
                                                    borderRadius: '4px',
                                                    fontSize: '0.82rem',
                                                    fontWeight: '600',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.15s',
                                                }}
                                            >
                                                <Download size={13} />
                                                Pre-K Worksheets
                                            </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>





                    {/* Divider between groups */}
                    <div style={{ borderBottom: '1px solid #e2e8f0', marginBottom: '3.5rem' }} />

                            {/* ── English + Latidos Cards ── */}
                            <div
                                id="english"
                                style={{
                                    scrollMarginTop: '120px',
                                    marginBottom: '2.5rem',
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                    gap: '1.25rem',
                                }}
                            >
                                {/* English Card */}
                                <div style={{
                                    background: '#ffffff',
                                    border: '1px solid #e2e8f0',
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.25rem',
                                    transition: 'border-color 0.2s ease',
                                }}
                                onMouseEnter={e => e.currentTarget.style.borderColor = '#0f172a'}
                                onMouseLeave={e => e.currentTarget.style.borderColor = '#e2e8f0'}
                                >
                                    {/* Label + title + description */}
                                    <div>
                                        <span style={{
                                            display: 'inline-block',
                                            fontSize: '0.68rem',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.12em',
                                            color: '#64748b',
                                            marginBottom: '0.4rem',
                                        }}>English Conversation Program</span>
                                        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0f172a', margin: '0 0 0.55rem', lineHeight: 1.3, fontFamily: 'var(--font-heading)' }}>
                                            Virtual English Conversation Curriculum
                                        </h3>
                                        <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                                            A 10-topic curriculum created and used during online English conversation sessions with public school students, in partnership with Fundación Gabriel Lewis Galindo (FGLG). The materials cover real-world dialogue, daily routines, and cultural topics, and are available for PDF download.
                                        </p>
                                    </div>

                                    {/* Action buttons */}
                                    <div style={{ paddingTop: '0.5rem', borderTop: '1px solid #f1f5f9', marginTop: 'auto' }}>
                                        <button
                                            onClick={() => setShowEnglishMaterials(true)}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.4rem',
                                                padding: '0.55rem 1.1rem',
                                                background: '#ffffff',
                                                color: '#334155',
                                                border: '1px solid #cbd5e1',
                                                borderRadius: '4px',
                                                fontSize: '0.82rem',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                transition: 'all 0.15s',
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.borderColor = '#94a3b8'}
                                            onMouseLeave={e => e.currentTarget.style.borderColor = '#cbd5e1'}
                                        >
                                            <Download size={13} />
                                            Learning Materials
                                        </button>
                                    </div>
                                </div>

                                {/* Latidos Card */}
                                <div style={{
                                    background: '#ffffff',
                                    border: '1px solid #e2e8f0',
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.25rem',
                                    transition: 'border-color 0.2s ease',
                                }}
                                onMouseEnter={e => e.currentTarget.style.borderColor = '#0f172a'}
                                onMouseLeave={e => e.currentTarget.style.borderColor = '#e2e8f0'}
                                >
                                    {/* Top row: label + QR */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{ flex: 1 }}>
                                            <span style={{
                                                display: 'inline-block',
                                                fontSize: '0.68rem',
                                                fontWeight: '700',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.12em',
                                                color: '#64748b',
                                                marginBottom: '0.4rem',
                                            }}>Web Platform</span>
                                            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0f172a', margin: '0 0 0.55rem', lineHeight: 1.3, fontFamily: 'var(--font-heading)' }}>
                                                Latidos Patient Management Platform
                                            </h3>
                                            <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                                                Integrated management system for Fundación Latidos — tracking pediatric cardiac patient records, beneficiary follow-up, volunteer coordination, donation ledgers, and material aid distribution.
                                            </p>
                                        </div>
                                        {/* QR Code */}
                                        <a
                                            href="https://latidos-platform.vercel.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Scan to open Latidos Platform"
                                            style={{
                                                flexShrink: 0,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '0.3rem',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            <img
                                                src="https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=https://latidos-platform.vercel.app/&margin=4&color=0f172a&bgcolor=ffffff"
                                                alt="QR code for Latidos Management Platform"
                                                style={{
                                                    width: '96px',
                                                    height: '96px',
                                                    borderRadius: '2px',
                                                    border: '1px solid #e2e8f0',
                                                    display: 'block',
                                                }}
                                            />
                                            <span style={{ fontSize: '0.6rem', color: '#94a3b8', fontWeight: '600', textAlign: 'center', lineHeight: 1.2 }}>Scan / Open</span>
                                        </a>
                                    </div>

                                    {/* Action button */}
                                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', paddingTop: '0.5rem', borderTop: '1px solid #f1f5f9', marginTop: 'auto' }}>
                                        <a
                                            href="https://latidos-platform.vercel.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.4rem',
                                                padding: '0.55rem 1.1rem',
                                                background: '#0f172a',
                                                color: '#ffffff',
                                                borderRadius: '4px',
                                                fontSize: '0.82rem',
                                                fontWeight: '600',
                                                textDecoration: 'none',
                                                transition: 'opacity 0.15s',
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                        >
                                            <ExternalLink size={13} />
                                            Visit Platform
                                        </a>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>

            {/* ── English Learning Materials Modal ── */}
            {showEnglishMaterials && (
                <div
                    onClick={() => setShowEnglishMaterials(false)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(15, 23, 42, 0.7)',
                        backdropFilter: 'blur(5px)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.5rem',
                    }}
                >
                    <div
                        onClick={e => e.stopPropagation()}
                        style={{
                            width: '100%',
                            maxWidth: '680px',
                            maxHeight: '80vh',
                            backgroundColor: '#ffffff',
                            borderRadius: '12px',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {/* Modal Header */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '1rem 1.25rem',
                            borderBottom: '1px solid #e2e8f0',
                            background: '#0f172a',
                            color: '#ffffff',
                            flexShrink: 0,
                        }}>
                            <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>
                                English Curriculum — Session Materials (10 Sessions)
                            </span>
                            <button
                                onClick={() => setShowEnglishMaterials(false)}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#cbd5e1',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '4px',
                                }}
                                onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                                onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Grade subtitle */}
                        <div style={{ padding: '0.65rem 1.25rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', flexShrink: 0 }}>
                            <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '500' }}>
                                Virtual English Conversation Program · Fundación Gabriel Lewis Galindo (FGLG)
                            </span>
                        </div>

                        {/* Session Rows */}
                        <div style={{ overflowY: 'auto', flex: 1 }}>
                            {englishResources.map((session, idx) => {
                                const dlUrl = toDownloadUrl(session.url);
                                return (
                                    <div
                                        key={session.id}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '1rem 1.25rem',
                                            borderBottom: idx < englishResources.length - 1 ? '1px solid #f1f5f9' : 'none',
                                            gap: '1rem',
                                            transition: 'background 0.12s',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'}
                                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <span style={{
                                                fontSize: '0.68rem',
                                                fontWeight: '700',
                                                color: '#475569',
                                                background: '#f1f5f9',
                                                padding: '0.2rem 0.5rem',
                                                borderRadius: '4px',
                                                minWidth: '52px',
                                                textAlign: 'center',
                                            }}>
                                                S{session.sessionNum}
                                            </span>
                                            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1e293b' }}>
                                                {session.title}
                                            </span>
                                        </div>
                                        <a
                                            href={dlUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.35rem',
                                                padding: '0.42rem 0.9rem',
                                                background: '#0f172a',
                                                color: '#ffffff',
                                                borderRadius: '6px',
                                                fontSize: '0.78rem',
                                                fontWeight: '600',
                                                textDecoration: 'none',
                                                whiteSpace: 'nowrap',
                                                flexShrink: 0,
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                        >
                                            <Download size={13} />
                                            Download PDF
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* ── Learning Materials Modal ── */}
            {showMaterials && (() => {
                const activeGrade = mathGrades.find(g => g.id === activeGradeId) || mathGrades[0];
                return (
                    <div
                        onClick={() => setShowMaterials(false)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            backgroundColor: 'rgba(15, 23, 42, 0.7)',
                            backdropFilter: 'blur(5px)',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1.5rem',
                        }}
                    >
                        <div
                            onClick={e => e.stopPropagation()}
                            style={{
                                width: '100%',
                                maxWidth: '680px',
                                maxHeight: '80vh',
                                backgroundColor: '#ffffff',
                                borderRadius: '12px',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {/* Modal Header */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '1rem 1.25rem',
                                borderBottom: '1px solid #e2e8f0',
                                background: '#0f172a',
                                color: '#ffffff',
                                flexShrink: 0,
                            }}>
                                <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>
                                    Math Curriculum — Learning Materials
                                </span>
                                <button
                                    onClick={() => setShowMaterials(false)}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: '#cbd5e1',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '4px',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                                    onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Grade Tabs */}
                            <div style={{ display: 'flex', overflowX: 'auto', borderBottom: '1px solid #e2e8f0', background: '#f8fafc', flexShrink: 0 }}>
                                {mathGrades.map(grade => {
                                    const isActive = grade.id === activeGradeId;
                                    return (
                                        <button
                                            key={grade.id}
                                            onClick={() => setActiveGradeId(grade.id)}
                                            style={{
                                                padding: '0.65rem 1.1rem',
                                                border: 'none',
                                                background: 'transparent',
                                                color: isActive ? '#0f172a' : '#64748b',
                                                fontWeight: isActive ? '700' : '500',
                                                fontSize: '0.82rem',
                                                cursor: 'pointer',
                                                borderBottom: isActive ? '2px solid #0f172a' : '2px solid transparent',
                                                whiteSpace: 'nowrap',
                                                transition: 'all 0.15s',
                                            }}
                                        >
                                            {grade.label}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Grade subtitle */}
                            <div style={{ padding: '0.65rem 1.25rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', flexShrink: 0 }}>
                                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{activeGrade.subtext}</span>
                            </div>

                            {/* Unit Rows — scrollable */}
                            <div style={{ overflowY: 'auto', flex: 1 }}>
                                {activeGrade.units.map((unit, idx) => {
                                    const dlUrl = toDownloadUrl(unit.url);
                                    return (
                                        <div
                                            key={unit.id}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '1rem 1.25rem',
                                                borderBottom: idx < activeGrade.units.length - 1 ? '1px solid #f1f5f9' : 'none',
                                                gap: '1rem',
                                                transition: 'background 0.12s',
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'}
                                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <span style={{
                                                    fontSize: '0.68rem',
                                                    fontWeight: '700',
                                                    color: '#475569',
                                                    background: '#f1f5f9',
                                                    padding: '0.2rem 0.5rem',
                                                    borderRadius: '4px',
                                                    minWidth: '52px',
                                                    textAlign: 'center',
                                                }}>
                                                    {unit.code || `U${idx + 1}`}
                                                </span>
                                                <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1e293b' }}>
                                                    {unit.title}
                                                </span>
                                            </div>
                                            <a
                                                href={dlUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '0.35rem',
                                                    padding: '0.42rem 0.9rem',
                                                    background: '#0f172a',
                                                    color: '#ffffff',
                                                    borderRadius: '6px',
                                                    fontSize: '0.78rem',
                                                    fontWeight: '600',
                                                    textDecoration: 'none',
                                                    whiteSpace: 'nowrap',
                                                    flexShrink: 0,
                                                }}
                                                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                                                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                            >
                                                <Download size={13} />
                                                Download PDF
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })()}

            {/* ── Kids Learning Materials Modal (Pre-K) ── */}
            {showKidsMaterials && (() => {
                const activeGrade = preKGrades.find(g => g.id === activeKidsGradeId) || preKGrades[0];
                return (
                    <div
                        onClick={() => setShowKidsMaterials(false)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            backgroundColor: 'rgba(15, 23, 42, 0.7)',
                            backdropFilter: 'blur(5px)',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1.5rem',
                        }}
                    >
                        <div
                            onClick={e => e.stopPropagation()}
                            style={{
                                width: '100%',
                                maxWidth: '580px',
                                maxHeight: '80vh',
                                backgroundColor: '#ffffff',
                                borderRadius: '12px',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {/* Modal Header */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '1rem 1.25rem',
                                borderBottom: '1px solid #e2e8f0',
                                background: '#0f172a',
                                color: '#ffffff',
                                flexShrink: 0,
                            }}>
                                <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>
                                    Kids Math App — Pre-K Learning Materials
                                </span>
                                <button
                                    onClick={() => setShowKidsMaterials(false)}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: '#cbd5e1',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '4px',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                                    onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Grade subtitle */}
                            <div style={{ padding: '0.65rem 1.25rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', flexShrink: 0 }}>
                                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '500' }}>{activeGrade.subtext}</span>
                            </div>

                            {/* Unit Rows */}
                            <div style={{ overflowY: 'auto', flex: 1 }}>
                                {activeGrade.units.map((unit, idx) => {
                                    const dlUrl = toDownloadUrl(unit.url);
                                    return (
                                        <div
                                            key={unit.id}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '1rem 1.25rem',
                                                borderBottom: idx < activeGrade.units.length - 1 ? '1px solid #f1f5f9' : 'none',
                                                gap: '1rem',
                                                transition: 'background 0.12s',
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'}
                                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <span style={{
                                                    fontSize: '0.68rem',
                                                    fontWeight: '700',
                                                    color: '#475569',
                                                    background: '#f1f5f9',
                                                    padding: '0.2rem 0.5rem',
                                                    borderRadius: '4px',
                                                    minWidth: '52px',
                                                    textAlign: 'center',
                                                }}>
                                                    {unit.code || `U${idx + 1}`}
                                                </span>
                                                <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1e293b' }}>
                                                    {unit.title}
                                                </span>
                                            </div>
                                            <a
                                                href={dlUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '0.35rem',
                                                    padding: '0.42rem 0.9rem',
                                                    background: '#0f172a',
                                                    color: '#ffffff',
                                                    borderRadius: '6px',
                                                    fontSize: '0.78rem',
                                                    fontWeight: '600',
                                                    textDecoration: 'none',
                                                    whiteSpace: 'nowrap',
                                                    flexShrink: 0,
                                                }}
                                                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                                                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                            >
                                                <Download size={13} />
                                                Download PDF
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })()}

            {/* ── Embedded Modal Viewer ── */}
            {embedUrl && (
                <div
                    onClick={() => setEmbedUrl(null)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(15, 23, 42, 0.7)',
                        backdropFilter: 'blur(5px)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.5rem',
                    }}
                >
                    <div
                        onClick={e => e.stopPropagation()}
                        style={{
                            width: '100%',
                            maxWidth: '1200px',
                            height: '85vh',
                            backgroundColor: '#ffffff',
                            borderRadius: '12px',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid #e2e8f0',
                        }}
                    >
                        {/* Title Bar */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0.9rem 1.25rem',
                            borderBottom: '1px solid #e2e8f0',
                            background: '#0f172a',
                            color: '#ffffff',
                        }}>
                            <span style={{ fontWeight: '700', fontSize: '0.95rem', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingRight: '1rem' }}>
                                {embedTitle}
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                {embedUrl.includes('drive.google.com') ? (
                                    <a
                                        href={toDownloadUrl(embedUrl)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.35rem',
                                            padding: '0.4rem 0.85rem',
                                            borderRadius: '5px',
                                            background: '#ffffff',
                                            color: '#0f172a',
                                            fontWeight: '600',
                                            fontSize: '0.78rem',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <Download size={13} />
                                        Download PDF
                                    </a>
                                ) : (
                                    <a
                                        href={embedUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.35rem',
                                            padding: '0.4rem 0.85rem',
                                            borderRadius: '5px',
                                            background: '#ffffff',
                                            color: '#0f172a',
                                            fontWeight: '600',
                                            fontSize: '0.78rem',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <ExternalLink size={13} />
                                        Open in New Tab
                                    </a>
                                )}
                                <button
                                    onClick={() => setEmbedUrl(null)}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: '#cbd5e1',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '4px',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                                    onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Iframe content */}
                        <iframe
                            src={toEmbedUrl(embedUrl)}
                            title={embedTitle}
                            style={{
                                flex: 1,
                                border: 'none',
                                width: '100%',
                                height: '100%',
                                background: '#ffffff',
                            }}
                        />
                    </div>
                </div>
            )}

        </>
    );
};

export default Resources;
