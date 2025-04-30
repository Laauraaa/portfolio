import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';


import styles from './Footer.module.css'
export function Footer(){
    return(
        <div className={styles.footer} id='contact'>

            <div className={styles.contato_main}>
                <div>

                    <div className={styles.form}>
                        <h2>CONTATO</h2>

                        <label>Nome</label>
                        <input type="text" name="" id="" placeholder='Exemplo: João da Silva'/>

                        <label>Seu email</label>
                        <input type="email" name="" id="" placeholder='Exemplo: email@gmail.com'/>

                        <label>Mensagem</label>
                        <textarea name="mensagem" className={styles.form_text} placeholder="Digite sua mensagem..."></textarea>

                        <button type='submit'>Enviar</button>
                    </div>

                    <p>
                        © 2025 Desenvolvido por <a href="https://github.com/Laauraaa" target="_blank">Laura Messias</a>.
                    </p>
                
                </div>
                <div className={styles.icons_contact}>
                    <a href="https://github.com/Laauraaa" target="_blank"> <SiGithub className={styles.icon_contact}/> </a>
                    <a href="https://www.linkedin.com/in/laura-messias-a46341217/" target="_blank"> <SiLinkedin className={styles.icon_contact}/> </a>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSPGFjCQcmsDQJZqTWTJffvkBPxjClpJVSpJWHKGmCttKvZtvxDSrdqZGFjpGGKNZKvfhSNw" target="_blank"> <SiGmail className={styles.icon_contact}/> </a>
                </div>
            </div>
            
        </div>
    )
}