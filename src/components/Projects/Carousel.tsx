// Carousel.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import styles from './Projects.module.css'
import { 
  SiJavascript, SiTypescript, SiHtml5, SiCss3, SiAngular, SiReact, 
  SiNodedotjs, SiPostgresql
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
                <img src="public/img/weatherforecast.jpg" alt="" />
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

        <div>
            <div className={styles.project}>
                <img src="public/img/weatherforecast.jpg" alt="" />
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

        <div>
            <div className={styles.project}>
                <img src="public/img/weatherforecast.jpg" alt="" />
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

        <div> 
            <div className={styles.project}>
                <img src="public/img/weatherforecast.jpg" alt="" />
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
      </Slider>
    </div>
  );
}
