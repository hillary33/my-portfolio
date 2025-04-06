// import { Link } from 'react-router-dom';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';
import Button from '../Button/button';

export default function Header() {
    const titleButton = {title: "Entre em Contato"};

    return(
        <>
            <section className={styles.header}>
                <div className={styles.textHeader}>
                    <h2>Olá, sou a Hillary!</h2>
                    <p>
                        Formada em Análise e Desenvolvimento de Sistemas (ADS) e sou apaixonada por desenvolvimento web. Estou sempre ansiosa para aprender cada vez mais e estou determinada a aprimorar minhas habilidades para criar soluções inovadoras e impactantes.
                    </p>
                    <Link href={'/#contact'} className={styles.navButton}>
                        <Button title={titleButton.title} /> 
                    </Link> 
                </div>  
                <div className={styles.picture}>
                    <Image src="/img/profile.png" height='300' width='300' alt="foto perfil" className={styles.img}/>
                </div>
            </section>
        </>
    )
}