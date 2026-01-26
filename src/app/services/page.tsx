import PageHeader from '@/components/ui/PageHeader';
import Button from '@/components/ui/Button';
import { Home, Sun, Building2, Zap, CheckCircle2, ArrowRight, ClipboardList, ShieldCheck } from 'lucide-react';

export const metadata = {
    title: 'Our Services | Elekon Engineers',
    description: 'Comprehensive electrical services in Mysore: Residential wiring, Solar rooftop systems, Commercial electrical maintenance, and Temporary power solutions.',
};

export default function ServicesPage() {
    return (
        <main>
            <PageHeader
                title="Our Electrical Services"
                subtitle="Comprehensive Electrical Solutions for Residential, Commercial & Industrial Needs"
                backgroundImage="https://images.unsplash.com/photo-1473186578169-2148b96570cb?q=80&w=2070"
            />

            {/* Intro */}
            <section className="section container text-center">
                <p style={{ fontSize: '1.2rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto', color: 'var(--foreground-muted)' }}>
                    At Elekon Engineers, we offer a complete range of electrical services designed to meet the diverse needs of our clients in Mysore. From new installations to maintenance and emergency repairs, our licensed electricians deliver professional service with a focus on safety, quality, and customer satisfaction.
                </p>
            </section>

            {/* Residential */}
            <section id="residential" className="section" style={{ background: 'var(--background-alt)' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <Home size={32} color="var(--primary)" />
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)' }}>Residential Electrical Services</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div>
                            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', fontWeight: '500' }}>Building Your Dream Home? We've Got You Covered.</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <ServiceItem title="Complete House Wiring" desc="Professional wiring for new construction and renovation projects. We handle everything from electrical system layout, planning, and design to installation and testing." />
                                <ServiceItem title="Lighting Installation" desc="Indoor and outdoor lighting, LED retrofits, decorative lighting, smart lighting setups, and ceiling fan installation." />
                                <ServiceItem title="Electrical Outlet & Switch Installation" desc="Installation of standard, USB, and GFCI outlets, modular switches, dimmers, and smart home switches." />
                                <ServiceItem title="Circuit Breaker & Load Center Setup" desc="Main service panel installation, upgrades, load calculation, sub-panels, and breaker repairs." />
                                <ServiceItem title="Troubleshooting & Repairs" desc="Quick diagnosis of power outages, tripping breakers, flickering lights, and wiring damage." />
                                <ServiceItem title="Earthing & Grounding" desc="Complete earthing system installation, earth pit construction, and lightning protection." />
                            </div>
                            <div style={{ marginTop: '2rem' }}>
                                <Button href="/contact" variant="primary">Request Free Home Visit</Button>
                            </div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                position: 'sticky', top: '100px',
                                height: '400px',
                                background: 'url(https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070) center/cover',
                                borderRadius: 'var(--radius)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                            }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Solar */}
            <section id="solar" className="section">
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <Sun size={32} color="var(--secondary)" />
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)' }}>Solar Rooftop Solutions</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        <div style={{ height: '400px', background: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072) center/cover', borderRadius: 'var(--radius)' }} />
                        <div>
                            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', fontWeight: '500' }}>Go Solar, Save Money, Save the Planet</p>
                            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                Reduce your electricity bills and carbon footprint with professional solar rooftop installation. We design and install high-quality residential solar systems that deliver clean, renewable energy.
                            </p>

                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Our Solar Services:</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                                <CheckItem text="Residential Solar Installation (On-grid/Off-grid)" />
                                <CheckItem text="Solar System Design & Consultation" />
                                <CheckItem text="Net Metering Setup & Approvals" />
                                <CheckItem text="Solar Maintenance & Cleaning" />
                            </ul>

                            <div style={{ background: 'var(--background-alt)', padding: '1.5rem', borderRadius: 'var(--radius)', marginBottom: '2rem' }}>
                                <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Typical 3kW System Benefits:</h4>
                                <ul style={{ fontSize: '0.9rem', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
                                    <li>Monthly Savings: ₹2,500 - ₹3,000</li>
                                    <li>Payback Period: 5-6 years</li>
                                    <li>System Lifespan: 25+ years</li>
                                </ul>
                            </div>

                            <Button href="/contact" variant="secondary">Get Free Solar Assessment</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commercial */}
            <section id="commercial" className="section" style={{ background: 'var(--primary-dark)', color: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <Building2 size={32} color="var(--secondary)" />
                        <h2 style={{ fontSize: '2.5rem', color: '#fff' }}>Commercial & Industrial</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                        <div>
                            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
                                Powering Businesses with Reliable Electrical Solutions for offices, retail spaces, and industrial facilities.
                            </p>
                            <div style={{ display: 'grid', gap: '2rem' }}>
                                <ServiceItem title="Office & Commercial Electrical Systems" desc="Design and installation for offices, server rooms, conference rooms, and lighting." lightMode />
                                <ServiceItem title="Power Distribution Systems" desc="Main distribution boards, sub-panels, 3-phase systems, busbars, and cable trays." lightMode />
                                <ServiceItem title="Panel Board Installation" desc="Control panels, PLC panels, motor control centers, and upgrades." lightMode />
                                <ServiceItem title="Preventive Maintenance" desc="Regular inspections, thermal imaging, and testing to minimize downtime." lightMode />
                            </div>
                            <div style={{ marginTop: '3rem' }}>
                                <Button href="/contact" variant="secondary">Request Commercial Quote</Button>
                            </div>
                        </div>
                        <div>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>Why Businesses Choose Us</h3>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <CheckItem text="Minimal Downtime & Off-hours Work" lightMode />
                                    <CheckItem text="Industrial-Grade Safety Protocols" lightMode />
                                    <CheckItem text="Code Compliant Installations" lightMode />
                                    <CheckItem text="24/7 Emergency Support" lightMode />
                                </ul>
                            </div>
                            <div style={{ height: '300px', background: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069) center/cover', borderRadius: 'var(--radius)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Temporary */}
            <section id="temporary" className="section">
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <Zap size={32} color="#ef4444" />
                    </div>

                    <p style={{ fontSize: '1.2rem', maxWidth: '800px', marginBottom: '3rem', opacity: 0.9 }}>
                        Reliable power when and where you need it. Safe setups for construction sites, events, and outdoor activities.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        <div className="glass hover-3d" style={{ padding: '2rem', borderRadius: 'var(--radius)' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#ef4444' }}>Construction Sites</h3>
                            <p style={{ color: 'var(--foreground-muted)' }}>Temporary service entrance, site lighting, temporary distribution boards, cabling, power distribution to work areas, and office setup.</p>
                        </div>
                        <div className="glass hover-3d" style={{ padding: '2rem', borderRadius: 'var(--radius)' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#ef4444' }}>Events & Functions</h3>
                            <p style={{ color: 'var(--foreground-muted)' }}>Safe wiring for stages, sound systems, lighting towers, food stalls, and emergency backup power generation.</p>
                        </div>
                        <div className="glass hover-3d" style={{ padding: '2rem', borderRadius: 'var(--radius)' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#ef4444' }}>Emergency Power</h3>
                            <p style={{ color: 'var(--foreground-muted)' }}>Rapid deployment of generators and temporary connections during power outages or disaster recovery.</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <Button href="/contact" variant="primary">Get Temporary Power Quote</Button>
                    </div>
                </div>
            </section>

            {/* Work Process */}
            <section className="section" style={{ background: 'var(--background-alt)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <ClipboardList size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)' }}>How We Work</h2>
                        <p style={{ color: 'var(--foreground-muted)' }}>Our transparent 5-step process ensures a hassle-free experience.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <ProcessStep step="1" title="Consultation" desc="We discuss your needs, assess the site, and understand your specific requirements." />
                        <ProcessStep step="2" title="Estimation" desc="You receive a detailed, transparent quote with no hidden charges." />
                        <ProcessStep step="3" title="Planning" desc="We schedule the work at your convenience and procure high-quality materials." />
                        <ProcessStep step="4" title="Execution" desc="Our licensed electricians carry out the installation adhering to safety standards." />
                        <ProcessStep step="5" title="Completion" desc="Final safety testing, site cleanup, and project handover." />
                    </div>
                </div>
            </section>

            {/* Guarantee */}
            <section className="section container" style={{ textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--primary-dark)', color: '#fff', padding: '3rem', borderRadius: 'var(--radius)' }}>
                    <ShieldCheck size={48} style={{ marginBottom: '1rem', color: 'var(--secondary)' }} />
                    <h2 style={{ marginBottom: '1rem' }}>Our Service Guarantee</h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem' }}>
                        We stand behind our work. All our installations come with a workmanship warranty and post-service support to ensure your peace of mind.
                    </p>
                    <Button href="/contact" variant="secondary">Start Your Project Today</Button>
                </div>
            </section>
        </main >
    );
}

function ServiceItem({ title, desc, lightMode }: { title: string, desc: string, lightMode?: boolean }) {
    return (
        <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: lightMode ? 'var(--secondary)' : 'var(--primary-dark)' }}>{title}</h3>
            <p style={{ fontSize: '1rem', color: lightMode ? 'rgba(255,255,255,0.8)' : 'var(--foreground-muted)', lineHeight: '1.6' }}>{desc}</p>
        </div>
    );
}

function CheckItem({ text, lightMode }: { text: string, lightMode?: boolean }) {
    return (
        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', color: lightMode ? '#fff' : 'inherit' }}>
            <CheckCircle2 size={20} color={lightMode ? 'var(--secondary)' : 'var(--primary)'} />
            <span>{text}</span>
        </li>
    );
}

function ProcessStep({ step, title, desc }: { step: string, title: string, desc: string }) {
    return (
        <div style={{ background: '#fff', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', position: 'relative' }}>
            <div style={{
                position: 'absolute', top: '-1rem', left: '2rem',
                width: '3rem', height: '3rem',
                background: 'var(--secondary)', color: '#000',
                fontWeight: 'bold', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.25rem'
            }}>
                {step}
            </div>
            <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem', fontSize: '1.25rem' }}>{title}</h3>
            <p style={{ color: 'var(--foreground-muted)' }}>{desc}</p>
        </div>
    );
}
