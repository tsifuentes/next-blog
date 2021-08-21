import styles from './card.module.css'

export default function Card({title}) {
    return (
        <div className={styles.card}>
            {title}
        </div>
    )
}