import styles from './Success.module.css'
import { useNavigate } from 'react-router-dom';
export function Success(){
    const navigate = useNavigate(); // Inicializando o hook

    const handleBackToHome = (event: React.MouseEvent<HTMLButtonElement>) => {
        navigate('/'); // Redireciona para a página inicial
    };
    return(
        <div className={styles.success}>
            <h1 className={styles.successH1}>Email enviado com sucesso!</h1>
            <p>Em breve retornarei o contato.</p>
            <button onClick={handleBackToHome}> Voltar para página inicial</button>
        </div>
    )
  }