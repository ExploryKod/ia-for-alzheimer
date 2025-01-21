import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Fade in text animations
  gsap.utils.toArray('.animate-text').forEach(text => {
    gsap.from(text, {
      scrollTrigger: {
        trigger: text,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });
}