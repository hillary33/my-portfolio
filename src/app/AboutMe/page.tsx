import CardSkill from '../components/CardSkill/Card';
import styles from './AboutMe.module.css';

export default function AboutMe(){

    return(
        <>
            <section className={styles.container}> 
                <h1>Sobre mim</h1>
                <p>
                Oii, tenho 20 anos e minha jornada no mundo da programação começou em 2021, quando conheci o básico de html por curiosidade. Em 2022, fui aprovada no curso de Análise e Desenvolvimento de Sistemas (ADS) com o ENEM, e desde então, tenho me dedicado cada vez mais a essa área que me fascina. Ao longo do meu percurso acadêmico, tive a oportunidade de participar e colaborar em diversos projetos, que não só ampliaram meu conhecimento técnico, mas também fortaleceram minha vontade de aprender e me aprimorar constantemente. A cada desafio, minha paixão por desenvolver soluções criativas e inovadoras só cresce, e estou cada vez mais motivada a me aprofundar no universo do desenvolvimento web.
                </p>
                <h2>Habilidades</h2>
                <div className={styles.cards}>
                    <CardSkill title={"HTML5"} src={"https://img.icons8.com/?size=100&id=23028&format=png&color=7950F2"}/>
                    <CardSkill title={"CSS3"} src={"https://img.icons8.com/?size=100&id=38272&format=png&color=7950F2"} />
                    <CardSkill title={"JAVASCRIPT"} src={"https://img.icons8.com/?size=100&id=39854&format=png&color=7950F2"} />
                    <CardSkill title={"TYPESCRIPT"} src={"https://img.icons8.com/?size=100&id=cHBUT9SmrD2V&format=png&color=7950F2"} />
                    <CardSkill title={"NEXT"} src={"https://img.icons8.com/?size=100&id=gwR0hbBi5JeZ&format=png&color=7950F2"} />
                    <CardSkill title={"REACT"} src={"https://img.icons8.com/?size=100&id=viH7JJy51bHj&format=png&color=7950F2"}/>
                    <CardSkill title={"SQL"} src={"https://img.icons8.com/?size=100&id=bkvySlFV9zbe&format=png&color=7950F2"} />
                </div>
            </section>
            
        </>
    )
}