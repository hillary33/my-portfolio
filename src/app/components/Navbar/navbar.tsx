import Image from 'next/image';
import styles from './Navbar.module.css';
import  Link  from 'next/link';

export default function Navbar(){
    return(
        <>
            <section className={styles.navbar}>
            <Link href='home'> Home </Link>
            <Link href='about-me'> Sobre </Link>
            <Link href='project'> Projetos </Link>
            <Link href='certificate'> Certificados </Link>
            <Link href='contatos'> Contato </Link>
            </section>

            <div className={styles.iconDarkMode}>
               <Image src="./img/darkTheme.svg" 
               alt="Dark Theme" 
               width={22}
               height={22}/>
            </div>
        </>
    )
}

