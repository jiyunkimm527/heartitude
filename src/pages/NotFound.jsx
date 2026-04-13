import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const NotFound = () => {
    return (
        <Section style={{ padding: '8rem 0', textAlign: 'center' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '1rem' }}>404</h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>Page Not Found</p>
            <Button to="/" variant="primary">Go Home</Button>
        </Section>
    );
};

export default NotFound;
