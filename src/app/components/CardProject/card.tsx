import Button from '../Button/button';
import styles from './Card.module.css';
// import Image from 'next/image';

type ImgCard = {
    title: string,
    src: string,
    alt: string
}

export default function Card({title, src, alt}: ImgCard) {
    const titleButton = {title: "Git Hub"};

    return (
        <section className={styles.card}>
            <div className={styles.content}>
                <h3>{title}</h3>
                <img src={src} alt={alt} />
                <div className={styles.skill}>
                </div>
                <div className={styles.button}>
                    <Button title={titleButton.title}/>
                </div>
            </div>
        </section>
    )
}