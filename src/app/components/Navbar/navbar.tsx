import styles from './Navbar.module.css';
import  Link  from 'next/link';

export default function Navbar(){
    return(
        
        <section id={styles.container}>
            <div className={styles.navbar}>
            <Link href={'/'}> Home </Link>
            <Link href={'/AboutMe'}> Sobre </Link>
            <Link href={'/Project'}> Projetos </Link>
            <Link href={'/Certificate'}> Certificados </Link>
            <Link href={'/Contact'}> Contato </Link>
            </div>
        </section>
        
    )
}

