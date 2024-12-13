import styles from './Contact.module.css'
import { MdEmail } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


export default function Contact(){

    return(
        <section id={styles.container}>
                <h1>Entre em contato comigo</h1>
                <p>Assim podemos conversar mais</p>
                <div className={styles.icons}>
                    <div className={styles.icon}>
                        <MdEmail className={styles.ico}/>
                        <p>hillary.developer@gmail.com</p>
                    </div>
                    <div className={styles.icon}>
                        <IoLogoWhatsapp className={styles.ico}/>
                        <p>(11) 93339-0122</p>
                    </div>
                    <div className={styles.icon}>
                        <FaLinkedin className={styles.ico}/>
                        <p>Hillary Santos Ferreira</p>
                    </div>
                    <div className={styles.icon}>
                        <FaGithub className={styles.ico}/>
                        <p>Hillary33</p>
                    </div>
                </div>
        </section>
    )
}