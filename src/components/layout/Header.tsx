"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';
import Button from '../ui/Button';
import styles from './Header.module.css';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/safety', label: 'Safety' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <img src="/assets/logo-new.jpg" alt="Elekon Engineers Logo" className={styles.logoImage} />
                    <span className={styles.brandName}>Elekon Engineers</span>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    <ul className={styles.navLinks}>
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={styles.link}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop CTA */}
                <div className={styles.ctaDesktop}>
                    <Button href="/contact" variant="primary">
                        Get Free Quote
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={styles.menuButton}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                    <ul className={styles.mobileNavLinks}>
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={styles.link}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Button href="/contact" fullWidth onClick={() => setIsMobileMenuOpen(false)}>
                                Get Free Quote
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
