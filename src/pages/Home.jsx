import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

import PageHero from '../components/PageHero';

import schoolBanner from '../assets/WebP Image.webp';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            {/* Hero Section */}
            <PageHero
                title="Support that keeps learning going."
                subtitle="In Panama, we noticed an invisible barrier: students fall behind not only from language or missing information, but also from fatigue and limited support resources. Heartitude responds with school learning support, care-space learning support, and BioRhythm tools that make routines and learning materials easier to access."
                imageSrc={schoolBanner}
            >
                <Button to="/get-involved" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                    Volunteer with Us
                </Button>
                <Button to="/contact" className="btn-outline" style={{
                    fontSize: '1.1rem',
                    padding: '1rem 2rem',
                    borderColor: 'white',
                    color: 'white'
                }}>
                    Partner Inquiry
                </Button>
            </PageHero>

            {/* Light Blue Band - Optional text update or keep as is? User didn't specify, keeping as is but maybe updating text to match subtle theme if needed later. For now, user request focused on Hero and Path Forward. */}
            <div style={{
                backgroundColor: 'var(--color-nap-blue)',
                padding: '3rem 0',
                textAlign: 'center',
                color: '#111827'
            }}>
                <div className="container">
                    <p style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        fontFamily: 'var(--font-heading)'
                    }}>
                        Practical support that keeps learning continuous—at school and in care spaces.
                    </p>
                </div>
            </div>

            {/* A Path Forward */}
            <Section>
                <div className="text-center mb-12" style={{ marginBottom: '3rem' }}>
                    <h2 className="section-title">A Path forward</h2>
                    <p className="section-subtitle">
                        How we help students navigate their educational journey.
                    </p>
                </div>

                <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* BioRhythm Tools Ribbon */}
                    <div style={{
                        backgroundColor: '#f3f4f6',
                        borderRadius: 'var(--radius-md)',
                        padding: '1.5rem',
                        textAlign: 'center',
                        marginBottom: '4rem',
                        boxShadow: 'var(--shadow-sm)',
                        border: '1px solid #e5e7eb'
                    }}>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: '#374151', marginBottom: '0.5rem' }}>
                            BioRhythm Tools (Research Backbone)
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: '#4b5563' }}>
                            Focus Forecast + Study Checklist
                        </p>
                    </div>

                    {/* Track 1: School Learning Support */}
                    <div style={{ marginBottom: '4rem' }}>
                        <div style={{ marginBottom: '2rem', textAlign: 'left', borderLeft: '5px solid var(--color-red-program)', paddingLeft: '1rem' }}>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
                                School Learning Support
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                                Public school support + School Start Pack
                            </p>
                        </div>

                        <div style={{ position: 'relative', padding: '1rem 0' }}>
                            {/* Track 1 Path Line */}
                            <div style={{
                                position: 'absolute',
                                top: '40px',
                                left: '0',
                                right: '0',
                                height: '4px',
                                background: '#fee2e2', /* Light red-ish background for path */
                                zIndex: 0,
                                display: 'none'
                            }} className="desktop-path-warm"></div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '2rem',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {[
                                    { step: "1", title: "Partner & Plan", desc: "Collaborating with schools." },
                                    { step: "2", title: "Weekly Support", desc: "Regular tutoring sessions." },
                                    { step: "3", title: "Build Materials", desc: "EN/ES content & School Start Pack." },
                                    { step: "4", title: "Improve Env.", desc: "Simple low-cost changes." }
                                ].map((item, idx) => (
                                    <div key={idx} style={{ textAlign: 'center' }}>
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--color-red-program)',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                            margin: '0 auto 1.5rem auto',
                                            position: 'relative',
                                            border: '4px solid white',
                                            boxShadow: 'var(--shadow-md)'
                                        }}>
                                            {item.step}
                                        </div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{item.title}</h4>
                                        <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Track 2: Care-Space Learning Support */}
                    <div>
                        <div style={{ marginBottom: '2rem', textAlign: 'left', borderLeft: '5px solid var(--color-nap-blue)', paddingLeft: '1rem' }}>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
                                Care-Space Learning Support
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                                care support + Care-Space Learning Pack
                            </p>
                            <p style={{ fontSize: '0.85rem', color: '#6b7280', fontStyle: 'italic', marginTop: '0.25rem' }}>
                                Educational support only—no medical advice.
                            </p>
                        </div>

                        <div style={{ position: 'relative', padding: '1rem 0' }}>
                            {/* Track 2 Path Line */}
                            <div style={{
                                position: 'absolute',
                                top: '40px',
                                left: '0',
                                right: '0',
                                height: '4px',
                                background: '#cffafe', /* Light cyan/blue background for path */
                                zIndex: 0,
                                display: 'none'
                            }} className="desktop-path-cool"></div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '2rem',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {[
                                    { step: "1", title: "Partner & Support", desc: "In care spaces." },
                                    { step: "2", title: "Flexible Support", desc: "Short, adaptable sessions." },
                                    { step: "3", title: "Care-Space Pack", desc: "Routine cards & learning menu." },
                                    { step: "4", title: "Improve Offering", desc: "Quiet corners & lighting." }
                                ].map((item, idx) => (
                                    <div key={idx} style={{ textAlign: 'center' }}>
                                        <div style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--color-nap-blue)',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                            margin: '0 auto 1.5rem auto',
                                            position: 'relative',
                                            border: '4px solid white',
                                            boxShadow: 'var(--shadow-md)'
                                        }}>
                                            {item.step}
                                        </div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{item.title}</h4>
                                        <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </Section>

            {/* Image Tiles: Mission & Get Involved */}
            <Section style={{ paddingTop: 0 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {/* Mission Tile */}
                    <Link to="/about" style={{ display: 'block', position: 'relative', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', color: 'white' }}>
                        <div style={{
                            position: 'absolute', inset: 0,
                            backgroundImage: 'url(/images/tile-mission.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundColor: '#374151' // fallback
                        }}></div>
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                        }}></div>
                        <div style={{
                            position: 'absolute', bottom: 0, left: 0, padding: '2.5rem'
                        }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Our Mission</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1rem', opacity: 0.9 }}>
                                A student-led service club supporting learning and care.
                            </p>
                            <span style={{ textDecoration: 'underline', fontWeight: '600' }}>Read More &rarr;</span>
                        </div>
                    </Link>

                    {/* Get Involved Tile */}
                    <Link to="/get-involved" style={{ display: 'block', position: 'relative', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', color: 'white' }}>
                        <div style={{
                            position: 'absolute', inset: 0,
                            backgroundImage: 'url(/images/tile-involved.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundColor: '#1f2937' // fallback
                        }}></div>
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                        }}></div>
                        <div style={{
                            position: 'absolute', bottom: 0, left: 0, padding: '2.5rem'
                        }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Get Involved</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1rem', opacity: 0.9 }}>
                                Volunteer with us or partner to bring packs to your community.
                            </p>
                            <span style={{ textDecoration: 'underline', fontWeight: '600' }}>Join Us &rarr;</span>
                        </div>
                    </Link>
                </div>
            </Section>
        </>
    );
};

export default Home;
