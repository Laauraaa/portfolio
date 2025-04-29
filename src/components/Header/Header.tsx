import styles from './Header.module.css'
export function Header(){
    return(
        <>
        
        <header>
         <div className={styles.center}>
             <div className={styles.text}>
                 <h1>Laura - Desenvolvedora Fullstack</h1>
                 <h3>Desenvolvedora em constante evolução, sempre em busca de novos desafios para aprimorar minhas habilidades e transformar ideias em soluções funcionais.</h3>
             </div>
 
         </div>
 
        </header>
             <nav>
                 <p><a href="#about">SOBRE</a></p>
                 <p><a href="#projects">PROJETOS</a></p>
                 <p><a href="#contato">CONTATO</a></p>
             </nav>

        </>
     )
}