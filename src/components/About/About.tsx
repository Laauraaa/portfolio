import { 
    SiJavascript, SiTypescript, SiHtml5, SiCss3, SiAngular, SiReact, 
    SiNodedotjs, SiPostgresql,
    SiPython
  } from 'react-icons/si';
  
import styles from './About.module.css'
export function About(){
    return(
        <div className={styles.about} id='about'>

            <div className={styles.text_area} >

                <div>
                    <img src="../../public/img/icon-me.png" alt="" className={styles.icon_me}/>
                </div>

                <div className={styles.text}>

                    <h3>SOBRE MIM</h3>

                    <p>Olá! Meu nome é Laura, sou estudante de Ciência da Computação e apaixonada por tecnologia e desenvolvimento web. Ao longo da minha jornada, venho me dedicando especialmente ao ecossistema JavaScript, com foco em TypeScript, Angular, React e Node.js.

                    Gosto de criar soluções funcionais, organizadas e com boa experiência para o usuário. Tenho interesse tanto pelo front-end quanto pelo back-end, mas o que realmente me motiva é resolver problemas de forma criativa e aprender algo novo em cada projeto.

                    Atualmente, estou aprofundando meus conhecimentos em APIs, modelagem de sistemas e boas práticas de desenvolvimento. Além disso, estou sempre buscando melhorar minhas habilidades em versionamento com Git, testes automatizados e arquitetura de software.

                    Se quiser ver mais do meu trabalho, dá uma olhada nos projetos aqui do portfólio!
                    </p>

                </div>
            </div>
            
            <div className={styles.skills}>
                <div>
                    <div className={styles.skill_title}><p>Linguagens</p></div>

                    <div className={styles.icons}>
                        <div className={styles.skill}>
                            <SiJavascript className={styles.icon} title='Javascript'/>
                            <p>Javascript</p>
                        </div>

                        <div className={styles.skill}>
                            <SiTypescript className={styles.icon} title='Typescript'/>
                            <p>Typescript</p>
                        </div>

                        <div className={styles.skill}>
                            <SiPython className={styles.icon} />
                            <p>Python</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={styles.skill_title}><p>Frontend</p></div>

                    <div className={styles.icons}>
                        <div className={styles.skill}>
                            <SiHtml5 className={styles.icon} title='HTML' />
                            <p>HTML</p>
                        </div>

                        <div className={styles.skill}>
                            <SiCss3 className={styles.icon} title='CSS'/>
                            <p>CSS</p>
                        </div>

                        <div className={styles.skill}>
                            <SiAngular className={styles.icon} title='Angular'/>
                            <p>Angular</p>
                        </div>

                        <div className={styles.skill}>
                            <SiReact className={styles.icon} title='React'/>
                            <p>React</p>
                        </div>
                    </div>

                </div>

                <div>
                    <div className={styles.skill_title}><p>Backend</p></div>
                    <div className={styles.icons}>
                        <div className={styles.skill}>
                            <SiNodedotjs className={styles.icon} title='Node.js'/>
                            <p>Node.js</p>
                        </div>

                        <div className={styles.skill}>
                            <SiPostgresql className={styles.icon} title='Postgresql'/>
                            <p>Postgresql</p>
                        </div>
                    </div>
                </div>
        
            </div>

        </div>
    )
}