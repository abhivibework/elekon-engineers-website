"use client";

import { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Button from '@/components/ui/Button';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import styles from '@/app/contact/Contact.module.css';

export default function ContactContent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'residential',
        time: 'morning',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formsubmit.co/ajax/elekonengineers@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Lead: ${formData.service} - ${formData.name}`,
                    _template: 'table'
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', service: 'residential', time: 'morning', message: '' });
                alert('Thank you! Your message has been sent successfully. We will get back to you shortly.');
            } else {
                setStatus('error');
                alert('Something went wrong. Please try again or contact us directly via phone.');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            alert('Something went wrong. Please check your internet connection.');
        } finally {
            setStatus('idle');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main>
            <PageHeader
                title="Contact Elekon Engineers"
                subtitle="Let's Discuss Your Electrical Needs"
                backgroundImage="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071"
            />

            <div className="container">
                <div className={styles.section}>
                    <div className={styles.grid}>
                        {/* Contact Info Side */}
                        <div>
                            <div className={styles.infoCard}>
                                <h2 style={{ marginBottom: '2rem' }}>Get in Touch</h2>

                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrapper}><Phone size={20} /></div>
                                    <div className={styles.infoContent}>
                                        <h3>Phone</h3>
                                        <p><a href="tel:7892506728">+91 78925 06728</a></p>
                                        <p><a href="tel:8095241154">+91 80952 41154</a></p>
                                        <p><a href="https://wa.me/917892506728" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 600 }}>Chat on WhatsApp</a></p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrapper}><Mail size={20} /></div>
                                    <div className={styles.infoContent}>
                                        <h3>Email</h3>
                                        <p><a href="mailto:elekonengineers@gmail.com">elekonengineers@gmail.com</a></p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrapper}><MapPin size={20} /></div>
                                    <div className={styles.infoContent}>
                                        <h3>Address</h3>
                                        <p>#909 Theerthankara Marga,<br />Near Sangeetha Corner,<br />Siddhartha Layout,<br />Mysore - 570011</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrapper}><Clock size={20} /></div>
                                    <div className={styles.infoContent}>
                                        <h3>Business Hours</h3>
                                        <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                                        <p>Sun: Closed (Emergency Only)</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '2rem' }}>
                                <h3>Service Areas</h3>
                                <p style={{ color: 'var(--foreground-muted)' }}>
                                    Siddhartha Layout, Vijayanagar, Kuvempunagar, Saraswathipuram, Jayalakshmipuram, Gokulam, Yadavagiri, Hebbal, Hinkal, and surrounding areas in Mysore.
                                </p>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <h2 style={{ marginBottom: '1.5rem' }}>Get a Free Quote</h2>

                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className={styles.input}
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone" className={styles.label}>Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className={styles.input}
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.label}>Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className={styles.input}
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="service" className={styles.label}>Service Required *</label>
                                    <select
                                        id="service"
                                        name="service"
                                        className={styles.select}
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option value="residential">Residential Wiring</option>
                                        <option value="solar">Solar Installation</option>
                                        <option value="commercial">Commercial Services</option>
                                        <option value="temporary">Temporary Power</option>
                                        <option value="maintenance">Maintenance</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="time" className={styles.label}>Preferred Contact Time</label>
                                    <select
                                        id="time"
                                        name="time"
                                        className={styles.select}
                                        value={formData.time}
                                        onChange={handleChange}
                                    >
                                        <option value="morning">Morning (9AM - 12PM)</option>
                                        <option value="afternoon">Afternoon (12PM - 3PM)</option>
                                        <option value="evening">Evening (3PM - 6PM)</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>Message / Project Details *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className={styles.textarea}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <Button type="submit" fullWidth disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Sending...' : 'Get Free Quote'} <Send size={18} style={{ marginLeft: '0.5rem' }} />
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Map Embed - Siddhartha Layout */}
                    <div className={styles.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.587893821033!2d76.657!3d12.305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf702657805165%3A0xe5a3c98835f8dc13!2sSiddhartha%20Layout%2C%20Mysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709840000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
}
