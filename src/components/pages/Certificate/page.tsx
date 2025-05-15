 import TimeLine from '../../TimeLine/TimeLine';
 import styles from './Certificate.module.css'

export default function Certificate(){
    const certificates = [ {
        date: '2024-12',
        title: 'Graduação em Análise e Desenvolvimento de Sistemas',
        institution: 'Instituto Federal de Santa Catarina',
        description: 'Curso superior técnologo de Análise e desenvolvimento de sistemas',
      },
      {
        date: '2024-09',
        title: 'Certificado Projeto Extensão',
        institution: 'Instituto Federal de Santa Catarina',
        description: 'Desenvolvimento de website e plataforma online de agendamento de exames para a ONG Rede Feminina no Combate ao Câncer',
      },
      {
        date: '2024-10',
        title: 'Certificado de lógica de programação',
        institution: 'Udemy',
        description: 'Curso de lógica de programação',
      },
      {
        date: '2023-07',
        title: 'Certificado Trilha Especializar',
        institution: 'Rocketseat',
        description: 'Fundamentos da programação web, HTML, CSS, Javascript, Git e Github.',
      },
      {
        date: '2023-07',
        title: 'Certificado Trilha Fundamentar',
        institution: 'Rocketseat',
        description: 'Fundamentos programação web, HTML, CSS',
      },
      {
        date: '2023-07',
        title: 'Certificado Trilha Conectar',
        institution: 'rocketseat',
        description: 'Fundamentos programação web, HTML, CSS',
      },
      {
        date: '2021-12',
        title: 'Graduação em Técnico em Contabilidade',
        institution: 'ETEC - Centro Paula Souza',
        description: 'Curso técnico em contabilidade',
      },
      // Adicione mais certificados aqui
    ];

    const experience = [{
        date: "2023-12 - 2024-12",
        title: 'Estágio front-end',
        institution: 'MStore LTDA',
    },
    {
        date: "2023-07 - 2024-03",
        title: "Projeto Rede Feminina",
        institution: "Instituto Federal de Santa Catarina"
    }
]
  
    return (
    <>  
    <section className={styles.ctn}>
      <div className={styles.container}>
        <h1>Meus Certificados</h1>
        <TimeLine certificates={certificates} />
      </div>
      <div className={styles.content}>
        <h1>Minhas Experiencias</h1>
        <TimeLine certificates={experience} />
      </div>
    </section>  
    </>
    );
  };