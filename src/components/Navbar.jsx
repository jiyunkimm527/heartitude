import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Mail, Instagram, Globe } from 'lucide-react';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [activeDropdown, setActiveDropdown] = useState(null); // 'about' | 'programs' | 'resources' | 'involved' | null
    const closeTimerRef = useRef(null);
    const navRef = useRef(null);
    const location = useLocation();

    // Submenu definitions with translation support
    const aboutMenu = [
        { label: t('nav.aboutSub.whoWeAre', 'Who We Are'),              path: '/about#who-we-are' },
        { label: t('nav.aboutSub.story', 'Our Story'),                  path: '/about#founder-story' },
        { label: t('nav.aboutSub.missionVision', 'Mission & Vision'),   path: '/about#mission-vision' },
    ];

    const programsMenu = [
        { label: t('nav.programsSub.math', 'Math Tutoring'),                 path: '/programs/math-tutoring'       },
        { label: t('nav.programsSub.english', 'English Tutoring'),           path: '/programs/english-tutoring'    },
        { label: t('nav.programsSub.digital', 'Digital Math Platform'),      path: '/programs/platform'            },
        { label: t('nav.programsSub.patients', 'Patient Registry'),          path: '/programs/patient-management'  },
        { label: t('nav.programsSub.hospital', 'Community Events & Fundraising'),       path: '/programs/hospital-care'       },
        { label: t('nav.programsSub.environment', 'BioRhythm Research'),   path: '/programs/environment-research'},
    ];


    const getInvolvedMenu = [
        { label: 'Where You Can Help',    path: '/get-involved#programs' },
        { label: 'Volunteer Application', path: '/get-involved#apply'    },
        { label: 'Donate',               path: '/get-involved#donate'   },
    ];

    // Whenever URL changes, close dropdowns
    const [prevPath, setPrevPath] = useState(location.pathname);
    if (prevPath !== location.pathname) {
        setPrevPath(location.pathname);
        setActiveDropdown(null);
    }

    const handleOpen = (name) => {
        if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
        setActiveDropdown(name);
    };

    const handleClose = () => {
        if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
        closeTimerRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 180);
    };

    const handleItemClick = () => {
        if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
        setActiveDropdown(null);
    };

    const handleAboutItemClick = (path) => {
        if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
        setActiveDropdown(null);

        if (path.includes('#')) {
            const hash = path.split('#')[1];
            if (location.pathname === '/about') {
                const el = document.getElementById(hash);
                if (el) {
                    const navHeader = document.querySelector('header');
                    const navHeight = navHeader ? navHeader.getBoundingClientRect().height : 112;
                    const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }
        }
    };

    const handleResourcesItemClick = (path) => {
        if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
        setActiveDropdown(null);

        if (path.includes('#')) {
            const hash = path.split('#')[1];
            if (location.pathname === '/resources') {
                const el = document.getElementById(hash);
                if (el) {
                    const navHeader = document.querySelector('header');
                    const navHeight = navHeader ? navHeader.getBoundingClientRect().height : 112;
                    const y = el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
                    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
                }
            }
        }
    };

    const handleGetInvolvedItemClick = (path) => {
        if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
        setActiveDropdown(null);

        if (path.includes('#')) {
            const hash = path.split('#')[1];
            if (location.pathname === '/get-involved') {
                const el = document.getElementById(hash);
                if (el) {
                    const navHeader = document.querySelector('header');
                    const navHeight = navHeader ? navHeader.getBoundingClientRect().height : 112;
                    const y = el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
                    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
                }
            }
        }
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
            if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
        };
    }, []);

    const navLinksLeft = [
        { name: t('nav.home'), path: '/', cls: 'nav-link-home' },
    ];
    const navLinksRight = [
        { name: t('nav.contact'),    path: '/contact',     cls: 'nav-link-contact'   },
    ];
    const allNavLinks = [
        { name: t('nav.home'),       path: '/' },
        { name: t('nav.about'),      path: '/about' },
        { name: t('nav.programs'),   path: '/programs' },
        { name: t('nav.impact'),     path: '/impact' },
        { name: t('nav.resources'),  path: '/resources' },
        { name: t('nav.getInvolved'),path: '/get-involved' },
        { name: t('nav.contact'),    path: '/contact' },
    ];

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
        }}>
            {/* ── Top Contact Bar ── */}
            <div style={{
                background: '#54311c',
                color: '#ffffff',
                fontSize: '0.72rem',
                letterSpacing: '0.02em',
                fontWeight: '500',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
                <div className="container" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.42rem 0',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                }}>
                    {/* Left: Contact Info */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        flexWrap: 'wrap',
                    }}>
                        <a
                            href="mailto:jiyunkimm0503@gmail.com"
                            style={{
                                color: '#ffffff',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.45rem',
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = '#fbbf24'}
                            onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
                        >
                            <Mail size={13} strokeWidth={2.2} />
                            <span>jiyunkimm0503@gmail.com</span>
                        </a>

                        <span style={{
                            width: '1px',
                            height: '11px',
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                            display: 'inline-block',
                        }} />

                        <a
                            href="https://instagram.com/heartitude_ba"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: '#ffffff',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.45rem',
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = '#fbbf24'}
                            onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
                        >
                            <Instagram size={13} strokeWidth={2.2} />
                            <span>@heartitude_ba</span>
                        </a>
                    </div>

                    {/* Right: Language Switcher */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        userSelect: 'none',
                    }}>
                        <Globe size={13} strokeWidth={2} style={{ opacity: 0.85 }} />
                        <button
                            type="button"
                            onClick={() => changeLanguage('en')}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#ffffff',
                                padding: '0 2px',
                                cursor: 'pointer',
                                fontSize: '0.72rem',
                                fontFamily: 'inherit',
                                letterSpacing: '0.04em',
                                fontWeight: i18n.language !== 'es' ? '700' : '400',
                                opacity: i18n.language !== 'es' ? 1 : 0.65,
                                transition: 'opacity 0.2s, color 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                            onMouseLeave={e => e.currentTarget.style.opacity = i18n.language !== 'es' ? '1' : '0.65'}
                            aria-label="Switch to English"
                        >
                            EN
                        </button>
                        <span style={{ opacity: 0.35, fontSize: '0.65rem' }}>|</span>
                        <button
                            type="button"
                            onClick={() => changeLanguage('es')}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#ffffff',
                                padding: '0 2px',
                                cursor: 'pointer',
                                fontSize: '0.72rem',
                                fontFamily: 'inherit',
                                letterSpacing: '0.04em',
                                fontWeight: i18n.language === 'es' ? '700' : '400',
                                opacity: i18n.language === 'es' ? 1 : 0.65,
                                transition: 'opacity 0.2s, color 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                            onMouseLeave={e => e.currentTarget.style.opacity = i18n.language === 'es' ? '1' : '0.65'}
                            aria-label="Cambiar a Español"
                        >
                            ES
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Main Navbar ── */}
            <nav ref={navRef} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.97)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid #e5e7eb'
            }}>
            <style>{`
                @media (min-width: 900px) {
                    .desktop-nav { display: flex !important; }
                    .mobile-menu-btn { display: none !important; }
                    .mobile-scroll-nav { display: none !important; }
                }
                @media (max-width: 899px) {
                    .mobile-scroll-nav { display: flex !important; }
                }
                .nav-link-item {
                    color: #475569;
                    font-weight: 600;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    font-family: var(--font-heading);
                    white-space: nowrap;
                    text-decoration: none;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0.35rem 0;
                    transition: color 0.2s;
                    position: relative;
                }
                .nav-link-item.nav-active {
                    color: #1c1108;
                    font-weight: 700;
                }
                .nav-link-item:hover { color: #1c1108; }

                /* Programs dropdown trigger */
                .programs-trigger {
                    color: #475569;
                    font-weight: 600;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    font-family: var(--font-heading);
                    white-space: nowrap;
                    background: none;
                    border: none;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.25rem;
                    padding: 0.35rem 0;
                    position: relative;
                    transition: color 0.2s;
                }
                .programs-trigger:hover,
                .programs-trigger.active {
                    color: #1c1108;
                    font-weight: 700;
                }
                .programs-trigger .chevron {
                    transition: transform 0.2s;
                }
                .programs-trigger .chevron.open {
                    transform: rotate(180deg);
                }

                /* Dropdown wrapper & chevron */
                .nav-dropdown-wrapper {
                    position: relative;
                    height: 100%;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                .nav-dropdown-wrapper.is-open .chevron,
                .nav-dropdown-wrapper .chevron.open {
                    transform: rotate(180deg) !important;
                }

                /* Dropdown panel — FGLG style flush from navbar bottom border */
                .nav-dropdown-panel,
                .programs-dropdown {
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-4px);
                    background: #ffffff;
                    border: 1px solid #e5e7eb;
                    border-top: none;
                    border-radius: 0 0 8px 8px;
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
                    padding: 0.4rem 0;
                    min-width: 230px;
                    z-index: 1000;
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                    transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s ease;
                }

                /* Vertical hover bridge connecting trigger link to dropdown menu */
                .nav-dropdown-panel::before,
                .programs-dropdown::before {
                    content: '';
                    position: absolute;
                    top: -12px;
                    left: 0;
                    right: 0;
                    height: 12px;
                    background: transparent;
                }

                /* Visibility STRICTLY controlled by React activeDropdown state via .is-open (no CSS hover collisions) */
                .nav-dropdown-panel.is-open,
                .programs-dropdown.is-open {
                    opacity: 1 !important;
                    visibility: visible !important;
                    pointer-events: auto !important;
                    transform: translateX(-50%) translateY(0) !important;
                }

                .dropdown-item {
                    display: block;
                    width: 100%;
                    text-align: left;
                    padding: 0.75rem 1.4rem;
                    text-decoration: none;
                    background: none;
                    border: none;
                    border-bottom: 1px solid #f3f4f6;
                    cursor: pointer;
                    transition: background 0.12s;
                }
                .dropdown-item:last-child {
                    border-bottom: none;
                }
                .dropdown-item:hover {
                    background: #fdfaf8;
                }
                .dropdown-item:hover .dropdown-item-label {
                    color: #54311c;
                    font-weight: 600;
                }
                .dropdown-item-label {
                    font-size: 0.88rem;
                    font-weight: 500;
                    color: #374151;
                    display: block;
                    line-height: 1.4;
                    letter-spacing: 0;
                    transition: color 0.12s;
                }

                /* width helpers */
                .nav-link-home     { width: 72px;  }
                .nav-link-about    { width: 104px; }
                .nav-link-programs { width: 104px; }
                .nav-link-impact   { width: 78px;  }
                .nav-link-resources{ width: 106px; }
                .nav-link-involved { width: 108px; }
                .nav-link-contact  { width: 90px;  }
                .mobile-scroll-nav {
                    display: none;
                    overflow-x: auto;
                    gap: 0;
                    border-top: 1px solid #f3f4f6;
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                }
                .mobile-scroll-nav::-webkit-scrollbar { display: none; }
                .mobile-scroll-nav-link {
                    flex-shrink: 0;
                    padding: 0.6rem 1rem;
                    font-size: 0.7rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.07em;
                    color: #6b7280;
                    text-decoration: none;
                    white-space: nowrap;
                    border-bottom: 2px solid transparent;
                    transition: color 0.2s, border-color 0.2s;
                }
                .mobile-scroll-nav-link.nav-active {
                    color: #1c1108;
                    border-bottom-color: #1c1108;
                }
                .mobile-scroll-nav-link:hover { color: #1c1108; }
            `}</style>

            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '80px',
                    gap: '1.5rem'
                }}>
                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
                        <img
                            src="/images/logo.png"
                            alt="Heartitude"
                            style={{ height: '64px', width: 'auto', display: 'block' }}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div
                        className="desktop-nav"
                        style={{
                            display: 'none',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            gap: 'clamp(0.4rem, 1.2vw, 1.2rem)',
                            flexWrap: 'nowrap',
                            height: '100%',
                            flex: 1
                        }}
                    >
                        {/* Left links: Home */}
                        {navLinksLeft.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive ? `nav-link-item nav-active ${link.cls}` : `nav-link-item ${link.cls}`
                                }
                                onMouseEnter={() => handleOpen(null)}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {/* About Us with Dropdown */}
                        <div
                            className={`nav-dropdown-wrapper ${activeDropdown === 'about' ? 'is-open' : ''}`}
                            onMouseEnter={() => handleOpen('about')}
                            onMouseLeave={handleClose}
                        >
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive || location.pathname.startsWith('/about')
                                        ? 'nav-link-item nav-active nav-link-about'
                                        : 'nav-link-item nav-link-about'
                                }
                                onClick={() => setActiveDropdown(prev => (prev === 'about' ? null : 'about'))}
                            >
                                {t('nav.about')}
                                <ChevronDown
                                    size={13}
                                    className={`chevron ${activeDropdown === 'about' ? 'open' : ''}`}
                                    style={{
                                        marginLeft: '3px',
                                        transition: 'transform 0.2s',
                                    }}
                                />
                            </NavLink>

                            <div className={`nav-dropdown-panel programs-dropdown ${activeDropdown === 'about' ? 'is-open' : ''}`}>
                                {aboutMenu.map((item, i) => (
                                    <Link
                                        key={i}
                                        to={item.path}
                                        className="dropdown-item"
                                        onClick={() => handleAboutItemClick(item.path)}
                                    >
                                        <span className="dropdown-item-label">{item.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Programs with Dropdown */}
                        <div
                            className={`nav-dropdown-wrapper ${activeDropdown === 'programs' ? 'is-open' : ''}`}
                            onMouseEnter={() => handleOpen('programs')}
                            onMouseLeave={handleClose}
                        >
                            <NavLink
                                to="/programs"
                                className={({ isActive }) =>
                                    isActive || location.pathname.startsWith('/programs')
                                        ? 'nav-link-item nav-active nav-link-programs'
                                        : 'nav-link-item nav-link-programs'
                                }
                                onClick={() => setActiveDropdown(prev => (prev === 'programs' ? null : 'programs'))}
                            >
                                {t('nav.programs')}
                                <ChevronDown
                                    size={13}
                                    className={`chevron ${activeDropdown === 'programs' ? 'open' : ''}`}
                                    style={{
                                        marginLeft: '3px',
                                        transition: 'transform 0.2s',
                                    }}
                                />
                            </NavLink>

                            <div className={`nav-dropdown-panel programs-dropdown ${activeDropdown === 'programs' ? 'is-open' : ''}`}>
                                {programsMenu.map((item, i) => (
                                    <Link
                                        key={i}
                                        to={item.path}
                                        className="dropdown-item"
                                        onClick={handleItemClick}
                                    >
                                        <span className="dropdown-item-label">{item.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Impact */}
                        <NavLink
                            to="/impact"
                            className={({ isActive }) =>
                                isActive ? 'nav-link-item nav-active nav-link-impact' : 'nav-link-item nav-link-impact'
                            }
                            onMouseEnter={() => handleOpen(null)}
                        >
                            {t('nav.impact')}
                        </NavLink>

                        {/* Resources */}
                        <NavLink
                            to="/resources"
                            className={({ isActive }) =>
                                isActive ? 'nav-link-item nav-active nav-link-resources' : 'nav-link-item nav-link-resources'
                            }
                            onMouseEnter={() => handleOpen(null)}
                        >
                            {t('nav.resources')}
                        </NavLink>

                        {/* Get Involved with Dropdown */}
                        <div
                            className={`nav-dropdown-wrapper ${activeDropdown === 'involved' ? 'is-open' : ''}`}
                            onMouseEnter={() => handleOpen('involved')}
                            onMouseLeave={handleClose}
                        >
                            <NavLink
                                to="/get-involved"
                                className={({ isActive }) =>
                                    isActive || location.pathname.startsWith('/get-involved')
                                        ? 'nav-link-item nav-active nav-link-involved'
                                        : 'nav-link-item nav-link-involved'
                                }
                                onClick={() => setActiveDropdown(prev => (prev === 'involved' ? null : 'involved'))}
                            >
                                {t('nav.getInvolved')}
                                <ChevronDown
                                    size={13}
                                    className={`chevron ${activeDropdown === 'involved' ? 'open' : ''}`}
                                    style={{ marginLeft: '3px', transition: 'transform 0.2s' }}
                                />
                            </NavLink>

                            <div className={`nav-dropdown-panel programs-dropdown ${activeDropdown === 'involved' ? 'is-open' : ''}`}>
                                {getInvolvedMenu.map((item, i) => (
                                    <Link
                                        key={i}
                                        to={item.path}
                                        className="dropdown-item"
                                        onClick={() => handleGetInvolvedItemClick(item.path)}
                                    >
                                        <span className="dropdown-item-label">{item.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Right links (Contact only) */}
                        {navLinksRight.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive ? `nav-link-item nav-active ${link.cls}` : `nav-link-item ${link.cls}`
                                }
                                onMouseEnter={() => handleOpen(null)}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile scroll nav */}
            <div
                className="mobile-scroll-nav"
                style={{
                    borderTop: '1px solid #e5e7eb',
                    backgroundColor: 'rgba(255,255,255,0.97)',
                    paddingLeft: '0.5rem',
                    paddingRight: '0.5rem',
                }}
            >
                {allNavLinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            isActive || (link.path === '/programs' && location.pathname.startsWith('/programs'))
                                ? 'mobile-scroll-nav-link nav-active'
                                : 'mobile-scroll-nav-link'
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
            </nav>
        </header>
    );
};

export default Navbar;
