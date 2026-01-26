import Link from 'next/link';
import { ShieldCheck, HardHat, CheckCircle } from 'lucide-react';

export default function HomeSafety() {
    return (
        <section className="section" style={{ background: 'var(--primary-dark)', color: '#fff' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '1.5rem' }}>
                            <ShieldCheck size={20} color="var(--secondary)" />
                            <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Safety First, Always</span>
                        </div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff' }}>Safety Is Our Priority</h2>
                        <p style={{ marginBottom: '1.5rem', opacity: 0.9, lineHeight: '1.6', fontSize: '1.1rem' }}>
                            At Elekon Engineers, safety comes first. We strictly adhere to national and local electrical codes
                            and safety standards. All our electricians are licensed, trained, and equipped with modern tools
                            and safety gear to ensure every project is executed with precision and care.
                        </p>
                        <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                            {[
                                "National Electrical Code Compliant",
                                "Licensed & Trained Electricians",
                                "High-Quality Certified Materials",
                                "Comprehensive Safety Protocols"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <CheckCircle size={20} color="var(--secondary)" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/safety" className="btn" style={{ background: '#fff', color: 'var(--primary-dark)' }}>
                            Explore Safety Standards
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="hover-3d" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                            <HardHat size={40} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>PPE Compliance</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Full protective gear for all teams</p>
                        </div>
                        <div className="hover-3d" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                            <ShieldCheck size={40} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Zero Accidents</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>100% safety record maintained</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
