import styles from './Card.module.css'


export default function CardSkill(props:any){
    return(
        <>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h3>{props.title}</h3>
                    <img src={props.src} alt={props.title} />
                </div>
            </div>
        </>
    )
}