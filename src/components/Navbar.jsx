import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleLanguage = () => {
        const next = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(next);
        localStorage.setItem('i18nextLng', next);
    };

    const navLinks = [
        { name: t('nav.home'),       path: '/',            cls: 'nav-link-home'      },
        { name: t('nav.about'),      path: '/about',       cls: 'nav-link-about'     },
        { name: t('nav.programs'),   path: '/programs',    cls: 'nav-link-programs'  },
        { name: t('nav.resources'),  path: '/resources',   cls: 'nav-link-resources' },
        { name: t('nav.impact'),     path: '/impact',      cls: 'nav-link-impact'    },
        { name: t('nav.getInvolved'),path: '/get-involved',cls: 'nav-link-involved'  },
        { name: t('nav.contact'),    path: '/contact',     cls: 'nav-link-contact'   },
    ];

    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid #f3f4f6'
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
                .nav-link-item.nav-active::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 18px;
                    height: 2.5px;
                    background: #fbbf24;
                    border-radius: 99px;
                }
                .nav-link-item:hover {
                    color: #1c1108;
                }
                .nav-link-home     { width: 72px;  }
                .nav-link-about    { width: 88px;  }
                .nav-link-programs { width: 104px; }
                .nav-link-resources{ width: 98px;  }
                .nav-link-impact   { width: 78px;  }
                .nav-link-involved { width: 108px; }
                .nav-link-contact  { width: 90px;  }
                .lang-btn {
                    background: none;
                    border: 1.5px solid #4f46e5;
                    border-radius: 20px;
                    width: 52px;
                    height: 30px;
                    cursor: pointer;
                    font-weight: 700;
                    font-size: 0.75rem;
                    color: #4f46e5;
                    letter-spacing: 0.07em;
                    transition: all 0.2s;
                    flex-shrink: 0;
                }
                .lang-btn:hover {
                    background: #4f46e5;
                    color: white;
                }
                .mobile-scroll-nav {
                    display: none;
                    overflow-x: auto;
                    gap: 0;
                    border-top: 1px solid #f3f4f6;
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                }
                .mobile-scroll-nav::-webkit-scrollbar {
                    display: none;
                }
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
                    border-bottom-color: #fbbf24;
                }
                .mobile-scroll-nav-link:hover {
                    color: #1c1108;
                }
            `}</style>

            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    alignItems: 'center',
                    /* 헤더 상하 패딩: 로고 크기에 맞춰 균형있게 */
                    padding: '0.5rem 0',
                    gap: '1.5rem'
                }}>
                    {/* 열 1: 로고 */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
                        <img
                            src="/images/logo.png"
                            alt="Heartitude - Balboa Academy"
                            style={{ height: '68px', width: 'auto', display: 'block' }}
                        />
                    </Link>

                    {/* 열 2: 데스크톱 네비게이션 */}
                    <div
                        className="desktop-nav"
                        style={{
                            display: 'none',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            gap: '0',
                            flexWrap: 'nowrap',
                            maxWidth: '780px',
                            margin: '0 auto',
                            width: '100%'
                        }}
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? `nav-link-item nav-active ${link.cls}`
                                        : `nav-link-item ${link.cls}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* 열 3: 언어 전환 버튼 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <button className="lang-btn" onClick={toggleLanguage}>
                            {i18n.language === 'es' ? 'EN' : 'ES'}
                        </button>
                    </div>
                </div>
            </div>

            {/* 모바일 전용: 가로 스크롤 네비바 */}
            <div
                className="mobile-scroll-nav"
                style={{
                    borderTop: '1px solid #f3f4f6',
                    backgroundColor: 'rgba(255,255,255,0.97)',
                    paddingLeft: '0.5rem',
                    paddingRight: '0.5rem',
                }}
            >
                {navLinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            isActive
                                ? 'mobile-scroll-nav-link nav-active'
                                : 'mobile-scroll-nav-link'
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>

        </nav>
    );
};

export default Navbar;
