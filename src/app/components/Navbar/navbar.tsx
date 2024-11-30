import Image from 'next/image';
import styles from './Navbar.module.css';
import  Link  from 'next/link';

export default function Navbar(){
    return(
        
        <section id={styles.container}>
            <section className={styles.navbar}>
            <Link href={'/'}> Home </Link>
            <Link href={'/AboutMe'}> Sobre </Link>
            <Link href={'/Project'}> Projetos </Link>
            <Link href={'/Certificate'}> Certificados </Link>
            <Link href={'/Contact'}> Contato </Link>
            </section>

            <div className={styles.iconDarkMode}>
               <Image src="./img/darkTheme.svg" 
               alt="Dark Theme" 
               width={22}
               height={22}/>
            </div>
        </section>
        
    )
}

