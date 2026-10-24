import { required } from '../lib/dom';

export function initNavigation(updateControlLabels: () => void): void {
  const navigation = required<HTMLElement>('#navigation');
  const menuButton = required<HTMLButtonElement>('#menu-toggle');
  function setMenu(open: boolean): void {
    navigation.dataset.open = String(open);
    menuButton.setAttribute('aria-expanded', String(open));
    updateControlLabels();
  }

  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  navigation.querySelectorAll<HTMLAnchorElement>('a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });
  document.addEventListener('click', event => {
    if (event.target instanceof Element && !event.target.closest('.header-inner')) setMenu(false);
  });
  window.matchMedia('(max-width: 760px)').addEventListener('change', () => setMenu(false));

  navigation.dataset.enhanced = 'true';
  menuButton.hidden = false;

  const navLinks = [...navigation.querySelectorAll<HTMLAnchorElement>('a')];
  // Track document order independently of how navigation links are arranged.
  const sectionIds = new Set(navLinks.map(link => link.hash.slice(1)));
  const sections = [...document.querySelectorAll<HTMLElement>('main section[id]')]
    .filter(section => sectionIds.has(section.id));
  let scheduled = false;

  function updateActiveSection(): void {
    let current = '';
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= 145) current = section.id;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 3) {
      current = sections.at(-1)?.id ?? current;
    }
    navLinks.forEach(link => {
      if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  }

  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateActiveSection);
    }
  }, { passive: true });
  window.addEventListener('resize', updateActiveSection);
  window.addEventListener('load', updateActiveSection);
  updateActiveSection();

}
