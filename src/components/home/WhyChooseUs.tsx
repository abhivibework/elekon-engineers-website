import { ShieldCheck, UserCheck, Clock, Award } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const FEATURES = [
    {
        title: 'Safety First Protocol',
        description: 'We adhere to the strictest safety standards and protocols to ensure the wellbeing of your property and our team.',
        icon: ShieldCheck,
    },
    {
        title: 'Licensed & Certified',
        description: 'Our team comprises fully licensed engineers and technicians with extensive training and certifications.',
        icon: Award,
    },
    {
        title: 'Customer Centric',
        description: 'We prioritize your needs and satisfaction, offering transparent pricing and clear communication.',
        icon: UserCheck,
    },
    {
        title: 'Timely Delivery',
        description: 'We value your time. Our projects are planned and executed to meet agreed deadlines without compromise.',
        icon: Clock,
    },
];

export default function WhyChooseUs() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2>Why Choose Elekon?</h2>
                        <ul className={styles.features}>
                            {FEATURES.map((feature, index) => (
                                <li key={index} className={`${styles.feature} hover-lift`}>
                                    <div className={styles.iconWrapper}>
                                        <feature.icon size={28} />
                                    </div>
                                    <div>
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.image}>
                        {/* Placeholder for "Team working" or "Engineer" image */}
                        <div
                            className={styles.img}
                            style={{
                                background: 'url(https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070) center/cover no-repeat'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
