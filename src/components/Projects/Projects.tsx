import { 
    SiJavascript, SiTypescript, SiHtml5, SiCss3, SiAngular, SiReact, 
    SiNodedotjs, SiPostgresql
  } from 'react-icons/si';

import styles from './Projects.module.css'
export function Projects(){
    return(
        <div className={styles.projects} id='projects'>
            <h2>PROJETOS</h2>

            <div className={styles.view}>

            <div className={styles.project}>
                    <img src="../../public/img/weatherforecast.jpg" alt="" />
                    <div className={styles.tecs}>
                    <SiHtml5 title='HTML' className={styles.tec} />
                    <SiCss3 title='HTML' className={styles.tec} />
                    <SiAngular className={styles.tec} />
                    <SiJavascript className={styles.tec} />
                    </div>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio aperiam quo perferendis, asperiores vel illo. Laboriosam iste ipsum commodi placeat esse sequi. Dolorum, voluptatibus? Quibusdam, optio sapiente! Debitis, quia.</p>
                    <div>
                        <button className={styles.button1}>REPOSITÓRIO</button>
                        <button className={styles.button2}>SITE</button>
                    </div>
                </div>

                <div className={styles.project}>
                    <img src="../../public/img/weatherforecast.jpg" alt="" />
                    <div className={styles.tecs}>
                    <SiHtml5 title='HTML' className={styles.tec} />
                    <SiCss3 title='HTML' className={styles.tec} />
                    <SiAngular className={styles.tec} />
                    <SiJavascript className={styles.tec} />
                    </div>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio aperiam quo perferendis, asperiores vel illo. Laboriosam iste ipsum commodi placeat esse sequi. Dolorum, voluptatibus? Quibusdam, optio sapiente! Debitis, quia.</p>
                    <div>
                        <button className={styles.button1}>REPOSITÓRIO</button>
                        <button className={styles.button2}>SITE</button>
                    </div>
                </div>

                <div className={styles.project}>
                    <img src="../../public/img/weatherforecast.jpg" alt="" />
                    <div className={styles.tecs}>
                    <SiHtml5 title='HTML' className={styles.tec} />
                    <SiCss3 title='HTML' className={styles.tec} />
                    <SiAngular className={styles.tec} />
                    <SiJavascript className={styles.tec} />
                    </div>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio aperiam quo perferendis, asperiores vel illo. Laboriosam iste ipsum commodi placeat esse sequi. Dolorum, voluptatibus? Quibusdam, optio sapiente! Debitis, quia.</p>
                    <div>
                        <button className={styles.button1}>REPOSITÓRIO</button>
                        <button className={styles.button2}>SITE</button>
                    </div>
                </div>

                
            </div>

        </div>
    )
}