import React from 'react';

const Section = ({
    children,
    className = '',
    id = '',
    light = false
}) => {
    // light prop can be used to alternate background colors if needed
    // checking if bg is needed, otherwise default transparent/white

    return (
        <section id={id} className={`section-padding ${className}`} style={{ backgroundColor: light ? 'var(--color-bg-light)' : 'transparent' }}>
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Section;
