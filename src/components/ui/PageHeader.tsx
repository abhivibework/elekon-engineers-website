import styles from './PageHeader.module.css';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

export default function PageHeader({
    title,
    subtitle,
    backgroundImage = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070' // Default placeholder
}: PageHeaderProps) {
    return (
        <div className={styles.header}>
            <div className={styles.overlay} />
            <div
                className={styles.bgImage}
                style={{ background: `url(${backgroundImage}) center/cover no-repeat` }}
            />

            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
        </div>
    );
}
