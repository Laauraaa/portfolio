import { SequencedFlip } from '../Animation/Components/Sequential/SequentialAnimation';
  
import  {Carousel} from './Carousel'
  
import styles from './Projects.module.css'

  export function Projects(){
    return(
        <div className={styles.projects} id='projects'>
          <SequencedFlip>
            
              <h2>PROJETOS</h2>
  
              <div className={styles.view}>
                <Carousel />
              
              </div>
          </SequencedFlip>
  
        </div>
    )
  }