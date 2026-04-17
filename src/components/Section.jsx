import React from 'react';

const Section = ({
    children,
    className = '',
    id = '',
    light = false,
    style = {},
}) => {
    const defaultBg = light ? 'var(--color-bg-light)' : 'transparent';

    return (
        <section
            id={id}
            className={`section-padding ${className}`}
            style={{ backgroundColor: defaultBg, ...style }}
        >
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Section;
