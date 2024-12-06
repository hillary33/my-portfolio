import Navbar from '../components/Navbar/navbar';
import styles from './AboutMe.module.css';

export default function AboutMe(){
    return(
        <>
        
            <Navbar />
            <section className={styles.container}> 
            <h2>Sobre mim</h2>
            <p>
            Olá, meu nome é Hillary, tenho 20 anos e minha jornada no mundo da programação começou em 2021, quando descobri minha paixão por desenvolvimento web. Em 2022, fui aprovada no curso de Análise e Desenvolvimento de Sistemas (ADS) graças ao ENEM, e desde então, tenho me dedicado cada vez mais a essa área que me fascina. Ao longo do meu percurso acadêmico, tive a oportunidade de participar e colaborar em diversos projetos, que não só ampliaram meu conhecimento técnico, mas também fortaleceram minha vontade de aprender e me aprimorar constantemente. A cada desafio, minha paixão por desenvolver soluções criativas e inovadoras só cresce, e estou cada vez mais motivada a me aprofundar no universo do desenvolvimento web.
            </p>
            <h2>Habilidades</h2>
            <h2>Experiencias</h2>
            </section>
            
        </>
    )
}