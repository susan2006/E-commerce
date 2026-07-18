import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const direction = entry.target.getAttribute('data-animate');

          if (entry.isIntersecting) {
            entry.target.classList.add(direction === 'left' ? 'from-left' : 'from-right');
          } else {
            entry.target.classList.remove('from-left', 'from-right');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;
