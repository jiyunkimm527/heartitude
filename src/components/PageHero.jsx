import React from 'react';

const PageHero = ({ title, subtitle, imageSrc, children, height, accentColor = 'var(--color-amber)' }) => {
    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: height || '240px',
            minHeight: '200px',
            backgroundColor: '#1a2332',
            backgroundImage: imageSrc ? `url("${imageSrc}")` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            overflow: 'hidden',
        }}>
            {/* Gradient Overlay — darker at top for title readability, lighter at bottom */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.42) 60%, rgba(0,0,0,0.28) 100%)',
                zIndex: 1,
            }} />

            {/* Content */}
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <h1 style={{
                    fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                    fontWeight: '700',
                    fontFamily: 'var(--font-heading)',
                    maxWidth: '860px',
                    margin: '0 auto 1.25rem auto',
                    lineHeight: '1.15',
                    whiteSpace: 'pre-line',
                    letterSpacing: '-0.02em',
                    textShadow: '0 2px 12px rgba(0,0,0,0.3)',
                }}>
                    {title}
                </h1>
                {subtitle && (
                    <p style={{
                        fontSize: '1.1rem',
                        maxWidth: '660px',
                        margin: '0 auto',
                        fontWeight: '400',
                        fontFamily: 'var(--font-body)',
                        opacity: 0.88,
                        lineHeight: 1.65,
                        textShadow: '0 1px 6px rgba(0,0,0,0.25)',
                    }}>
                        {subtitle}
                    </p>
                )}
                {children && (
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.75rem' }}>
                        {children}
                    </div>
                )}
            </div>

            {/* Accent line — brand amber stripe at very bottom */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: accentColor,
                zIndex: 3,
            }} />
        </div>
    );
};

export default PageHero;
