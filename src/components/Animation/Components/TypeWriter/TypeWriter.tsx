import { motion } from 'framer-motion';

type TypewriterProps = {
  text: string;
  delay?: number;
  className?: string;
};

export function Typewriter({ text, delay = 0.05, className }: TypewriterProps) {
  const container = {
    visible: {
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          initial="hidden"
          animate="visible"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
