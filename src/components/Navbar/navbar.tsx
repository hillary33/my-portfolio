'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';
import  Link  from 'next/link';

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return(
        <section id={styles.container}>
            <div className={styles.navbarMobile}>
                <button onClick={toggleMenu} className={styles.buttonMenu}>
                    <img src="/img/menu.svg" alt="Menu" height={24} width={24}/>
                </button>
                {menuOpen && (
                    <div className={`${styles.menuMobile} ${menuOpen ? styles.open : ""}`}>
                        <Link href={'/#'}> Home </Link>
                        <Link href={'/#about-me'}> Sobre </Link>
                        <Link href={'/#project'}> Projetos </Link>
                        <Link href={'/#certificate'}> Certificados </Link>
                        <Link href={'/#contact'}> Contato </Link>
                    </div>
                )}
            </div>
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

