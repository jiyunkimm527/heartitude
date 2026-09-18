import React from 'react';

const PageHero = ({
    title,
    subtitle,
    slogan,
    children,
    tag,
    tagline,
    isHome = false,
    theme = 'dark',
    imageSrc,
    images,
    backgroundPosition = 'center',
    backgroundSize = 'cover',
    backgroundRepeat = 'no-repeat',
    overlay = true,
    centerDim = false,
    scrollImages = true,
    scrollDuration = 95,
    maxWidth = '1200px',
    boxed = true,
    height,
    imagePosition,
}) => {
    const isLight = theme === 'light';
    // Unified height: Home is 580px, all subpages are standardized to 280px
    const heroHeight = isHome ? (height || '580px') : (height || '280px');
    const minH = isHome ? '420px' : '220px';

    const hasImages = Array.isArray(images) && images.length > 0;
    const isBoxed = !isHome && boxed;
    const isCenterDim = !isLight && (centerDim || overlay === 'center');
    const hasFullOverlay = !isLight && overlay === true;

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            padding: isBoxed ? '1.5rem 1rem 0.75rem 1rem' : 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
            backgroundColor: 'transparent',
        }}>
            <style>{`
                @keyframes heroScrollLeft {
                    0% {
                        transform: translate3d(0%, 0, 0);
                    }
                    100% {
                        transform: translate3d(-25%, 0, 0);
                    }
                }
                .page-hero-track-scroll {
                    display: flex;
                    align-items: center;
                    height: 100%;
                    width: max-content;
                    will-change: transform;
                    backface-visibility: hidden;
                    transform: translateZ(0);
                    animation: heroScrollLeft ${scrollDuration}s linear infinite;
                }
                .page-hero-card:hover .page-hero-track-scroll {
                    animation-play-state: paused;
                }
                .page-hero-center-dim {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    pointer-events: none;
                    background: radial-gradient(
                        ellipse 70% 95% at 50% 50%,
                        rgba(255, 255, 255, 0.74) 0%,
                        rgba(255, 255, 255, 0.52) 42%,
                        rgba(255, 255, 255, 0.20) 72%,
                        rgba(255, 255, 255, 0) 90%
                    );
                }
                .page-hero-text-zone2 {
                    max-width: 760px;
                    margin: 0 auto;
                    background: transparent;
                    border: none;
                    box-shadow: none;
                    padding: 0.4rem 1rem;
                }
                @media (max-width: 768px) {
                    .page-hero-center-dim {
                        background: radial-gradient(
                            ellipse 90% 95% at 50% 50%,
                            rgba(255, 255, 255, 0.80) 0%,
                            rgba(255, 255, 255, 0.55) 50%,
                            rgba(255, 255, 255, 0) 92%
                        );
                    }
                    .page-hero-text-zone2 {
                        max-width: 95%;
                        padding: 0.4rem 0.5rem;
                    }
                }
            `}</style>
            {/* ── Boxed Hero Card (양옆 뻗어나가는 띠를 제거하고 본문 폭 1200px에 맞춘 세련된 카드) ── */}
            <div
                className="page-hero-card"
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: isBoxed ? (maxWidth || '1200px') : '100%',
                    height: heroHeight,
                    minHeight: minH,
                    backgroundColor: isLight ? '#f8fafc' : '#1a2332',
                    backgroundImage: isLight
                        ? 'linear-gradient(180deg, #fbfcfd 0%, #f1f5f9 100%)'
                        : ((!hasImages && imageSrc) ? `url("${imageSrc}")` : 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'),
                    backgroundSize: backgroundSize,
                    backgroundPosition: backgroundPosition,
                    backgroundRepeat: backgroundRepeat,
                    borderRadius: isBoxed ? '16px' : 0,
                    border: isLight ? '1px solid #e2e8f0' : 'none',
                    boxShadow: isLight
                        ? '0 4px 20px -2px rgba(15, 23, 42, 0.05)'
                        : (isBoxed ? '0 10px 28px -4px rgba(15, 23, 42, 0.16)' : 'none'),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isLight ? '#0f172a' : 'white',
                    textAlign: 'center',
                    overflow: 'hidden',
                }}
            >
                {/* Multi-image strip with continuous smooth rightward scrolling */}
                {/* Multi-image strip or static split photo fill */}
                {hasImages && (
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 0,
                        pointerEvents: 'none',
                        overflow: 'hidden',
                    }}>
                        {scrollImages ? (
                            <div className="page-hero-track-scroll" style={{ display: 'flex', height: '100%', width: 'max-content' }}>
                                {[...images, ...images, ...images, ...images].map((src, idx) => (
                                    <img
                                        key={idx}
                                        src={src}
                                        alt=""
                                        loading="eager"
                                        decoding="async"
                                        fetchPriority={idx < images.length ? 'high' : 'auto'}
                                        style={{
                                            height: '100%',
                                            width: 'auto',
                                            display: 'block',
                                            flexShrink: 0,
                                            marginRight: '2px',
                                            borderRadius: '1px',
                                        }}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: `repeat(${images.length}, 1fr)`,
                                width: '100%',
                                height: '100%',
                            }}>
                                {images.map((src, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            position: 'relative',
                                            width: (images.length === 4 && idx === 1) ? 'calc(100% + 1px)' : '100%',
                                            height: '100%',
                                            overflow: 'hidden',
                                            zIndex: (images.length === 4 && idx === 1) ? 1 : 0,
                                        }}
                                    >
                                        <img
                                            src={src}
                                            alt=""
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: imagePosition || (idx === 0 ? 'center 35%' : 'center 30%'),
                                                display: 'block',
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
                {/* Full Gradient Overlay */}
                {hasFullOverlay && (
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(15,23,42,0.72) 0%, rgba(15,23,42,0.52) 60%, rgba(15,23,42,0.75) 100%)',
                        zIndex: 1,
                    }} />
                )}
                {/* 3-Split Center Dim Overlay (Zone 2 어두움, Zone 1 & 3 사진 100% 보존) */}
                {isCenterDim && (
                    <div className="page-hero-center-dim" />
                )}
                <div className="container" style={{ position: 'relative', zIndex: 2, padding: '0 1.5rem' }}>
                    <div className={isCenterDim ? 'page-hero-text-zone2' : ''}>
                        {(tagline || tag) && (
                            <p style={{
                                fontSize: '0.78rem',
                                fontWeight: '700',
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                                color: isLight ? '#e11d48' : (isCenterDim ? '#e11d48' : '#fb7185'),
                                marginBottom: '0.45rem',
                                textShadow: isLight ? 'none' : (isCenterDim ? '0 1px 2px rgba(255,255,255,0.85)' : '0 1px 4px rgba(0,0,0,0.6)'),
                            }}>
                                —&ensp;{tagline || tag}
                            </p>
                        )}
                        <h1 style={{
                            fontSize: isHome ? 'clamp(1.75rem, 3.1vw, 2.75rem)' : 'clamp(1.75rem, 3.4vw, 2.25rem)',
                            fontWeight: '800',
                            fontFamily: 'var(--font-heading)',
                            maxWidth: isCenterDim ? '100%' : (isHome ? '1060px' : '860px'),
                            margin: '0 auto 0.5rem auto',
                            lineHeight: '1.22',
                            whiteSpace: 'pre-line',
                            textWrap: 'balance',
                            letterSpacing: '-0.02em',
                            color: (isLight || isCenterDim) ? '#0f172a' : '#ffffff',
                            textShadow: isLight
                                ? 'none'
                                : (isCenterDim
                                    ? '0 1px 2px rgba(255, 255, 255, 0.95), 0 0 18px rgba(255, 255, 255, 0.85)'
                                    : '0 2px 10px rgba(0, 0, 0, 0.65), 0 1px 3px rgba(0, 0, 0, 0.5)'),
                        }}>
                            {title}
                        </h1>
                        {subtitle && (
                            <p style={{
                                fontSize: isHome ? '1.1rem' : '0.94rem',
                                maxWidth: isCenterDim ? '580px' : '560px',
                                margin: '0 auto',
                                fontWeight: '500',
                                fontFamily: 'var(--font-body)',
                                whiteSpace: 'pre-line',
                                textWrap: 'balance',
                                color: isLight ? '#475569' : (isCenterDim ? '#1e293b' : 'rgba(255, 255, 255, 0.94)'),
                                lineHeight: 1.55,
                                textShadow: isLight
                                    ? 'none'
                                    : (isCenterDim
                                        ? '0 1px 2px rgba(255, 255, 255, 0.9), 0 0 12px rgba(255, 255, 255, 0.7)'
                                        : '0 1px 5px rgba(0, 0, 0, 0.6)'),
                            }}>
                                {subtitle}
                            </p>
                        )}
                        {slogan && (
                            <p style={{
                                fontSize: isHome ? '1.05rem' : '0.9rem',
                                fontFamily: 'var(--font-display)',
                                fontStyle: 'italic',
                                fontWeight: '600',
                                color: isCenterDim ? '#9a3412' : '#fde047',
                                letterSpacing: '0.03em',
                                margin: '0.75rem auto 0 auto',
                                textShadow: isCenterDim ? '0 1px 2px rgba(255, 255, 255, 0.8)' : '0 1px 6px rgba(0, 0, 0, 0.6)',
                                opacity: 0.95,
                            }}>
                                {slogan}
                            </p>
                        )}
                        {children && (
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
                                {children}
                            </div>
                        )}
                    </div>
                </div>
                {/* Bottom subtle border line (only for full-bleed non-boxed) */}
                {!isBoxed && (
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        background: 'rgba(255,255,255,0.12)',
                        zIndex: 3,
                    }} />
                )}
            </div>
        </div>
    );
};

export default PageHero;
