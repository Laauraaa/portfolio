import { useEffect, useState } from "react";

export function ActiveSectionObserver() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
           setActiveSection(entry.target.id);
            break;
          }
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -25% 0px',
      }
);


    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}
