import Link from 'next/link';
import { Home, Sun, Building2, Zap, ArrowRight } from 'lucide-react';
import styles from './ServicesSection.module.css';

const SERVICES = [
    {
        id: 'residential',
        title: 'Residential Electrical Works',
        icon: Home,
        description: 'Complete house wiring, lighting installation, circuit breaker setup, and electrical maintenance for homes of all sizes.',
        color: '#0066CC',
        image: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=2071' // Home Electrical
    },
    {
        id: 'solar',
        title: 'Solar Rooftop Solutions',
        icon: Sun,
        description: 'Professional solar panel installation for residential properties. Reduce your electricity bills with clean, renewable energy.',
        color: '#ffa500',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072' // Solar
    },
    {
        id: 'commercial',
        title: 'Commercial & Industrial',
        icon: Building2,
        description: 'Comprehensive electrical systems for offices, commercial buildings, and industrial facilities with preventive maintenance.',
        color: '#1e3a8a',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069' // Commercial
    },
    {
        id: 'temporary',
        title: 'Temporary Power Connections',
        icon: Zap,
        description: 'Reliable temporary electrical setups for construction sites, events, and outdoor activities with generator connections.',
        color: '#ef4444',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070' // Industrial/Temporary
    },
];

export default function ServicesSection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Electrical Services</h2>
                    <p className={styles.description}>
                        Comprehensive solutions tailored to meet the unique needs of every client.
                    </p>
                </div>

                <div className={styles.grid}>
                    {SERVICES.map((service) => (
                        <div key={service.id} className={`${styles.card} hover-3d`}>
                            <div
                                className={styles.imageWrapper}
                                style={{
                                    background: `url(${service.image}) center/cover no-repeat`,
                                }}
                            />
                            <div className={styles.cardContent}>
                                <div className={styles.cardIcon}>
                                    <service.icon size={32} color={service.color} />
                                </div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardText}>{service.description}</p>
                                <Link href={`/services#${service.id}`} className={styles.link}>
                                    Learn More <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
