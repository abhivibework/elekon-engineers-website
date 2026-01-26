"use client";

import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        text: "Professional service and excellent workmanship. Elekon Engineers completed our house wiring project on time and within budget. Highly recommended!",
        author: "Client Name",
        location: "Mysore"
    },
    {
        text: "We needed temporary power for our construction site urgently. Elekon's team responded quickly and set up everything safely and efficiently.",
        author: "Client Name",
        location: "Mysore"
    },
    {
        text: "Great experience with solar rooftop installation. The team was knowledgeable and the quality of work was outstanding.",
        author: "Client Name",
        location: "Mysore"
    }
];

export default function Testimonials() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="section" style={{ background: 'var(--background-alt)' }}>
            <div className="container text-center">
                <h2 style={{ marginBottom: '3rem', fontSize: '2.5rem', color: 'var(--primary)' }}>What Our Clients Say</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', minHeight: '300px' }}>
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={i}
                            style={{
                                position: 'absolute', left: 0, top: 0, width: '100%',
                                opacity: active === i ? 1 : 0,
                                transform: `translateX(${active === i ? 0 : 20}px)`,
                                transition: 'all 0.5s ease',
                                pointerEvents: active === i ? 'all' : 'none',
                                visibility: active === i ? 'visible' : 'hidden',
                                background: 'var(--glass)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                padding: '3rem',
                                borderRadius: 'var(--radius)',
                            }}
                        >
                            <Quote size={40} color="var(--primary)" style={{ opacity: 0.2, margin: '0 auto 1.5rem' }} />
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '2rem', fontStyle: 'italic', color: '#fff' }}>
                                "{t.text}"
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '1rem' }}>
                                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={20} fill="#FFA500" color="#FFA500" />)}
                            </div>
                            <p style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--primary)' }}>{t.author}</p>
                            <p style={{ color: 'var(--foreground-muted)' }}>{t.location}</p>
                        </div>
                    ))}

                    {/* Dots */}
                    <div style={{ position: 'absolute', bottom: '-40px', left: 0, width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                        {TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                style={{
                                    width: '12px', height: '12px', borderRadius: '50%', border: 'none', cursor: 'pointer',
                                    background: active === i ? 'var(--primary)' : '#ccc',
                                    transition: 'background 0.3s'
                                }}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
