import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';


import styles from './Footer.module.css'
export function Footer(){
    return(
        <div className={styles.footer} id='contato'>
            <div className={styles.contato_main}>
                <div className={styles.form}>
                    <h2>CONTATO</h2>
                    <input type="text" name="" id="" />
                    <input type="text" name="" id="" />
                    <input type="text" />
                    <button>Enviar</button>
                </div>
                <div className={styles.icons_contato}>
                    <SiGithub />
                    <SiLinkedin />
                    <SiGmail />
                </div>
            </div>
        </div>
    )
}