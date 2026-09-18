import React, { useState, useRef } from 'react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, School, Heart, ClipboardList, Users, Sparkles, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const VOLUNTEER_EMAIL = 'jiyunkimm0503@gmail.com';

const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontFamily: 'inherit',
    fontSize: '0.9rem',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
    color: '#0f172a',
    backgroundColor: '#ffffff',
};

const GetInvolved = () => {
    const { t } = useTranslation();
    const [form, setForm] = useState({
        name: '',
        grade: '',
        school: 'Balboa Academy',
        email: '',
        phone: '',
        spanish: '',
        availability: '',
        message: '',
        notes: '',
    });
    const [programs, setPrograms] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleCheck = (val) => setPrograms(prev =>
        prev.includes(val) ? prev.filter(p => p !== val) : [...prev, val]
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (programs.length === 0) {
            alert('Please select at least one Program Interest.');
            return;
        }
        await handleDownloadPdf();
        setSubmitted(true);
    };

    const pdfRef = useRef(null);

    const handleDownloadPdf = async () => {
        const html2pdf = (await import('html2pdf.js')).default;
        const element = pdfRef.current;
        const opt = {
            margin: [15, 15, 15, 15],
            filename: `Heartitude_Volunteer_Application_${form.name || 'Form'}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'letter', orientation: 'landscape' },
        };
        html2pdf().set(opt).from(element).save();
    };

    const pillars = [
        {
            label: 'Learn',
            subtitle: 'Education & Tutoring',
            num: '01',
            pillarColor: '#92400e',
            cols: 3,
            programs: [
                {
                    icon: <BookOpen size={20} strokeWidth={1.5} />,
                    title: 'Math Tutoring',
                    schedule: 'Every Saturday · In-person · Fundación Latidos',
                    status: 'Active',
                    statusColor: '#16a34a',
                    statusBg: '#f0fdf4',
                    desc: 'Weekly in-person math support for pediatric cardiac children at Fundación Latidos. Every Saturday, covering core math topics with reference to Panama\'s national curriculum.',
                    color: '#92400e',
                    bg: 'rgba(252,139,175,0.06)',
                    border: 'rgba(252,139,175,0.2)',
                },
                {
                    icon: <BookOpen size={20} strokeWidth={1.5} />,
                    title: 'English Tutoring',
                    schedule: 'Online · Intensive Sessions · Schedule TBD',
                    status: 'Pre-registration Open',
                    statusColor: '#b45309',
                    statusBg: '#fffbeb',
                    desc: 'Online English tutoring in intensive concentrated sessions. Pre-register to join curriculum development — you\'ll be notified when the next program is confirmed.',
                    color: '#f59e0b',
                    bg: 'rgba(245,158,11,0.05)',
                    border: 'rgba(245,158,11,0.2)',
                },
                {
                    icon: <School size={20} strokeWidth={1.5} />,
                    title: 'Digital Math Platform',
                    schedule: 'Flexible · Remote',
                    status: 'Open',
                    statusColor: '#0369a1',
                    statusBg: '#f0f9ff',
                    desc: 'Support development of our digital math platform in collaboration with Universidad de Panamá (GIEM). Translate academic feedback into lessons, worksheets, and digital content.',
                    color: '#0284c7',
                    bg: 'rgba(2,132,199,0.05)',
                    border: 'rgba(2,132,199,0.18)',
                },
            ],
        },
        {
            label: 'Heal',
            subtitle: 'Health & Patient Support',
            num: '02',
            pillarColor: '#e11d48',
            cols: 2,
            programs: [
                {
                    icon: <Heart size={20} strokeWidth={1.5} />,
                    title: 'Patient Registry Support',
                    schedule: 'Regular · Ongoing · In-person',
                    status: 'Active',
                    statusColor: '#16a34a',
                    statusBg: '#f0fdf4',
                    desc: 'Use the Heartitude-built platform to maintain patient records, track supply distribution, donations, and volunteer activity for Fundación Latidos. Regular, ongoing commitment required.',
                    color: '#e11d48',
                    bg: 'rgba(225,29,72,0.05)',
                    border: 'rgba(225,29,72,0.18)',
                },
                {
                    icon: <Heart size={20} strokeWidth={1.5} />,
                    title: 'Community Events & Fundraising',
                    schedule: 'Event-based · Pre-registration',
                    status: 'Pre-registration Open',
                    statusColor: '#b45309',
                    statusBg: '#fffbeb',
                    desc: 'Participate in fundraising campaigns and volunteer events — bracelet sales, donation drives, and community outreach for pediatric cardiac children. Pre-register and we\'ll reach out when upcoming events are confirmed.',
                    color: '#e11d48',
                    bg: 'rgba(225,29,72,0.03)',
                    border: 'rgba(225,29,72,0.12)',
                },
            ],
        },
        {
            label: 'Grow',
            subtitle: 'Healthy Spaces',
            num: '03',
            pillarColor: '#16a34a',
            cols: 1,
            linked: false,
            programs: [
                {
                    icon: <Sparkles size={20} strokeWidth={1.5} />,
                    title: 'BioRhythm Field Research',
                    schedule: 'Flexible · Smartphone Required',
                    status: 'Pre-registration Open',
                    statusColor: '#b45309',
                    statusBg: '#fffbeb',
                    desc: 'Investigate the physical environments of schools and pediatric care spaces in Panama through our two-step research process.',
                    color: '#16a34a',
                    bg: 'rgba(22,163,74,0.04)',
                    border: 'rgba(22,163,74,0.15)',
                    steps: [
                        { num: '①', label: 'Site Scouting', detail: 'Identify and reach out to schools and hospitals — contacting administrators, requesting access, and coordinating schedules.' },
                        { num: '②', label: 'Field Survey', detail: 'Visit approved spaces to measure noise (dB), lighting (Lux), and temperature using a smartphone and our BioRhythm checklist.' },
                    ],
                },
            ],
        },
    ];

    const nextSteps = [
        {
            num: '01',
            icon: <ClipboardList size={20} strokeWidth={1.5} />,
            title: 'Fill & Download',
            desc: 'Complete the application form below and download your filled form as a PDF.',
        },
        {
            num: '02',
            icon: <Users size={20} strokeWidth={1.5} />,
            title: 'Send via Email',
            desc: `Email your PDF to ${VOLUNTEER_EMAIL} with the subject "Volunteer Application".`,
        },
        {
            num: '03',
            icon: <Sparkles size={20} strokeWidth={1.5} />,
            title: 'We Review',
            desc: 'We\'ll review your application and reach out soon to take the next step together.',
        },
        {
            num: '04',
            icon: <ArrowRight size={20} strokeWidth={1.5} />,
            title: 'Onboarding',
            desc: 'You\'ll be introduced to your program lead and join the next available session.',
        },
    ];

    return (
        <>
            <style>{`
                @media (max-width: 768px) {
                    .gi-flow-row { flex-direction: column !important; }
                    .gi-flow-arrow { display: none !important; }
                    .gi-pillar-grid { grid-template-columns: 1fr !important; }
                    .gi-checkbox-grid { grid-template-columns: 1fr !important; }
                    .gi-steps-grid { grid-template-columns: 1fr 1fr !important; }
                    .gi-step-connector { display: none !important; }
                }
            `}</style>
            <PageHero
                title={t('getInvolved.heroTitle')}
                subtitle={t('getInvolved.heroSubtitle')}
                images={[
                    "/images/get-involved/panorama_3_4_5.jpg",
                    "/images/get-involved/slide_06.jpg",
                    "/images/get-involved/slide_07.jpg",
                    "/images/get-involved/slide_08.jpg",
                    "/images/get-involved/slide_09.jpg",
                    "/images/get-involved/slide_01.jpg",
                    "/images/get-involved/slide_02.jpg",
                ]}
                overlay="center"
            />

            {/* ── 1. Volunteer Programs ── */}
            <Section id="programs" style={{ backgroundColor: '#ffffff', padding: '5rem 0 4.5rem' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '3rem' }}>
                        <p style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '0.5rem' }}>
                            Volunteer Programs
                        </p>
                        <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#111827', letterSpacing: '-0.025em', marginBottom: '0.5rem' }}>
                            Where You Can Help
                        </h2>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.8, maxWidth: '620px' }}>
                            Heartitude is a one-of-a-kind club built around a simple idea: your <strong style={{ color: '#111827' }}>Heart</strong> can always become an <strong style={{ color: '#111827' }}>Attitude</strong>. We believe volunteering works best as a virtuous cycle — where every small act of care creates lasting change for children in Panama.<br /><br />
                            All roles are open to Balboa Academy High School students (Grades 9–12). New ideas and suggestions are always welcome.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        {pillars.map((pillar, pi) => (
                            <div key={pi}>
                                {/* Pillar heading */}
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#9ca3af', letterSpacing: '0.08em' }}>{pillar.num}</span>
                                    <span style={{ fontSize: '0.82rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111827' }}>{pillar.label}</span>
                                    <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{pillar.subtitle}</span>
                                </div>

                                {/* Cards */}
                                {pillar.linked ? (
                                    <div className="gi-flow-row" style={{ display: 'flex', alignItems: 'stretch', gap: '0' }}>
                                        {pillar.programs.map((p, i) => (
                                            <React.Fragment key={i}>
                                                <div style={{
                                                    flex: 1,
                                                    background: '#f9fafb',
                                                    border: '1px solid #e5e7eb',
                                                    borderRadius: '12px',
                                                    padding: '1.5rem',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '0.5rem',
                                                }}>
                                                    {p.step && <span style={{ fontSize: '0.68rem', fontWeight: '700', color: '#9ca3af', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{p.step}</span>}
                                                    <span style={{ fontSize: '1rem', fontWeight: '800', color: '#111827', letterSpacing: '-0.01em' }}>{p.title}</span>
                                                    <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.65, margin: '0 0 0.5rem' }}>{p.desc}</p>
                                                    <p style={{ fontSize: '0.82rem', color: '#9ca3af', margin: 0 }}>· {p.schedule}</p>
                                                    <p style={{ fontSize: '0.82rem', color: '#9ca3af', margin: 0 }}>· {p.status}</p>
                                                </div>
                                                {i < pillar.programs.length - 1 && (
                                                    <div className="gi-flow-arrow" style={{ display: 'flex', alignItems: 'center', padding: '0 0.75rem', flexShrink: 0 }}>
                                                        <span style={{ fontSize: '1rem', color: '#d1d5db' }}>→</span>
                                                    </div>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="gi-pillar-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${pillar.cols}, 1fr)`, gap: '1.25rem' }}>
                                        {pillar.programs.map((p, i) => (
                                            <div key={i} style={{
                                                background: '#f9fafb',
                                                border: '1px solid #e5e7eb',
                                                borderRadius: '12px',
                                                padding: '1.5rem',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '0.5rem',
                                            }}>
                                                <span style={{ fontSize: '1rem', fontWeight: '800', color: '#111827', letterSpacing: '-0.01em' }}>{p.title}</span>
                                                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.65, margin: '0 0 0.5rem' }}>{p.desc}</p>
                                                {p.steps && (
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', margin: '0.25rem 0 0.5rem' }}>
                                                        {p.steps.map((s, si) => (
                                                            <div key={si} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                                                                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b', flexShrink: 0, lineHeight: 1.65 }}>{s.num}</span>
                                                                <div>
                                                                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#111827' }}>{s.label}</span>
                                                                    <span style={{ fontSize: '0.82rem', color: '#64748b', marginLeft: '0.35rem' }}>— {s.detail}</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                                <p style={{ fontSize: '0.82rem', color: '#9ca3af', margin: 0, marginTop: 'auto' }}>· {p.schedule} · {p.status}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ── 2. Application Form ── */}
            <Section id="apply" style={{ backgroundColor: '#fafafa', padding: '5rem 0 6rem' }}>
                <div style={{ maxWidth: '820px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <p style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '0.6rem' }}>
                            Apply Now
                        </p>
                        <h2 style={{ fontSize: '1.65rem', fontWeight: '800', color: '#111827', letterSpacing: '-0.025em', marginBottom: '0.5rem' }}>
                            Volunteer Application
                        </h2>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.7 }}>
                            Fill in the form and download your application as a PDF.
                        </p>
                    </div>

                    {submitted ? (
                        <div style={{ textAlign: 'center', padding: '3rem 2rem', background: '#ffffff', borderRadius: '14px', border: '1px solid #bbf7d0', boxShadow: '0 4px 20px rgba(16,185,129,0.06)' }}>
                            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#f0fdf4', border: '2px solid #86efac', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', color: '#16a34a' }}>
                                <Check size={28} strokeWidth={2.2} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.5rem' }}>
                                Application PDF Downloaded!
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 1.75rem' }}>
                                Your application has been saved as a PDF on your device. Please send it as an email attachment to <strong>{VOLUNTEER_EMAIL}</strong> to complete your application.
                            </p>
                            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a
                                    href={`mailto:${VOLUNTEER_EMAIL}?subject=Heartitude%20Volunteer%20Application%20-%20${encodeURIComponent(form.name)}&body=Hi%20Heartitude%20Team,%0D%0A%0D%0APlease%20find%20attached%20my%20volunteer%20application%20PDF%20for%20Heartitude.%0D%0A%0D%0AName:%20${encodeURIComponent(form.name)}%0D%0AGrade:%20${encodeURIComponent(form.grade)}%0D%0APrograms:%20${encodeURIComponent(programs.join(', '))}%0D%0A%0D%0AThank%20you!`}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.8rem 1.6rem',
                                        background: '#92400e',
                                        color: '#fff',
                                        borderRadius: '8px',
                                        fontWeight: '700',
                                        fontSize: '0.9rem',
                                        textDecoration: 'none',
                                        transition: 'background 0.2s',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = '#78350f'}
                                    onMouseLeave={e => e.currentTarget.style.background = '#92400e'}
                                >
                                    Email Application to Heartitude →
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    style={{
                                        padding: '0.8rem 1.3rem',
                                        background: '#f8fafc',
                                        color: '#64748b',
                                        border: '1px solid #cbd5e1',
                                        borderRadius: '8px',
                                        fontWeight: '600',
                                        fontSize: '0.9rem',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Edit / Fill Another
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem', background: '#ffffff', padding: '2.5rem', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(15,23,42,0.03)' }}>

                            {/* Row 1: Full Name & Grade */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#374151', marginBottom: '0.4rem' }}>
                                        Full Name *
                                    </label>
                                    <input required name="name" value={form.name} onChange={handleChange} placeholder="Your full name" style={inputStyle} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#374151', marginBottom: '0.4rem' }}>
                                        Grade / Year *
                                    </label>
                                    <select required name="grade" value={form.grade} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                                        <option value="">Select your grade</option>
                                        <option value="Grade 9">Grade 9 (Freshman)</option>
                                        <option value="Grade 10">Grade 10 (Sophomore)</option>
                                        <option value="Grade 11">Grade 11 (Junior)</option>
                                        <option value="Grade 12">Grade 12 (Senior)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Row 2: Email & Phone Number (WhatsApp) */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#374151', marginBottom: '0.4rem' }}>
                                        Email Address *
                                    </label>
                                    <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#374151', marginBottom: '0.4rem' }}>
                                        Phone / WhatsApp Number *
                                    </label>
                                    <input required type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+507 6000-0000" style={inputStyle} />
                                </div>
                            </div>

                            {/* Row 3: School & Spanish Proficiency */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#374151', marginBottom: '0.4rem' }}>
                                        School / Institution
                                    </label>
                                    <input name="school" value={form.school} onChange={handleChange} placeholder="Balboa Academy" style={inputStyle} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#374151', marginBottom: '0.4rem' }}>
                                        Spanish Proficiency
                                    </label>
                                    <select name="spanish" value={form.spanish} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                                        <option value="">Select proficiency level</option>
                                        <option value="Fluent / Native">Fluent / Native</option>
                                        <option value="Conversational (Intermediate)">Conversational (Intermediate)</option>
                                        <option value="Basic / Learning">Basic / Learning</option>
                                    </select>
                                </div>
                            </div>

                            {/* Program Interest */}
                            <div>
                                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#374151', marginBottom: '0.65rem' }}>
                                    Program Interest *
                                </label>
                                <div className="gi-checkbox-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.45rem 2rem' }}>
                                    {[
                                        'Math Tutoring (Every Saturday)',
                                        'English Tutoring',
                                        'Digital Math Platform (Development & Curriculum)',
                                        'Patient Registry Support',
                                        'Community Events & Fundraising',
                                        'BioRhythm Field Research',
                                    ].map(p => (
                                        <label key={p} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: '#374151', cursor: 'pointer' }}>
                                            <input type="checkbox" checked={programs.includes(p)} onChange={() => handleCheck(p)}
                                                style={{ width: '16px', height: '16px', accentColor: '#92400e', cursor: 'pointer' }} />
                                            {p}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Availability */}
                            <div>
                                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#374151', marginBottom: '0.4rem' }}>
                                    Availability
                                </label>
                                <input name="availability" value={form.availability} onChange={handleChange} placeholder="e.g. Saturdays 9am–12pm / Weekday afternoons" style={inputStyle} />
                            </div>

                            {/* Motivation + Additional Comments side by side */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#374151', marginBottom: '0.4rem' }}>
                                        Why do you want to volunteer? <span style={{ fontWeight: '400', color: '#9ca3af' }}>(optional)</span>
                                    </label>
                                    <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                                        placeholder="Tell us a bit about yourself and your motivation..."
                                        style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#374151', marginBottom: '0.4rem' }}>
                                        Additional Comments or Questions <span style={{ fontWeight: '400', color: '#9ca3af' }}>(optional)</span>
                                    </label>
                                    <textarea name="notes" value={form.notes} onChange={handleChange} rows={3}
                                        placeholder="Any questions, special skills, scheduling notes, or suggestions for our team..."
                                        style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }} />
                                </div>
                            </div>

                            <button type="submit" style={{
                                padding: '0.85rem 2rem',
                                background: '#92400e',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '0.95rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'background 0.2s',
                                alignSelf: 'flex-start',
                            }}
                                onMouseEnter={e => e.currentTarget.style.background = '#78350f'}
                                onMouseLeave={e => e.currentTarget.style.background = '#92400e'}
                            >
                                Download Application as PDF →
                            </button>
                        </form>
                    )}
                </div>
            </Section>

            {/* ── 3. What Happens Next ── */}
            <Section style={{ backgroundColor: '#ffffff', padding: '2.5rem 0 4rem' }}>
                <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '0.6rem' }}>
                        Process
                    </p>
                    <h2 style={{ fontSize: '1.65rem', fontWeight: '800', color: '#111827', letterSpacing: '-0.025em', marginBottom: '0.5rem' }}>
                        What Happens Next
                    </h2>
                    <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.7, marginBottom: '3.5rem' }}>
                        From application to your first session — here's what to expect.
                    </p>

                    <div className="gi-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', position: 'relative' }}>
                        {nextSteps.map((step, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                {i < nextSteps.length - 1 && (
                                    <div className="gi-step-connector" style={{ position: 'absolute', top: '24px', left: '60%', width: '80%', height: '1px', background: '#e2e8f0', zIndex: 0 }} />
                                )}
                                <div style={{
                                    width: '48px', height: '48px', borderRadius: '50%',
                                    background: '#ffffff', border: '1px solid #0f172a',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#0f172a', marginBottom: '1rem', position: 'relative', zIndex: 1,
                                }}>
                                    {step.icon}
                                </div>
                                <span style={{ fontSize: '0.68rem', fontWeight: '700', color: '#64748b', letterSpacing: '0.1em', marginBottom: '0.35rem' }}>{step.num}</span>
                                <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.4rem' }}>{step.title}</h3>
                                <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6, maxWidth: '180px' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>


            {/* ── 4. Donate ── */}
            <Section id="donate" style={{ backgroundColor: '#ffffff', padding: '5.5rem 0 6rem', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ maxWidth: '860px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <p style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#64748b', marginBottom: '0.6rem' }}>
                            Support Our Mission
                        </p>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.025em', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                            More Heartbeats with Heartitude
                        </h2>
                        <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.8, maxWidth: '640px', margin: '0 auto' }}>
                            In Panama, an estimated 400–500 children are born with congenital heart defects each year.
                            Many require surgery, but treatment is often delayed due to limited healthcare resources
                            and financial hardship. Support doesn't end on surgery day — children need nutrition,
                            medication, and continuous care before and after their operations.
                        </p>
                    </div>

                    {/* How donations are used */}
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <p style={{ fontSize: '0.88rem', color: '#0f172a', fontWeight: '700', marginBottom: '0.25rem' }}>
                            How are donations used?
                        </p>
                        <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
                            All funds raised through this campaign are delivered to Fundación Latidos and used to provide
                            the following support for children with congenital heart defects and their families.
                        </p>
                    </div>

                    {/* Editorial Box */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3rem',
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        padding: '3rem',
                        flexWrap: 'wrap',
                    }}>
                        {/* Left: Info */}
                        <div style={{ flex: 1, minWidth: '260px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                {[
                                    { icon: '🏥', text: 'Financial and social support for families during the surgery process, tailored to each household\'s needs' },
                                    { icon: '🍎', text: 'Nutritional meals and supplements for children who need to reach the required weight for surgery' },
                                    { icon: '💊', text: 'Medications and medical supplies needed to continue treatment' },
                                    { icon: '🤝', text: 'Accompaniment and support during medical checkups, hospitalization, and recovery' },
                                ].map(({ icon, text }) => (
                                    <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                        <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: '1px' }}>{icon}</span>
                                        <p style={{ margin: 0, fontSize: '0.88rem', color: '#374151', lineHeight: 1.65 }}>{text}</p>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://whydonate.com/fundraising/heartitute-hearts-for-latidos-kids"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.85rem 2rem',
                                    background: '#0f172a',
                                    color: '#ffffff',
                                    borderRadius: '4px',
                                    fontWeight: '700',
                                    fontSize: '0.92rem',
                                    textDecoration: 'none',
                                    transition: 'opacity 0.2s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                            >
                                Donate via WhyDonate →
                            </a>
                        </div>

                        {/* Right: QR Code */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                            <a
                                href="https://whydonate.com/fundraising/heartitute-hearts-for-latidos-kids"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', cursor: 'pointer' }}
                            >
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://whydonate.com/fundraising/heartitute-hearts-for-latidos-kids&bgcolor=ffffff&color=0f172a&qzone=1"
                                    alt="Donate QR Code"
                                    style={{ width: '160px', height: '160px', borderRadius: '4px', border: '1px solid #e2e8f0' }}
                                />
                                <p style={{ margin: 0, fontSize: '0.72rem', color: '#64748b', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: '600' }}>
                                    Scan / Click to Donate
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </Section>

            <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>

                <div ref={pdfRef} style={{ fontFamily: 'Arial, sans-serif', padding: '36px 48px', color: '#111827', width: '970px', background: '#fff' }}>

                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #92400e', paddingBottom: '14px', marginBottom: '24px' }}>
                        <div>
                            <h1 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.5px' }}>Heartitude</h1>
                            <p style={{ margin: '3px 0 0', fontSize: '10px', color: '#9ca3af', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Volunteer Application Form</p>
                        </div>
                        <p style={{ margin: 0, fontSize: '10px', color: '#9ca3af' }}>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>

                    {/* Row 1: Name | Grade & School */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 48px', marginBottom: '16px' }}>
                        <div>
                            <p style={{ margin: '0 0 3px', fontSize: '9px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name</p>
                            <p style={{ margin: 0, fontSize: '13px', color: '#111827', lineHeight: 1.5, borderBottom: '1px solid #e5e7eb', paddingBottom: '7px' }}>{form.name || '—'}</p>
                        </div>
                        <div>
                            <p style={{ margin: '0 0 3px', fontSize: '9px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Grade &amp; School</p>
                            <p style={{ margin: 0, fontSize: '13px', color: '#111827', lineHeight: 1.5, borderBottom: '1px solid #e5e7eb', paddingBottom: '7px' }}>{`${form.grade || '—'} · ${form.school || 'Balboa Academy'}`}</p>
                        </div>
                    </div>

                    {/* Row 2: Email | Phone */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 48px', marginBottom: '16px' }}>
                        <div>
                            <p style={{ margin: '0 0 3px', fontSize: '9px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Address</p>
                            <p style={{ margin: 0, fontSize: '13px', color: '#111827', lineHeight: 1.5, borderBottom: '1px solid #e5e7eb', paddingBottom: '7px' }}>{form.email || '—'}</p>
                        </div>
                        <div>
                            <p style={{ margin: '0 0 3px', fontSize: '9px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone / WhatsApp</p>
                            <p style={{ margin: 0, fontSize: '13px', color: '#111827', lineHeight: 1.5, borderBottom: '1px solid #e5e7eb', paddingBottom: '7px' }}>{form.phone || '—'}</p>
                        </div>
                    </div>

                    {/* Row 3: Spanish | Availability */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 48px', marginBottom: '16px' }}>
                        <div>
                            <p style={{ margin: '0 0 3px', fontSize: '9px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Spanish Proficiency</p>
                            <p style={{ margin: 0, fontSize: '13px', color: '#111827', lineHeight: 1.5, borderBottom: '1px solid #e5e7eb', paddingBottom: '7px' }}>{form.spanish || '—'}</p>
                        </div>
                        <div>
                            <p style={{ margin: '0 0 3px', fontSize: '9px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Availability</p>
                            <p style={{ margin: 0, fontSize: '13px', color: '#111827', lineHeight: 1.5, borderBottom: '1px solid #e5e7eb', paddingBottom: '7px' }}>{form.availability || '—'}</p>
                        </div>
                    </div>

                    {/* Row 4: Program Interest (full width) */}
                    <div style={{ marginBottom: '16px' }}>
                        <p style={{ margin: '0 0 3px', fontSize: '9px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Program Interest</p>
                        <p style={{ margin: 0, fontSize: '13px', color: '#111827', lineHeight: 1.5, borderBottom: '1px solid #e5e7eb', paddingBottom: '7px' }}>{programs.length > 0 ? programs.join(' · ') : '—'}</p>
                    </div>

                    {/* Row 5: Motivation | Additional Comments */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 48px', marginBottom: '24px' }}>
                        <div>
                            <p style={{ margin: '0 0 3px', fontSize: '9px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Motivation</p>
                            <p style={{ margin: 0, fontSize: '12px', color: '#111827', lineHeight: 1.6, borderBottom: '1px solid #e5e7eb', paddingBottom: '7px', minHeight: '48px' }}>{form.message || '—'}</p>
                        </div>
                        <div>
                            <p style={{ margin: '0 0 3px', fontSize: '9px', fontWeight: '700', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Additional Comments / Questions</p>
                            <p style={{ margin: 0, fontSize: '12px', color: '#111827', lineHeight: 1.6, borderBottom: '1px solid #e5e7eb', paddingBottom: '7px', minHeight: '48px' }}>{form.notes || '—'}</p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div style={{ paddingTop: '12px', borderTop: '1px solid #e5e7eb' }}>
                        <p style={{ margin: 0, fontSize: '9px', color: '#9ca3af', textAlign: 'center' }}>
                            Heartitude · Balboa Academy, Panama · heartitude.org
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GetInvolved;
