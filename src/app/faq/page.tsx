import PageHeader from '@/components/ui/PageHeader';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './Faq.module.css';

export const metadata = {
    title: 'Frequently Asked Questions | Elekon Engineers',
    description: 'Common questions about our electrical services, pricing, safety standards, and service areas in Mysore.',
};

const FAQS = [
    {
        category: "General Questions",
        items: [
            { q: "What services does Elekon Engineers provide?", a: "We provide comprehensive electrical services including residential house wiring, commercial electrical installations, solar rooftop systems, temporary power connections, electrical repairs and maintenance, and emergency electrical services." },
            { q: "What areas do you serve?", a: "We primarily serve Mysore and surrounding areas within a 30km radius. For projects outside this area, please contact us to discuss availability." },
            { q: "Are you licensed and certified?", a: "Yes, Elekon Engineers is a licensed electrical contracting company and all our electricians are licensed professionals with appropriate certifications." },
            { q: "Do you have insurance?", a: "Yes, we carry appropriate insurance coverage for our operations and projects." },
            { q: "What are your business hours?", a: "We're open Monday to Saturday from 9:00 AM to 6:00 PM. We're closed on Sundays but offer 24/7 emergency service for urgent electrical issues." }
        ]
    },
    {
        category: "Project & Pricing Questions",
        items: [
            { q: "Do you provide free estimates?", a: "Yes, we offer free consultations and provide detailed written quotes for all projects at no obligation." },
            { q: "How do you determine project costs?", a: "Project costs depend on factors like project scope, materials required, labor hours, and complexity. After assessing your requirements, we provide a transparent, itemized quote." },
            { q: "What payment methods do you accept?", a: "We accept cash, bank transfer (NEFT/RTGS/IMPS), UPI payments, and other digital payment methods." },
            { q: "Do you require advance payment?", a: "For larger projects, we typically request a 30-40% advance payment to procure materials, with the balance due upon project completion. Terms are clearly mentioned in the quote." },
            { q: "Can project costs change after the quote?", a: "Our quotes are fixed unless there are change orders requested by you or unforeseen site conditions require additional work. Any changes are discussed and approved before proceeding." }
        ]
    },
    {
        category: "Residential Services",
        items: [
            { q: "How long does a typical house wiring project take?", a: "For a standard 2-3 BHK house, complete wiring typically takes 7-10 days depending on the size and complexity. We provide a detailed timeline in our project proposal." },
            { q: "Can you work in occupied homes?", a: "Yes, for renovation or repair work in occupied homes, we can schedule work to minimize disruption and maintain a clean, safe work environment." },
            { q: "What brands of materials do you use?", a: "We use only certified, reputable brands including Polycab, Havells, Finolex for cables; Legrand, Schneider, Anchor for switches; and Siemens, ABB, Schneider for circuit breakers." },
            { q: "Do you provide warranty on your work?", a: "Yes, we provide warranty on our workmanship. Material warranties are as per manufacturer terms (typically 1-10 years depending on the product)." }
        ]
    },
    {
        category: "Solar Services",
        items: [
            { q: "How much does a residential solar system cost?", a: "A typical 3kW residential system costs approximately ₹1,80,000 - ₹2,10,000 after government subsidies. Final costs depend on system size, components, and installation complexity." },
            { q: "Are there government subsidies for solar installation?", a: "Yes, the government offers subsidies for residential solar installations. We help you with all documentation and subsidy application processes." },
            { q: "What is the payback period for solar investment?", a: "Typically 5-7 years for residential systems, depending on your current electricity consumption and tariff rates. After payback, you enjoy free electricity for 18-20+ years." },
            { q: "What maintenance do solar panels require?", a: "Minimal maintenance—primarily periodic cleaning (2-4 times per year) and annual inspection of connections and inverter. We offer maintenance contracts for hassle-free upkeep." }
        ]
    },
    {
        category: "Emergency Services",
        items: [
            { q: "Do you offer 24/7 emergency service?", a: "Yes, we provide 24/7 emergency response for urgent electrical issues. Call 7892506728 for emergency service." },
            { q: "How quickly can you respond to emergencies?", a: "We typically respond within 2 hours for genuine emergencies within Mysore city limits." },
            { q: "Is there an extra charge for emergency service?", a: "Emergency service outside regular business hours may incur additional charges. We'll inform you of any applicable charges before proceeding with the work." }
        ]
    }
];

export default function FaqPage() {
    return (
        <main>
            <PageHeader
                title="Frequently Asked Questions"
                subtitle="Got Questions? We Have Answers."
                backgroundImage="https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?q=80&w=2070"
            />

            <section className="section container">
                <div className={styles.faqWrapper}>
                    {FAQS.map((section, sIndex) => (
                        <div key={sIndex} className={styles.section}>
                            <h2 className={styles.categoryTitle}>{section.category}</h2>
                            <div className={styles.list}>
                                {section.items.map((item, iIndex) => (
                                    <details key={iIndex} className={styles.details}>
                                        <summary className={styles.summary}>
                                            {item.q}
                                            <ChevronDown className={styles.icon} />
                                        </summary>
                                        <div className={styles.answer}>
                                            <p>{item.a}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
