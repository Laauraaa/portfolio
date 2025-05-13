// Carousel.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import styles from './Projects.module.css'
import { 
  SiJavascript, SiTypescript, SiHtml5, SiCss3, SiAngular, SiReact, 
  SiNodedotjs,
} from 'react-icons/si';
export function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.carousel}>
      
      <Slider {...settings}>
        
        <div>
            <div className={styles.project}>
                <img src="public/img/portfolio.jpg" alt="" />
                <div className={styles.tecs}>
                    <SiHtml5 title='HTML' className={styles.tec} />
                    <SiCss3 title='CSS' className={styles.tec} />
                    <SiReact title='React' className={styles.tec} />
                    <SiJavascript title='Javascript' className={styles.tec} />
                    <SiTypescript title='Typescript' className={styles.tec} />
                </div>
                <p className={styles.p}>Desenvolvi as telas do projeto no Figma, cuidando da organização visual antes da codificação. A aplicação foi construída com React, contando com animações feitas na própria biblioteca. Utilizei componentes reutilizáveis para manter o código limpo e eficiente. O layout é totalmente responsivo, adaptando-se a diferentes telas.</p>
                <div>
                  <a href="https://github.com/Laauraaa/portfolio" target="_blank">
                    <button className={styles.button1}>REPOSITÓRIO</button>
                  </a>
                  <a href="https://portfolio-sglx.onrender.com" target="_blank">
                    <button className={styles.button2}>SITE</button>
                  </a>
                    
                    
                </div>
            </div>
        </div>

        <div>

            <div className={styles.project}>
                <img src="public/img/weatherforecast.jpg" alt="" />
                <div className={styles.tecs}>
                    <SiHtml5 title='HTML' className={styles.tec} />
                    <SiCss3 title='CSS' className={styles.tec} />
                    <SiAngular title='Angular' className={styles.tec} />
                    <SiNodedotjs title='Node.js' className={styles.tec} />
                    <SiJavascript title='Javascript' className={styles.tec} />
                    <SiTypescript title='Typescript' className={styles.tec} />
                </div>
                <p className={styles.p}>Aplicação web desenvolvida com Angular. O objetivo principal era consumir uma API e exibir seus dados de forma dinâmica. Além disso, a chave da API foi armazenada com segurança no backend feito com Node.js, utilizando variáveis de ambiente (.env) para proteger informações sensíveis contra acessos indevidos ou não autorizados.</p>
                <div>
                    <a href="https://project-weather-forecast.onrender.com" target="_blank">
                    <button className={styles.button2}>SITE</button>
                    </a>
                </div>
            </div>
        </div>


        <div>
            <div className={styles.project}>
                <img src="public/img/businesscard.jpg" alt="" />
                <div className={styles.tecs}>
                    <SiHtml5 title='HTML' className={styles.tec} />
                    <SiCss3 title='CSS' className={styles.tec} />
                    <SiAngular title='Angular' className={styles.tec} />
                    <SiJavascript title='Javascript' className={styles.tec} />
                    <SiTypescript title='Typescript' className={styles.tec} />
                </div>
                <p className={styles.p}>Projeto desenvolvido em Angular, com foco em Angular Forms e validações usando Validators. O objetivo foi manipular os dados enviados pelo formulário. Usei Angular Material para a interface e uma API para preencher o CEP, controlando as respostas com Observable para garantir o fluxo correto dos dados recebidos.</p>
                <div>
                    <a href="https://github.com/Laauraaa/project_business_card" target="_blank">
                      <button className={styles.button1}>REPOSITÓRIO</button>
                    </a>
                    <a href="https://project-business-card.onrender.com" target="_blank">
                      <button className={styles.button2}>SITE</button>
                    </a>
                </div>
            </div>
        </div>

        <div> 
            <div className={styles.project}>
                <img src="public/img/movies.jpg" alt="" />
                <div className={styles.tecs}>
                    <SiHtml5 title='HTML' className={styles.tec} />
                    <SiCss3 title='CSS' className={styles.tec} />
                    <SiNodedotjs title='Node.js' className={styles.tec} />
                    <SiJavascript title='Javascript' className={styles.tec} />
                    <SiTypescript title='Typescript' className={styles.tec} />
                </div>
                <p className={styles.p}>Projeto desenvolvido com Node.js, utilizando routers para definir rotas da aplicação e controllers para gerenciar a lógica de negócio. A aplicação acessa um arquivo JSON com dados de filmes e utiliza Mustache para exibir as informações de forma dinâmica. Também permite buscar filmes e filtrar por categoria, facilitando a navegação.</p>
                <div>
                    <a href="https://github.com/Laauraaa/project_movies" target="_blank">
                      <button className={styles.button1}>REPOSITÓRIO</button>
                    </a>
                    <a href="https://acervo-de-filmes.onrender.com" target="_blank">
                      <button className={styles.button2}>SITE</button>
                    </a>
                </div>
            </div>
        </div>
      </Slider>
    </div>
  );
}
