import Link from 'next/link';
import styles from './Button.module.css';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    fullWidth?: boolean;
    href?: string;
    icon?: LucideIcon;
    onClick?: () => void;
    disabled?: boolean;
}

export default function Button({
    children,
    variant = 'primary',
    fullWidth = false,
    href,
    className = '',
    icon: Icon,
    onClick,
    disabled,
    ...props
}: ButtonProps) {
    const rootClassName = `
    ${styles.button} 
    ${styles[variant]} 
    ${fullWidth ? styles.fullWidth : ''} 
    ${className}
  `.trim();

    const content = (
        <>
            {children}
            {Icon && <Icon size={18} style={{ marginLeft: '0.5rem' }} />}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={rootClassName}>
                {content}
            </Link>
        );
    }

    return (
        <button className={rootClassName} onClick={onClick} disabled={disabled} {...props}>
            {content}
        </button>
    );
}
