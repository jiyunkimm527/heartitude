import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageHero from "../components/PageHero";
import Section from "../components/Section";

const PROGRAMS = [
    {
        id: "math-tutoring",
        titleKey: "nav.programsSub.math",
        fallbackTitle: "Math Tutoring",
        image: "/images/programs/math-tutoring/photo_1.jpg",
        tagline: "One-on-one math support for pediatric cardiac children, helping them stay on track with their studies while navigating ongoing medical care.",
        chips: ["Pediatric Cardiac Children", "1:1 In-person", "Weekly Sessions"],
    },
    {
        id: "english-tutoring",
        titleKey: "nav.programsSub.english",
        fallbackTitle: "English Tutoring",
        image: "/images/programs/english-tutoring/photo_1.jpg",
        tagline: "Intensive virtual English conversation sessions for underserved students — building confidence and real-world communication skills.",
        chips: ["Underserved Students", "Virtual Sessions", "English Conversation"],
    },
    {
        id: "platform",
        titleKey: "nav.programsSub.digital",
        fallbackTitle: "Digital Math Platform",
        image: "/images/resources/hero/res_1.jpg",
        tagline: "A free digital math platform for Pre-K to Grade 6, co-developed with Universidad de Panamá — expanding access to quality math education across Panama.",
        chips: ["Pre-K to Grade 6", "Free & Open Access", "Universidad de Panamá"],
    },
    {
        id: "patient-management",
        titleKey: "nav.programsSub.patients",
        fallbackTitle: "Patient Registry",
        image: "/images/programs/patient-management/poster.jpeg?v=1",
        objectFit: "contain",
        tagline: "Managing patient records, surgical waitlists, and donations for Fundación Latidos through a purpose-built digital platform — keeping every cardiac child's care on track.",
        chips: ["Patient Records", "Care Coordination", "Purpose-Built Platform"],
    },
    {
        id: "hospital-care",
        titleKey: "nav.programsSub.hospital",
        fallbackTitle: "Community Events & Fundraising",
        image: "/images/programs/hospital-care/cover.jpg?v=1",
        tagline: "Community events and direct fundraising for pediatric cardiac children — bringing joy and companionship to the hospital, and raising funds for essential medical supplies their families could not otherwise afford.",
        chips: ["Cardiac Families", "Holistic Care", "Community Outreach"],
    },
    {
        id: "environment-research",
        titleKey: "nav.programsSub.environment",
        fallbackTitle: "BioRhythm Research",
        image: "/images/programs/hero/3-1.jpg",
        tagline: "Field research into the physical environments of schools and pediatric care spaces — understanding how noise, light, and climate conditions impact children's ability to learn and recover.",
        chips: ["Schools & Hospitals", "Environmental Research", "Field Data"],
    },
];

const ProgramCard = ({ program, t }) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <Link
            to={`/programs/${program.id}`}
            style={{ textDecoration: "none", display: "flex", flexDirection: "column", color: "#0f172a", height: "100%" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    overflow: "hidden",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: hovered ? "translateY(-4px)" : "translateY(0)",
                    boxShadow: hovered ? "0 20px 40px -10px rgba(15, 23, 42, 0.1)" : "0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.03)",
                }}
            >
                {/* Top Image Section */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", background: program.objectFit === "contain" ? "#ffffff" : "#f8fafc", overflow: "hidden" }}>
                    {program.image ? (
                        <img
                            src={program.image}
                            alt={program.fallbackTitle}
                            style={{ 
                                width: "100%", 
                                height: "100%", 
                                objectFit: program.objectFit || "cover", 
                                display: "block",
                                transform: hovered ? "scale(1.05)" : "scale(1)",
                                transition: "transform 0.5s ease"
                            }}
                        />
                    ) : (
                        <div style={{ width: "100%", height: "100%", background: "#f8fafc" }} />
                    )}
                </div>

                {/* Content Section */}
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ 
                        fontSize: "1.25rem", 
                        fontWeight: "800", 
                        color: "#0f172a", 
                        margin: "0 0 0.5rem", 
                        lineHeight: 1.3, 
                        letterSpacing: "-0.02em", 
                        fontFamily: "var(--font-heading)" 
                    }}>
                        {t(program.titleKey, program.fallbackTitle)}
                    </h3>
                    <p style={{ 
                        fontSize: "0.92rem", 
                        color: "#475569", 
                        lineHeight: 1.6, 
                        margin: "0 0 1.25rem",
                        flex: 1 
                    }}>
                        {program.tagline}
                    </p>

                    {/* Chips & Footer Data */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginTop: "auto" }}>
                        {program.chips && (
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                                {program.chips.map((chip, idx) => (
                                    <span key={idx} style={{
                                        fontSize: "0.72rem",
                                        fontWeight: "600",
                                        color: "#334155",
                                        backgroundColor: "#f1f5f9",
                                        padding: "0.3rem 0.65rem",
                                        borderRadius: "6px",
                                        border: "1px solid #e2e8f0"
                                    }}>
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </Link>
    );
};

const Programs = () => {
    const { t } = useTranslation();

    return (
        <>
            <PageHero
                title={t("programs.heroTitle")}
                subtitle={t("programs.heroSubtitle")}
                images={[
                    "/images/programs/hero/1-1.jpg",
                    "/images/programs/hero/2-2.jpg",
                    "/images/programs/hero/3-1.jpg",
                ]}
                overlay="center"
            />

            <Section style={{ backgroundColor: "#ffffff", padding: "5rem 0 6rem" }}>
                <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
                        {PROGRAMS.map((program) => (
                            <ProgramCard key={program.id} program={program} t={t} />
                        ))}
                    </div>
                </div>
            </Section>

        </>
    );
};

export default Programs;
