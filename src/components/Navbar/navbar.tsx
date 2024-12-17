import styles from './Navbar.module.css';
import  Link  from 'next/link';

export default function Navbar(){
    return(
        
        <section id={styles.container}>
            <div className={styles.navbar}>
            <Link href={'/#'}> Home </Link>
            <Link href={'/#about-me'}> Sobre </Link>
            <Link href={'/#project'}> Projetos </Link>
            <Link href={'/#certificate'}> Certificados </Link>
            <Link href={'/#contact'}> Contato </Link>
            </div>
        </section>
        
    )
}

