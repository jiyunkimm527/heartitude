import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PageCTA = ({
    title = "Get Involved",
    description = "Whether you're a student, a public school, or an NGO — we are eager to share our curricula, learning resources, and tutoring programs free of charge.",
    primaryText,
    primaryLink = "/get-involved",
    secondaryText,
    secondaryLink = "/contact"
}) => {
    const { t } = useTranslation();

    return (
        <div style={{ borderTop: "1px solid #e5e7eb", padding: "3.5rem 0", background: "#fafafa" }}>
            <div className="container" style={{ textAlign: "center", maxWidth: "520px", margin: "0 auto" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#111", marginBottom: "0.5rem" }}>
                    {title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                    {description}
                </p>
                <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <Link
                        to={primaryLink}
                        style={{
                            padding: "0.7rem 1.5rem",
                            borderRadius: "5px",
                            background: "#111",
                            color: "#fff",
                            fontWeight: "600",
                            fontSize: "0.86rem",
                            textDecoration: "none"
                        }}
                    >
                        {primaryText || t("home.ctaVolunteer", "Get Involved")}
                    </Link>
                    <Link
                        to={secondaryLink}
                        style={{
                            padding: "0.7rem 1.5rem",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            background: "#fff",
                            color: "#111",
                            fontWeight: "600",
                            fontSize: "0.86rem",
                            textDecoration: "none"
                        }}
                    >
                        {secondaryText || t("home.ctaPartner", "Inquire About Partnership")}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PageCTA;
