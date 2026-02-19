import React from 'react';

const PageHero = ({ title, subtitle, imageSrc, children }) => {
    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '450px', // slightly shorter than home potentially, or keep 500px standard
            minHeight: '400px',
            backgroundColor: '#1f2937', // Fallback color
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center'
        }}>
            {/* Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.3)'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    fontWeight: '700',
                    marginBottom: '1.5rem',
                    fontFamily: 'var(--font-heading)',
                    maxWidth: '900px',
                    margin: '0 auto 1.5rem auto',
                    lineHeight: '1.2'
                }}>
                    {title}
                </h1>
                {subtitle && (
                    <p style={{
                        fontSize: '1.25rem',
                        marginBottom: '2rem',
                        maxWidth: '700px',
                        margin: '0 auto 2rem auto',
                        fontWeight: '400',
                        fontFamily: 'var(--font-body)',
                        opacity: '0.95'
                    }}>
                        {subtitle}
                    </p>
                )}

                {children && (
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PageHero;
