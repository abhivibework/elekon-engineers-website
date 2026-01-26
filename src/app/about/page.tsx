import PageHeader from '@/components/ui/PageHeader';
import { Target, Lightbulb, Users, CheckCircle, Hammer } from 'lucide-react';

export const metadata = {
    title: 'About Elekon Engineers',
    description: 'Your Trusted Electrical Partner in Mysore. Licensed electrical contractors delivering safe, sustainable, and innovative solutions.',
};

export default function AboutPage() {
    return (
        <main>
            <PageHeader
                title="About Elekon Engineers"
                subtitle="Your Trusted Electrical Partner in Mysore"
                backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"
            />

            {/* Introduction */}
            <section className="section container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
                            Trusted Electrical Solutions
                        </h2>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--foreground-muted)', lineHeight: '1.7', fontSize: '1.1rem' }}>
                            Elekon Engineer and Services Works is a licensed electrical contracting company established with a vision to deliver safe, sustainable, and innovative electrical solutions for every home and business in Mysore and surrounding areas.
                        </p>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--foreground-muted)', lineHeight: '1.7', fontSize: '1.1rem' }}>
                            We understand that electrical work requires precision, safety, and reliability. That's why we've built our reputation on quality workmanship, professional service, and unwavering commitment to customer satisfaction. Whether you're building a new home, renovating an existing property, or need temporary power for a construction project, Elekon Engineers has the expertise and experience to get the job done right.
                        </p>
                    </div>
                    <div style={{
                        height: '400px',
                        background: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070) center/cover',
                        borderRadius: 'var(--radius)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    }} />
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section" style={{ background: 'var(--background-alt)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="glass hover-3d" style={{ padding: '2.5rem', borderRadius: 'var(--radius)' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}><Lightbulb size={40} /></div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-cinzel)' }}>Our Vision</h3>
                            <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: 'var(--foreground-muted)' }}>
                                To be a trusted name in the electrical industry by delivering safe, sustainable, and innovative electrical solutions for every home and business. We envision a future where every property in Mysore has access to reliable, energy-efficient electrical systems alongside solar adoption.
                            </p>
                        </div>
                        <div className="glass hover-3d" style={{ padding: '2.5rem', borderRadius: 'var(--radius)' }}>
                            <div style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}><Target size={40} /></div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-cinzel)' }}>Our Mission</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', gap: '0.75rem' }}>
                                    <CheckCircle size={20} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                                    <span>Provide top-tier electrical workmanship with zero compromise on safety.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '0.75rem' }}>
                                    <CheckCircle size={20} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                                    <span>Empower homeowners to switch to renewable solar energy seamlessly.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '0.75rem' }}>
                                    <CheckCircle size={20} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                                    <span>Ensure 24/7 reliability for commercial and industrial clients.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="section container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>Leadership</h2>
                    <p style={{ color: 'var(--foreground-muted)' }}>The vision behind Elekon Engineers</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ maxWidth: '350px', textAlign: 'center' }}>

                        <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-cinzel)' }}>Bharat Raj R</h3>
                        <p style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '1rem' }}>Managing Director</p>
                        <p style={{ color: 'var(--foreground-muted)' }}>
                            Under the leadership of Bharat Raj R, Elekon Engineers has grown to become a trusted name in Mysore's electrical contracting industry. With a strong focus on quality, safety, and customer satisfaction, Bharat leads a team of skilled electricians committed to delivering excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team & Strengths */}
            <section className="section" style={{ background: 'var(--primary-dark)', color: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Team</h2>
                            <p style={{ marginBottom: '2rem', opacity: 0.9, lineHeight: '1.7', fontSize: '1.1rem' }}>
                                Our team consists of licensed and certified electricians with extensive experience in residential, commercial, and industrial electrical work. Every team member undergoes regular training to stay updated with the latest electrical technologies and safety protocols.
                            </p>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Modern Tools for Professional Results</h3>
                            We are equipped with state-of-the-art tools and testing devices including digital multimeters, clamp meters, insulation resistance testers, earth resistance testers, power drills, conduit benders, and portable generators for on-site temporary power. We also ensure full safety with complete PPE (gloves, helmets, etc.).
                        </div>

                        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: 'var(--radius)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Why Mysore Trusts Us</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    "Licensed & Skilled Electricians",
                                    "Commitment to Safety",
                                    "Quick Response Time",
                                    "Reliable Customer Service",
                                    "Cost-Effective Solutions",
                                    "Quality Workmanship"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <CheckCircle size={20} color="var(--secondary)" />
                                        <span style={{ fontSize: '1.1rem' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitment */}
            <section className="section container text-center">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--primary-dark)' }}>Our Commitment to You</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    {[
                        { title: "Transparent Communication", icon: Users },
                        { title: "Professional Service", icon: CheckCircle },
                        { title: "Quality Guarantee", icon: Award },
                        { title: "After-Sales Support", icon: Hammer },
                        { title: "Fair Pricing", icon: Lightbulb }
                    ].map((item, i) => (
                        <div key={i} style={{ padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid #eee' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                <item.icon size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.1rem' }}>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ background: 'var(--secondary)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#000' }}>Ready to Experience the Elekon Difference?</h2>
                    <p style={{ marginBottom: '2rem', color: '#333' }}>Contact us today to discuss your electrical needs.</p>
                    <a href="/contact" className="btn btn-primary" style={{ background: '#000', color: '#fff', border: 'none' }}>
                        Get Free Consultation
                    </a>
                </div>
            </section>
        </main>
    );
}

// Icon component helper
function Award({ size, ...props }: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
    );
}
