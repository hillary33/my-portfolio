// import { Link } from 'react-router-dom';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    return(
        <>
            <section className={styles.header}>
                <div className={styles.textHeader}>
                    <h2>Olá, sou a Hillary!</h2>
                    <p>
                        Recém formada em Análise e Desenvolvimento de Sistemas (ADS) e sou apaixonada por desenvolvimento web. Estou sempre ansiosa para aprender cada vez mais e estou determinada a aprimorar minhas habilidades para criar soluções inovadoras e impactantes.
                    </p>
                </div>  
                <div className={styles.picture}>
                    <Image src="/img/profile.png" height='300' width='300' alt="foto perfil" className={styles.img}/>
                </div>
            </section>
        </>
    )
}