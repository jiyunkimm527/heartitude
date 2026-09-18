import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

/* ── All program data (single source of truth) ── */
const PROGRAMS = [
    {
        id: "math-tutoring",
        navId: "learn-math",
        title: "Math Tutoring",
        subtitle: "Weekly 1:1 Math Support for Pediatric Cardiac Patients",
        partner: "Fundación Latidos",
        status: "Ongoing · Every Saturday",
        heroSrc: "/images/programs/math-tutoring/photo_1.jpg",
        description:
            "Heartitude volunteers provide weekly one-on-one math tutoring for pediatric cardiac children at Fundación Latidos in Panama City — helping them stay on track with their studies while navigating ongoing medical care. Sessions cover core math topics from number sense through multiplication, tailored to each child's pace and needs.",
        activities: [
            {
                schedule: "Every Saturday · In-Person · Fundación Latidos Office",
                title: "1:1 Math Sessions",
                desc: "Volunteers meet with 5–6 pediatric cardiac patients for 1:1 math sessions covering number sense, counting, and arithmetic operations with reference to Panama's national curriculum. When in-person is not possible, sessions continue remotely through our digital learning platform.",
                stat: "",
            },
            {
                schedule: "Ongoing",
                title: "Impact So Far",
                desc: "5 children with congenital heart conditions are currently receiving consistent, personalized math support every week — maintaining their academic progress despite frequent hospital visits and medical procedures.",
                stat: "5 children supported · Weekly · Ongoing",
            },
        ],
        photos: [
            { src: "/images/programs/math-tutoring/photo_1.jpg", caption: "Math tutoring session — volunteers and students at work" },
            { src: "/images/programs/math-tutoring/photo_2.jpg?v=2", caption: "1:1 sessions with pediatric cardiac children" },
            { src: "/images/programs/math-tutoring/photo_3.jpg", caption: "Volunteers and students at Fundación Latidos" },
        ],
    },
    {
        id: "english-tutoring",
        navId: "learn-english",
        title: "English Tutoring",
        subtitle: "Free Virtual English Conversation Program for Public School Students",
        partner: "Fundación Gabriel Lewis Galindo (FGLG)",
        status: "Completed · March 2026",
        heroSrc: "/images/programs/english-tutoring/photo_1.jpg",
        description:
            "Throughout March 2026, Heartitude partnered with Fundación Gabriel Lewis Galindo (FGLG) to deliver free virtual English tutoring to public school students across Panama — students who wouldn't otherwise have access to structured English practice. Three times a week, our volunteers showed up on Zoom to create a space where students could ask questions, make mistakes, and grow.",
        activities: [
            {
                schedule: "March 2026 · Mondays, Tuesdays, Thursdays · Online via Zoom",
                title: "Virtual English Conversation Sessions",
                desc: "Twelve structured English conversation sessions covering daily life topics — sports, food, routines, and future aspirations. Each session was designed to build confidence through real dialogue, not rote memorisation. Five dedicated volunteers each led sessions and built personal connections with students over the month.",
                stat: "12 sessions · 25 students · 3× per week",
            },
            {
                schedule: "Certificate Ceremony",
                title: "FGLG Official Certificates of Recognition",
                desc: "All student participants received official Certificates of Recognition from Fundación Gabriel Lewis Galindo upon program completion. Volunteer tutors were also formally recognised by FGLG for their dedication and impact — a distinction awarded by an established Panamanian educational foundation.",
                stat: "25 students certified · 5 volunteers recognised",
            },
        ],
        photoAspectRatio: "4/5",
        photos: [
            { src: "/images/programs/english-tutoring/photo_1.jpg", caption: "Virtual English Tutoring Program — Heartitude × FGLG (March 2026)" },
            { src: "/images/programs/english-tutoring/photo_2.jpg", caption: "Week 4: Final Reflections & Group Discussion — Completing the 12-session curriculum" },
            { src: "/images/programs/english-tutoring/photo_3.jpg", caption: "FGLG Certificates of Recognition — Awarded to Heartitude volunteer tutors" },
        ],
    },
    {
        id: "platform",
        navId: "learn-platform",
        title: "Digital Math Platform",
        subtitle: "Digital Math Education System & Workbook Distribution",
        partner: "Universidad de Panamá",
        status: "Live",
        heroSrc: "/images/resources/hero/res_1.jpg",
        description:
            "What started as a teaching tool for cardiac children grew into a full digital math platform — free for any child in Panama, from Pre-K to Grade 6. After distributing the platform widely across schools, teachers, and NGOs, Universidad de Panamá recognized its value and reached out to collaborate, opening an ongoing academic partnership.",
        activities: [
            {
                schedule: "Pre-K to Grade 6 · Free & Open",
                title: "Digital Platform & Workbook Distribution",
                desc: "A fully responsive web platform covering all elementary math units for Pre-K to Grade 6 — gamified exercises, progress tracking, and a clean interface designed for young learners. Curriculum-aligned printed workbooks and teacher guides distributed to schools and NGOs across Panama, bridging the gap for classrooms without reliable internet access.",
                stat: "20 schools · 32 teachers · 23 NGOs",
            },
            {
                schedule: "Academic Partnership · Ongoing",
                title: "Collaboration with Universidad de Panamá",
                desc: "Heartitude presented the platform to professors and students at the Faculty of Education Sciences. The partnership is now focused on reinforcing academic content, developing video lessons, and continuously improving the platform through ongoing dialogue with educators.",
                stat: "Universidad de Panamá · GIEM · Faculty of Education Sciences",
            },
        ],
        photos: [
            { src: "/images/programs/platform/photo_1.jpg?v=1", caption: "Facultad de Ciencias de la Educación — Universidad de Panamá" },
            { src: "/images/programs/platform/photo_2.jpg?v=1", caption: "Digital math platform presentation and teacher workshop" },
            { src: "/images/programs/platform/photo_3.jpg?v=1", caption: "Interactive curriculum demonstration — Elementary math units" },
        ],
    },
    {
        id: "patient-management",
        navId: "heal-platform",
        title: "Patient Registry",
        subtitle: "Digital Patient Registry for Pediatric Cardiac Care",
        partner: "Fundación Latidos",
        status: "Official Launch · September 2026",
        heroSrc: "/images/programs/patient-management/cover.jpg",
        description:
            "During regular hospital volunteer visits, we discovered that Fundación Latidos managed hundreds of patient records entirely on paper. We built a comprehensive digital management system — covering patient records, material support, donations, and volunteer activity tracking in one searchable platform — so that no child falls through the cracks on their path to surgery.",
        activities: [
            {
                schedule: "Official Launch · September 2026 · Hotel RIU",
                title: "Latidos Patient Database",
                desc: "Digitized over 717 pediatric cardiac patient records, with active tracking of 573 living beneficiaries and 268 patients on surgery waiting lists. Officially presented at the Latidos Assembly in September 2026.",
                stat: "717 records · 573 tracked · 268 on waitlist",
            },
            {
                schedule: "Ongoing",
                title: "Administrative Management",
                desc: "Beyond patient records, the system tracks Latidos' material support distribution, donation records, and volunteer activity status — centralising all organisational data in one accessible platform. By streamlining administrative work, Fundación Latidos can dedicate more time and energy to what matters most: the children.",
                stat: "",
            },
        ],
        photos: [
            { src: "/images/programs/patient-management/photo_1.jpg", caption: "Official presentation of the digital patient platform at Hotel RIU" },
            { src: "/images/programs/patient-management/photo_2.jpg", caption: "Recognition ceremony with Fundación Latidos leadership" },
            { src: "/images/programs/patient-management/photo_3.jpg", caption: "Heartitude volunteers and Fundación Latidos team" },
        ],
    },
    {
        id: "hospital-care",
        navId: "heal-care",
        title: "Community Events & Fundraising",
        subtitle: "Events, Outreach & Medical Supply Fundraising",
        partner: "Fundación Latidos",
        status: "Ongoing",
        heroSrc: "/images/programs/hospital-care/cover.jpg?v=1",
        description:
            "We show up — with craft supplies, warm conversation, and a genuine presence. Our volunteers organize community events for pediatric cardiac children at Fundaci\u00f3n Latidos, and we fundraise through bracelet sales and donation drives to provide essential medical supplies their families could not otherwise afford.",
        activities: [
            {
                schedule: "Event-based \u00b7 Ongoing",
                title: "Community Events & Companionship",
                desc: "Volunteers organize and participate in community events for pediatric cardiac children at Fundaci\u00f3n Latidos — face painting, birthday celebrations, craft activities, and cheerful companionship that bring joy and emotional support to the children and their families.",
                stat: "Ongoing events",
            },
            {
                schedule: "Fundraising · Active",
                title: "Pediatric Medical Supply Fundraising",
                desc: "Raising funds to provide essential medical supplies — oxygen tubes, diagnostic tools, and surgical preparation items — directly for Latidos patients. An active online campaign is now underway with a US$2,000 goal.",
                stat: "Active Campaign · Goal US$2,000",
            },
        ],
        photos: [
            { src: "/images/programs/hospital-care/photo_1.jpg?v=3", caption: "Face painting activity with pediatric cardiac children at Fundación Latidos" },
            { src: "/images/programs/hospital-care/photo_2.jpg?v=4", caption: "Heartitude volunteers and children at a birthday celebration event" },
            { src: "/images/programs/hospital-care/photo_3.jpg?v=3", caption: "Community celebration and emotional support gathering at Fundación Latidos" },
        ],
    },
    {
        id: "environment-research",
        navId: "grow-research",
        title: "BioRhythm Research",
        subtitle: "Acoustic, Lighting & Climate Environmental Study for Learning & Care Spaces",
        partner: "Hospital del Niño · Fundación Casita de Mausi",
        status: "Research in Progress",
        heroSrc: "/images/programs/hero/3-1.jpg",
        description:
            "Where a child learns or recovers shapes how well they can focus, feel calm, and grow. Through our BioRhythm Research initiative, we investigate the physical environments of schools and pediatric care spaces — measuring ambient noise, light, temperature, and humidity — to develop practical, low-cost guidelines for healthier spaces.",
        activities: [
            {
                schedule: "Field Research · Ongoing",
                title: "BioRhythm Environmental Factor Analysis",
                desc: "Systematic measurement of ambient noise (dB), illuminance (lux), temperature, and humidity in classrooms and hospital wards using smartphones and our BioRhythm checklist. Examining the direct impact of these factors on concentration and emotional recovery.",
                stat: "Hospital del Niño · Fundación Casita de Mausi",
            },
            {
                schedule: "Guidelines · In Development",
                title: "Low-Cost Improvement Recommendations",
                desc: "Translating research findings into actionable, affordable checklists for schools and care centers — covering desk layout, sound dampening, lighting adjustments, and airflow optimisation.",
                stat: "Low-cost · Scalable",
            },
        ],
        photos: [
            { src: "/images/biorhythm/biorhythm_a.jpg?v=2", caption: "BioRhythm field research — site visit and partner facility assessment" },
            { src: "/images/biorhythm/biorhythm_b.jpg?v=2", caption: "BioRhythm research team conducting on-site environmental assessment" },
            { src: "/images/biorhythm/biorhythm_c.jpg?v=2", caption: "Field survey in progress — environmental checklist and data collection" },
        ],
    },
];

/* ── Individual program detail page ── */
const ProgramDetail = () => {
    const { programId } = useParams();
    const { t } = useTranslation();
    const [selectedPhoto, setSelectedPhoto] = React.useState(null);

    const program = PROGRAMS.find((p) => p.id === programId);
    if (!program) return <Navigate to="/programs" replace />;

    return (
        <>

            {/* Title block */}
            <div style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                <div className="container" style={{ padding: "2.75rem 0 2.25rem", textAlign: "center" }}>
                    <p style={{ fontSize: "0.72rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: "700", marginBottom: "0.5rem" }}>
                        {program.status}
                    </p>
                    <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: "700", color: "#0f172a", letterSpacing: "-0.02em", marginBottom: "0.6rem" }}>
                        {program.title}
                    </h1>
                    <p style={{ fontSize: "1.05rem", color: "#475569", maxWidth: "560px", margin: "0 auto", lineHeight: 1.6 }}>
                        {program.subtitle}
                    </p>
                    <p style={{ fontSize: "0.82rem", color: "#94a3b8", marginTop: "0.75rem" }}>
                        In partnership with <strong style={{ color: "#475569" }}>{program.partner}</strong>
                    </p>
                </div>
            </div>

            {/* ── Main content ── */}
            <div className="container" style={{ paddingTop: "3.5rem", paddingBottom: "5rem" }}>
                {/* Intro paragraph */}
                <div style={{ maxWidth: "700px", margin: "0 auto 3.5rem", textAlign: "center" }}>
                    <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: 1.85, margin: 0 }}>
                        {program.description}
                    </p>
                </div>




                {/* Responsive Grid - Row-first ordering (flows left-to-right, top-to-bottom: Week 1, 2, 3, 4) */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
                    gap: "1.5rem",
                    marginBottom: "4.5rem",
                    alignItems: "stretch"
                }}>
                    {program.photos.map((p, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedPhoto(p)}
                            style={{
                                background: "#ffffff",
                                borderRadius: "8px",
                                border: "1px solid #e2e8f0",
                                overflow: "hidden",
                                cursor: "pointer",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                display: "flex",
                                flexDirection: "column",
                                height: "100%"
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = "translateY(-4px)";
                                e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.09)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                            }}
                        >
                            <div style={{ width: "100%", aspectRatio: program.photoAspectRatio || "4/3", background: "#f1f5f9", overflow: "hidden" }}>
                                {p.src ? (
                                    <img
                                        src={p.src}
                                        alt={p.caption}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            display: "block",
                                            background: "#f1f5f9"
                                        }}
                                        loading="lazy"
                                    />
                                ) : (
                                    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f1f5f9" }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5">
                                            <rect x="3" y="3" width="18" height="18" rx="2" />
                                            <circle cx="8.5" cy="8.5" r="1.5" />
                                            <polyline points="21 15 16 10 5 21" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            {p.caption && (
                                <div style={{ padding: "0.85rem 1rem", background: "#fafafa", borderTop: "1px solid #f1f5f9", flex: 1, display: "flex", alignItems: "center" }}>
                                    <p style={{ margin: 0, fontSize: "0.82rem", color: "#475569", lineHeight: 1.45, fontWeight: "500" }}>
                                        {p.caption}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Activities Section */}
                <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "3rem" }}>
                    <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#0f172a", marginBottom: "2rem" }}>
                        What We Do
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
                        {program.activities.map((act, i) => (
                            <div key={i} style={{ borderTop: "2px solid #0f172a", paddingTop: "1.25rem" }}>
                                <p style={{ fontSize: "0.72rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: "700", marginBottom: "0.4rem" }}>
                                    {act.schedule}
                                </p>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0f172a", marginBottom: "0.6rem", lineHeight: 1.35 }}>
                                    {act.title}
                                </h3>
                                <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.75, margin: 0 }}>
                                    {act.desc}
                                </p>
                                <p style={{ fontSize: "0.82rem", fontWeight: "700", color: "#0f172a", marginTop: "0.85rem", marginBottom: 0 }}>
                                    {act.stat}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Back / CTA ── */}
            <div style={{ borderTop: "1px solid #e2e8f0", padding: "2.5rem 0", background: "#fafafa" }}>
                <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                    <Link to="/programs" style={{ fontSize: "0.88rem", color: "#475569", fontWeight: "600", textDecoration: "none" }}>
                        ← All Programs
                    </Link>
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                        <Link to="/get-involved" style={{ padding: "0.65rem 1.4rem", borderRadius: "5px", background: "#0f172a", color: "#fff", fontWeight: "600", fontSize: "0.86rem", textDecoration: "none" }}>
                            {t("home.ctaVolunteer", "Get Involved")}
                        </Link>
                        <Link to="/contact" style={{ padding: "0.65rem 1.4rem", borderRadius: "5px", border: "1px solid #cbd5e1", background: "#fff", color: "#0f172a", fontWeight: "600", fontSize: "0.86rem", textDecoration: "none" }}>
                            {t("home.ctaPartner", "Contact Us")}
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── Interactive Lightbox Modal ── */}
            {selectedPhoto && (
                <div
                    onClick={() => setSelectedPhoto(null)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(15, 23, 42, 0.88)",
                        backdropFilter: "blur(6px)",
                        zIndex: 9999,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1.5rem"
                    }}
                >
                    <div
                        onClick={e => e.stopPropagation()}
                        style={{
                            maxWidth: "920px",
                            maxHeight: "90vh",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            background: "#ffffff",
                            borderRadius: "10px",
                            overflow: "hidden",
                            boxShadow: "0 24px 48px rgba(0,0,0,0.4)"
                        }}
                    >
                        <div style={{ position: "relative", width: "100%", background: "#0f172a", display: "flex", justifyContent: "center" }}>
                            <img
                                src={selectedPhoto.src}
                                alt={selectedPhoto.caption}
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "75vh",
                                    objectFit: "contain",
                                    display: "block"
                                }}
                            />
                            <button
                                onClick={() => setSelectedPhoto(null)}
                                style={{
                                    position: "absolute",
                                    top: "12px",
                                    right: "12px",
                                    background: "rgba(0,0,0,0.6)",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "50%",
                                    width: "36px",
                                    height: "36px",
                                    cursor: "pointer",
                                    fontSize: "1.1rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <X size={20} />
                            </button>
                        </div>
                        {selectedPhoto.caption && (
                            <div style={{ padding: "1rem 1.5rem", width: "100%", background: "#ffffff" }}>
                                <p style={{ margin: 0, fontSize: "0.92rem", color: "#1e293b", fontWeight: "600", textAlign: "center" }}>
                                    {selectedPhoto.caption}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ProgramDetail;
