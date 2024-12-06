import Image from 'next/image';
import styles from './Home.module.css';
import Header from './components/Header/header';
import Button from './components/Button/button';
import Link from 'next/link';

export default function Home() {
    return (
        <section className={styles.home}>
            <Header />
            <Link href={'/Contact'} className={styles.navButton}> <Button /> </Link> 
            
            <div id={styles.mouse}>
                <Link href={'/AboutMe'}>
                <Image 
                src="/img/iconMouse.svg" 
                alt="mouse" 
                width={35}
                height={35}/>
                </Link>
            </div>
            <span className={styles.span}>Role para baixo! </span>
        </section>
    )
} 

