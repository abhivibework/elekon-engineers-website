import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Zap } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Company Info */}
                    <div className={`${styles.column} ${styles.about}`}>
                        <Link href="/" className={styles.logo} style={{ display: 'block', marginBottom: '1rem' }}>
                            <img src="/assets/logo.jpg" alt="Elekon Engineers Logo" style={{ height: '60px', width: 'auto', borderRadius: 'var(--radius)' }} />
                        </Link>
                        <p className={styles.tagline}>Your Trusted Electrical Partner in Mysore</p>
                        <div className={styles.social}>
                            <Link href="#" className={styles.socialIcon} aria-label="Facebook"><Facebook size={20} /></Link>
                            <Link href="#" className={styles.socialIcon} aria-label="Twitter"><Twitter size={20} /></Link>
                            <Link href="#" className={styles.socialIcon} aria-label="Instagram"><Instagram size={20} /></Link>
                            <Link href="#" className={styles.socialIcon} aria-label="LinkedIn"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.column}>
                        <h3>Quick Links</h3>
                        <ul className={styles.links}>
                            <li><Link href="/" className={styles.link}>Home</Link></li>
                            <li><Link href="/about" className={styles.link}>About Us</Link></li>
                            <li><Link href="/services" className={styles.link}>Services</Link></li>
                            <li><Link href="/safety" className={styles.link}>Safety & Quality</Link></li>
                            <li><Link href="/contact" className={styles.link}>Contact Us</Link></li>
                            <li><Link href="/faq" className={styles.link}>FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className={styles.column}>
                        <h3>Services</h3>
                        <ul className={styles.links}>
                            <li><Link href="/services#residential" className={styles.link}>Residential Electrical</Link></li>
                            <li><Link href="/services#solar" className={styles.link}>Solar Rooftop</Link></li>
                            <li><Link href="/services#commercial" className={styles.link}>Commercial & Industrial</Link></li>
                            <li><Link href="/services#temporary" className={styles.link}>Temporary Power</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.column}>
                        <h3>Contact</h3>
                        <div className={styles.contactInfo}>
                            <div className={styles.link} style={{ alignItems: 'flex-start' }}>
                                <MapPin size={18} style={{ marginTop: '3px', flexShrink: 0 }} />
                                <span>909 Theerthankara Marga,<br />Near Sangeetha Corner,<br />Siddhartha Layout, Mysore - 570011</span>
                            </div>
                            <a href="tel:7892506728" className={styles.link}>
                                <Phone size={18} /> 7892506728 | 8095241154
                            </a>
                            <a href="mailto:elekonengineers@gmail.com" className={styles.link}>
                                <Mail size={18} /> elekonengineers@gmail.com
                            </a>
                            <div className={styles.link} style={{ alignItems: 'flex-start', marginTop: '1rem' }}>
                                <Clock size={18} style={{ marginTop: '3px', flexShrink: 0 }} />
                                <div>
                                    <p style={{ margin: 0, fontWeight: 600, color: '#fff' }}>Business Hours</p>
                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Mon - Sat: 9:00 AM - 6:00 PM</p>
                                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--secondary)' }}>24/7 Emergency Service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Elekon Engineers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
