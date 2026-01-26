import styles from './QuickStats.module.css';

const STATS = [
    { number: 'Govt.', label: 'Approved Contractor' },
    { number: '100%', label: 'Safety Record' },
    { number: 'Best', label: 'Quality Service' },
    { number: '24/7', label: 'Support Available' },
];

export default function QuickStats() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {STATS.map((stat, index) => (
                        <div key={index} className={styles.stat}>
                            <span className={styles.number} style={{ fontSize: '2.5rem' }}>{stat.number}</span>
                            <span className={styles.label}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
