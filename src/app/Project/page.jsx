import Card from '../components/CardProject/card';
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
                 src='https://private-user-images.githubusercontent.com/114176454/254557013-33e0f531-2c13-4244-98d2-3d2154017144.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM2ODkzNTksIm5iZiI6MTczMzY4OTA1OSwicGF0aCI6Ii8xMTQxNzY0NTQvMjU0NTU3MDEzLTMzZTBmNTMxLTJjMTMtNDI0NC05OGQyLTNkMjE1NDAxNzE0NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwOFQyMDE3MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02ODEwZjM5ZWFjYjNlYzU1NGJkNDA1ODdkNTQ1MjUxOTA1N2JkNzFmZGE0MDlmY2ExNWU2MzZmYjQxZWMxODVlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.BCELSJoAkh2Zl2uUrbKxe0JPKcAAyqJ_COP19JQecn4'/>
                <Card title='Calculadora Juros Compostos'
                alt='juros compostos'
                src='https://private-user-images.githubusercontent.com/114176454/254563331-f7e7c9fd-6620-42c6-a8dd-124c0258804b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM2OTAwOTYsIm5iZiI6MTczMzY4OTc5NiwicGF0aCI6Ii8xMTQxNzY0NTQvMjU0NTYzMzMxLWY3ZTdjOWZkLTY2MjAtNDJjNi1hOGRkLTEyNGMwMjU4ODA0Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwOFQyMDI5NTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05YmU0ZTdlYWQyOWU3YzgyMDM3NTYzYjdjYzhhOGIxMzMzMWNiYzgzYjRlODBkMmRjOTE0MThlNWNiNTdlNDY4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.HK-oVpNAQG_60hdnmN6cScxQngHFXOQijpUBtkekgbI'/>
                <Card title='Relógio Digital'
                alt='relogio'
                src='https://private-user-images.githubusercontent.com/114176454/254565512-1f183ce9-2224-4050-a04e-3cd17ca5a1e6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM2OTAxNzMsIm5iZiI6MTczMzY4OTg3MywicGF0aCI6Ii8xMTQxNzY0NTQvMjU0NTY1NTEyLTFmMTgzY2U5LTIyMjQtNDA1MC1hMDRlLTNjZDE3Y2E1YTFlNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwOFQyMDMxMTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMTJmMTIzNDRmZGY4NGU2NWY5YTg1NWQxNWI3OGIzMmRmNjM4ZDU2MzYwMjk3YmFlNTU4NDdmZDlkNjA1YjliJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.zmn3jVs5shAbTky26uxr8H73ZhRVZdidSTt85LVICcg'/>
                <Card title='Tabela IMC'
                alt='tabela IMC'
                src='https://raw.githubusercontent.com/hillary33/tabela-IMC/e359944a57e610bfea2195105c36def3873b291e/tabela_IMC.png'/>
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