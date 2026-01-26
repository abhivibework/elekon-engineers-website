import PageHeader from '@/components/ui/PageHeader';
import { Shield, CheckCircle, HardHat, FileCheck, AlertTriangle, Zap, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata = {
    title: 'Safety & Quality | Elekon Engineers',
    description: 'Our commitment to uncompromising safety standards, protocols, and quality assurance in every electrical project.',
};

export default function SafetyPage() {
    return (
        <main>
            <PageHeader
                title="Safety & Quality Assurance"
                subtitle="Uncompromising Standards for Your Peace of Mind"
                backgroundImage="https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070"
            />

            {/* Commitment */}
            <section className="section container">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <Shield size={64} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>Zero Compromise on Safety</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.7', color: 'var(--foreground-muted)' }}>
                        At Elekon Engineers, safety isn't just a priority—it's the foundation of everything we do. We strictly adhere to national and local electrical codes. Our commitment to safety protects not just our team, but also your property, your family, and your investment.
                    </p>
                </div>
            </section>

            {/* Protocols */}
            <section className="section" style={{ background: 'var(--background-alt)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Our Safety Protocols</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <ProtocolCard title="Pre-Work Safety Planning" icon={FileCheck} desc="Site assessment, hazard identification, and safety briefings before any work begins." />
                        <ProtocolCard title="Personal Protective Equipment (PPE)" icon={HardHat} desc="Mandatory use of safety helmets, insulated gloves, safety shoes, and eye protection." />
                        <ProtocolCard title="Electrical Safety Measures" icon={Zap} desc="LOTO procedures, voltage testing, arc flash protection, and insulated tools." />
                        <ProtocolCard title="Fire Safety" icon={AlertTriangle} desc="Fire extinguishers on site, proper wire sizing to prevent overheating, and safe routing." />
                    </div>
                </div>
            </section>

            {/* Quality Process */}
            <section className="section container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Quality Assurance Process</h2>
                <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                    {[
                        { step: "1", title: "Planning & Design Phase", desc: "Accurate load calculations, code-compliant design, and material specifications." },
                        { step: "2", title: "Material Procurement", desc: "Sourcing certified materials from trusted brands (Polycab, Legrand, etc.) only." },
                        { step: "3", title: "Installation Phase", desc: "Skilled workmanship by licensed electricians following manufacturer specs." },
                        { step: "4", title: "Testing & Commissioning", desc: "Continuity, insulation resistance, earth resistance, and load testing." },
                        { step: "5", title: "Documentation & Handover", desc: "As-built drawings, test reports, and warranty documents provided." }
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem', border: '1px solid #eee', borderRadius: 'var(--radius)' }}>
                            <div style={{ background: 'var(--primary)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>
                                {item.step}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--foreground-muted)' }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Promise & CTA */}
            <section className="section" style={{ background: 'var(--primary-dark)', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Our Safety Promise</h2>
                    <p style={{ fontSize: '1.5rem', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
                        "We treat every project as if we're working in our own home. Your safety is our responsibility, and we take that responsibility seriously."
                    </p>
                    <p style={{ marginBottom: '3rem' }}>— Bharat Raj R, Managing Director</p>

                    <Button href="/contact" variant="secondary">Request Safety Inspection</Button>
                </div>
            </section>
        </main>
    );
}

function ProtocolCard({ title, icon: Icon, desc }: any) {
    return (
        <div style={{ background: '#fff', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <Icon size={32} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
            <p style={{ color: 'var(--foreground-muted)' }}>{desc}</p>
        </div>
    );
}
