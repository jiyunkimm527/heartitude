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
                }
                .nav-link-item.nav-active {
                    color: #4f46e5;
                    font-weight: 700;
                }
                .nav-link-item:hover {
                    color: #4f46e5;
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

                    {/* 열 3: 언어 전환 버튼 + 모바일 메뉴 버튼 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <button className="lang-btn" onClick={toggleLanguage}>
                            {i18n.language === 'es' ? 'EN' : 'ES'}
                        </button>

                        {/* 모바일 햄버거 */}
                        <button
                            className="mobile-menu-btn"
                            onClick={toggleMenu}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'var(--color-primary)'
                            }}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>


            {/* 모바일 드롭다운 메뉴 */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '80px',
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    borderBottom: '1px solid #f3f4f6',
                    padding: '1rem 0',
                    boxShadow: 'var(--shadow-lg)'
                }}>
                    <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    padding: '0.75rem 0',
                                    fontSize: '1.1rem',
                                    fontWeight: '500',
                                    color: 'var(--color-primary)',
                                    borderBottom: '1px solid #f3f4f6',
                                    textDecoration: 'none'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
