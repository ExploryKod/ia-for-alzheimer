export function initNavigation() {
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks = document.querySelectorAll('.nav-link');
  let isMenuOpen = false;

  menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(100%)';
    menuButton.setAttribute('aria-expanded', isMenuOpen);
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      isMenuOpen = false;
      mobileMenu.style.transform = 'translateX(100%)';
      menuButton.setAttribute('aria-expanded', false);
    });
  });
}