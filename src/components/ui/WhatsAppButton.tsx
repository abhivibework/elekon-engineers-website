"use client";
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/917892506728"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                backgroundColor: '#25D366',
                color: '#fff',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                zIndex: 100,
                transition: 'transform 0.2s'
            }}
            aria-label="Chat on WhatsApp"
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <MessageCircle size={32} />
        </a>
    );
}
