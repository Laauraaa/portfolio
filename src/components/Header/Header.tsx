import './HeaderResponsive.module.css'
import styles from './Header.module.css'
import animation from './HeaderAnimation.module.css'
import { ActiveSectionObserver } from './ActiveSectionObserver'

export function Header(){
    const activeSection = ActiveSectionObserver();

    return(
        <>
        <header>
         <div className={styles.center}>
             <div className={styles.text}>
                 <h1 className={animation.typing}>Laura, <span>Desenvolvedora Web</span></h1>
                 <h3>Explore meus projetos e conheça mais sobre minha jornada como desenvolvedora.</h3>
                 
             </div>
 
         </div>
 
        </header>

        <nav>
        <p className={activeSection === "about" ? styles.active : ""}>
            <a href="#about"> SOBRE</a>
        </p>

        <p className={activeSection === "projects" ? styles.active : ""}>
            <a href="#projects">PROJETOS</a>
        </p>
        
        <p className={activeSection === "contact" ? styles.active : ""}>
            <a href="#contact">CONTATO</a>
        </p>
        </nav>
        </>
     )
}