import './style.css';
import { initNavigation } from './js/navigation';
import { initAnimations } from './js/animations';
import SmoothScroll from 'smooth-scroll';

// Initialize smooth scroll
new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
  easing: 'easeInOutCubic',
});

// Initialize navigation
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAnimations();
});