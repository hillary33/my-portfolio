import Image from 'next/image';
import styles from './Home.module.css';
import Header from '../components/Header/header';
import Link from 'next/link';
import AboutMe from '@/components/pages/AboutMe/page';
import Certificate from '@/components/pages/Certificate/page';
import Contact from '@/components/pages/Contact/page';
import Project from '@/components/pages/Project/page';

export default function Home() {
    return (
        <section className={styles.home}>
            <Header />    
            <div id={styles.mouse}>
                <Link href={'/#about-me'}>
                <Image 
                src="/img/iconMouse.svg" 
                alt="mouse" 
                width={35}
                height={35}/>
                </Link>
            </div>
            <span className={styles.span}>Role para baixo! </span>

            <div id={'about-me'}><AboutMe /></div>
            <div id={'project'}><Project /></div>
            <div id={'certificate'}><Certificate /></div>
            <div id={'contact'}><Contact /></div>
        </section>
    )
} 

