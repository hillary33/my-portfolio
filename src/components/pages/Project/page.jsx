import Card from '../../CardProject/card';
import styles from './Project.module.css'

function Project(){
    return(
        <section className={styles.project}>
            <div className={styles.container}>
                <h2>Projetos</h2>
                <p>Aqui está um pouco do meu trabalho</p>
            </div>
            <div className={styles.cards}>
                <Card title='Lista de Tarefas'
                 alt='to-do-list' 
                 src='./img/projeto/toDoList.png'
                 href='https://github.com/hillary33/To-Do-List-react'
                 skills={['React', "Css", "Html", "Javascript"]}/>
                <Card title='Calc - Juros Compostos'
                alt='juros compostos'
                src='./img/projeto/jurosCompostos.png'
                href='https://github.com/hillary33/Calculadora_Juros_Compostos'
                skills={['Html', 'Css', 'Javascript']}/>
                <Card title='Relógio Digital'
                alt='relogio'
                src='./img/projeto/relogio.png'
                href='https://github.com/hillary33/Timer-JS'
                skills={["Html", "Css", "Javascript"]}/>
                <Card title='Tabela IMC'
                alt='tabela IMC'
                src='./img/projeto/tabela_IMC.png'
                href='https://github.com/hillary33/tabela-IMC'
                skills={['Html', "Css", 'Javascript']}
                />
                {/* <Card title=''
                alt=''
                src=''/>
                <Card title=''
                alt=''
                src=''/> */}
            </div>
        </section>
    )
}

export default Project;