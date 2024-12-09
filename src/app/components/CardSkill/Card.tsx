import styles from './Card.module.css'

type Card = {
    title: string,
    src: string,
}

export default function CardSkill({title, src}: Card){
    return(
        <>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <img src={src} alt={title} />
                </div>
            </div>
        </>
    )
}