import Link from 'next/link';
import Button from '../ui/Button';
import styles from './Hero.module.css';
import { ArrowRight } from 'lucide-react'; // Added import for ArrowRight

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.bgImage} />
            <div className={styles.overlay} />

            <div className="container">
                <div className={styles.content}>
                    <h1 className={`${styles.title} text-3d`}>
                        The Modern <br />
                        <span style={{ color: 'var(--primary)' }}>Electrical</span> <br />
                        Solution Provider.
                    </h1>
                    <p className={styles.description}>
                        Simplify your power infrastructure with Mysore's first technology-driven electrical contracting firm.
                        Safety, Efficiency, and Innovation combined.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Button href="/contact" variant="primary" className="hover-glow">
                            Get Started <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </Button>
                        <Button href="/services" variant="outline" className={`${styles.secondaryBtn} hover-lift`}>
                            View Services
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
