import { 
    SiJavascript, SiTypescript, SiHtml5, SiCss3, SiAngular, SiReact, 
    SiNodedotjs, SiPostgresql
  } from 'react-icons/si';
  


import styles from './About.module.css'
export function About(){
    return(
        <div className={styles.about} id='about'>

            <div className={styles.text} >
                <h3>SOBRE MIM</h3>

                <p>Olá! Meu nome é Laura, sou estudante de Ciência da Computação e apaixonada por tecnologia e desenvolvimento web. Ao longo da minha jornada, venho me dedicando especialmente ao ecossistema JavaScript, com foco em TypeScript, Angular, React e Node.js.

                Gosto de criar soluções funcionais, organizadas e com boa experiência para o usuário. Tenho interesse tanto pelo front-end quanto pelo back-end, mas o que realmente me motiva é resolver problemas de forma criativa e aprender algo novo em cada projeto.

                Atualmente, estou aprofundando meus conhecimentos em APIs, modelagem de sistemas e boas práticas de desenvolvimento. Além disso, estou sempre buscando melhorar minhas habilidades em versionamento com Git, testes automatizados e arquitetura de software.

                Se quiser ver mais do meu trabalho, dá uma olhada nos projetos aqui do portfólio!
                </p>
            </div>

            <div className={styles.icons}>
                <SiHtml5 className={styles.icon} title='HTML' />
                <SiCss3 className={styles.icon} title='CSS'/>
                <SiJavascript className={styles.icon} title='Javascript'/>
                <SiTypescript className={styles.icon} title='Typescript'/>
                <SiAngular className={styles.icon} title='Angular'/>
                <SiReact className={styles.icon} title='React'/>
                <SiNodedotjs className={styles.icon} title='Node.js'/>
                <SiPostgresql className={styles.icon} title='Postgresql'/>
            </div>

        </div>
    )
}