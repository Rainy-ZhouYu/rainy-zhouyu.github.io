// Ordinary anchor links work with or without this progressive enhancement.
const links = Array.from(document.querySelectorAll('.nav-links a'));
const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (!visible.length) return;
    const id = visible[0].target.id;
    links.forEach(link => {
      if (link.getAttribute('href') === `#${id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-12% 0px -55% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
