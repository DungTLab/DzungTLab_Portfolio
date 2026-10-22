export function initMotion(): void {
  // Progressive motion: content stays visible if observers or scripts are unavailable.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.project, .approach-item, .about-grid, .certificates').forEach(element => observer.observe(element));
  }
}
