import { useEffect, useRef } from 'react';

// Lista de "caracteres de código" que caem
const codeChars = 'const let var => {} [] () <div> </> return true false . , : ;'.split(' ');

// Paleta de cores usadas nos caracteres
const colors = ['#00FF9F', '#39C5BB', '#D65DB1', '#FF6F91', '#ffffff'];

export default function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    canvas.style.backgroundColor = 'transparent';

    const fontSize = 16;
    const columnSpacing = 2;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const columns = Math.floor(window.innerWidth / (fontSize * columnSpacing));
    const drops = Array.from({ length: columns }, () =>
      Math.floor(Math.random() * (window.innerHeight / fontSize))
    );

    const draw = () => {
      // Fundo translúcido para dar efeito de arrasto
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = codeChars[Math.floor(Math.random() * codeChars.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];

        ctx.fillStyle = color;
        ctx.fillText(char, i * fontSize * columnSpacing, drops[i] * fontSize);

        // Reinicia a gota com chance de 2.5%
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.floor(Math.random() * -20); // Inicia fora da tela pra suavizar
        }

        drops[i]++;
      }
    };

    const animation = setInterval(draw, 50);

    return () => {
      clearInterval(animation);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
