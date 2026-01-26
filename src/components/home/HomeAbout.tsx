import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function HomeAbout() {
    return (
        <section className="section container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
                        Welcome to Elekon Engineers
                    </h2>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--foreground-muted)', lineHeight: '1.6' }}>
                        Elekon Engineer and Services is a licensed electrical contracting company based in Mysore,
                        dedicated to delivering comprehensive electrical solutions for homes, businesses, and construction projects.
                        With a strong focus on safety, reliability, and quality craftsmanship, we provide professional
                        electrical services tailored to meet our clients' unique needs.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--foreground-muted)', lineHeight: '1.6' }}>
                        From complete house wiring to solar rooftop installations and temporary power setups, our team
                        of skilled electricians ensures every project is executed with precision and adherence to
                        national safety standards.
                    </p>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontFamily: 'var(--font-montserrat)' }}>Why Choose Elekon Engineers?</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {[
                                "Licensed and certified electricians",
                                "Commitment to safety and quality workmanship",
                                "Quick response and reliable customer service",
                                "Cost-effective and efficient project delivery",
                                "Use of high-quality, certified materials only"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle2 size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link href="/about" className="btn btn-primary">
                        More About Us <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                    </Link>
                </div>

                <div style={{ position: 'relative', height: '500px' }}>
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        background: 'url(https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=2069) center/cover no-repeat',
                        borderRadius: 'var(--radius)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    }} />
                </div>
            </div>
        </section>
    );
}
