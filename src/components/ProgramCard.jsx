import React from 'react';
import Button from './Button';
import { ArrowRight, Check } from 'lucide-react';

const ProgramCard = ({
    title,
    description,
    color = 'red', // 'red' or 'blue'
    features = [],
    linkTo
}) => {
    const isRed = color === 'red';
    const headerBg = isRed ? 'var(--color-red-program)' : 'var(--color-blue-program)';
    const lightBg = isRed ? 'var(--color-red-bg)' : 'var(--color-blue-bg)';
    const btnVariant = isRed ? 'red' : 'blue';

    return (
        <div className="card h-full flex flex-col">
            <div style={{ backgroundColor: headerBg, height: '8px' }}></div>
            <div className="p-6 flex-1 flex flex-col" style={{ padding: '2rem' }}>
                <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: 'var(--color-primary)'
                }}>
                    {title}
                </h3>
                <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
                    {description}
                </p>

                <div style={{
                    backgroundColor: lightBg,
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1.5rem'
                }}>
                    <h4 style={{
                        fontWeight: '600',
                        marginBottom: '0.5rem',
                        fontSize: '0.9rem',
                        color: headerBg
                    }}>
                        What's included:
                    </h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {features.map((feature, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', fontSize: '0.95rem' }}>
                                <Check size={16} style={{ marginTop: '0.25rem', color: headerBg, flexShrink: 0 }} />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{ marginTop: 'auto' }}>
                    <Button to={linkTo} variant={btnVariant} className="w-full" style={{ width: '100%' }}>
                        Learn More <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;
