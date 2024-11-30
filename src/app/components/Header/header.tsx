// import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
    return(
        <>
            <div className={styles.header}>
                <div className={styles.textHeader}>
                    <h2>Olá, sou a Hillary!</h2>
                    <p>
                        Estou prestes a me formar em Análise e Desenvolvimento de Sistemas (ADS) e sou apaixonada por desenvolvimento web. Estou sempre ansiosa para aprender cada vez mais e estou determinada a aprimorar minhas habilidades para criar soluções inovadoras e impactantes.
                    </p>
                </div>  
                <div className={styles.picture}>
                    <img src="/img/modelo.png" height='300px' width='300px' alt="foto perfil" />
                </div>
            </div>
        </>
    )
}