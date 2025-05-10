import { useEffect, useState } from "react";
import styles from './ScrollButton.module.css'

export default function ScrollButton() {
    const [visivel, setVisivel] = useState(false);
  
    useEffect(() => {
      const aoRolar = () => {
        setVisivel(window.scrollY > 100);
      };
  
      window.addEventListener("scroll", aoRolar);
      return () => window.removeEventListener("scroll", aoRolar);
    }, []);
  
    const rolarAoTopo = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return visivel ? (
      <button className={styles.scrollbtn} onClick={rolarAoTopo}>
        ↑
      </button>
    ) : null;
  }