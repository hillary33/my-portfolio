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
                        <a href="mailto:hillary.developer@gmail.com" target="_blank" rel="noopener noreferrer">
                            <MdEmail className={styles.ico}/>
                        </a>
                        <p>hillary.developer@gmail.com</p>
                    </div>
                    <div className={styles.icon}>
                        <a href="https://api.whatsapp.com/send/?phone=5511933390122&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                            <IoLogoWhatsapp className={styles.ico}/>
                        </a>
                        <p>(11) 93339-0122</p>
                    </div>
                    <div className={styles.icon}>
                        <a href="https://www.linkedin.com/in/hillary-santos-ferreira-28254224a/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className={styles.ico}/>
                        </a>
                        <p>Hillary Santos Ferreira</p>
                    </div>
                    <div className={styles.icon}>
                        <a href="https://github.com/hillary33" target="_blank" rel="noopener noreferrer">
                            <FaGithub className={styles.ico}/>
                        </a>
                        <p>hillary33</p>
                    </div>
                </div>
        </section>
    )
}