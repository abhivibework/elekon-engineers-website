"use client";

import { Phone, Mail } from 'lucide-react';
import styles from './StickyContactBar.module.css';

export default function StickyContactBar() {
    return (
        <div className={styles.bar}>
            <a href="tel:7892506728" className={styles.item}>
                <Phone size={16} />
                <span>Call: 7892506728</span>
            </a>
            <div className={styles.divider} />
            <a href="mailto:elekonengineers@gmail.com" className={styles.item}>
                <Mail size={16} />
                <span>Email Us</span>
            </a>
        </div>
    );
}
