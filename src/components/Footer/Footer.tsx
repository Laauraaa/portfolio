import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';

import { SequencedFlip } from '../Animation/Components/Sequential/SequentialAnimation';

import styles from './Footer.module.css'
export function Footer(){
    return(
        <section className={styles.footer} id='contact'>
            <SequencedFlip>

            <div className={styles.contato_main}>
                <div>
                    <form action="https://api.staticforms.xyz/submit" method='POST'>
                    <input type="hidden" name="apiKey" value="sf_816e0e28ilml86fajnhlh6bn"></input>
                    <input type="hidden" name="redirectTo" value= "https://portfolio-sglx.onrender.com/success" />


                    <div className={styles.form}>
                        <h2>CONTATO</h2>
                        <form action=""></form>
                        <label>Nome</label>
                        <input type="text" name="name" id="name" placeholder='João da Silva' required/>

                        <label>Seu email</label>
                        <input type="email" name="email" id="email" placeholder='email@gmail.com' required/>

                        <label>Mensagem</label>
                        <textarea name="message" id='message' className={styles.form_text} placeholder="Digite sua mensagem..." required></textarea>

                        <button type='submit'>Enviar</button>

                    </div>

                    </form>

                    <p className={styles.p_footer}>
                        © 2025 Desenvolvido por <a href="https://github.com/Laauraaa" target="_blank">Laura Messias</a>.
                    </p>
                
                </div>
                <div className={styles.icons_contact}>
                    <a href="https://github.com/Laauraaa" target="_blank"> <SiGithub className={styles.icon_contact}/> </a>
                    <a href="https://www.linkedin.com/in/laura-messias-a46341217/" target="_blank"> <SiLinkedin className={styles.icon_contact}/> </a>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSPGFjCQcmsDQJZqTWTJffvkBPxjClpJVSpJWHKGmCttKvZtvxDSrdqZGFjpGGKNZKvfhSNw" target="_blank"> <SiGmail className={styles.icon_contact}/> </a>
                </div>
            </div>
            </SequencedFlip>
            
        </section>
    )
}
