import Link from 'next/link';

export default function CtaSection() {
    return (
        <section className="section" style={{ background: 'var(--secondary)', color: 'var(--foreground)' }}>
            <div className="container text-center">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#000' }}>Ready to Get Started?</h2>
                <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2.5rem', color: '#333' }}>
                    Contact us today for a free consultation and quote. Our team is ready to help you with all your electrical needs.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link href="/contact" className="btn" style={{ background: '#000', color: '#fff' }}>
                        Get Your Free Quote Today
                    </Link>
                </div>
            </div>
        </section>
    );
}
