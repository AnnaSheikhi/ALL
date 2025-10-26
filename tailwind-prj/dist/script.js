
document.addEventListener('DOMContentLoaded', () => {
  const langButton = document.getElementById('langButton');
  const langMenu = document.getElementById('langMenu');
  if (!langButton || !langMenu) return;

  langButton.addEventListener('click', () => {
    langMenu.classList.toggle('hidden');
    const expanded = !langMenu.classList.contains('hidden');
    langButton.setAttribute('aria-expanded', String(expanded));
    if (expanded) {
      const first = langMenu.querySelector('button, a');
      if (first) first.focus();
    }
  });

  window.addEventListener('click', (e) => {
    if (!langButton.contains(e.target) && !langMenu.contains(e.target)) {
      langMenu.classList.add('hidden');
      langButton.setAttribute('aria-expanded', 'false');
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      langMenu.classList.add('hidden');
      langButton.setAttribute('aria-expanded', 'false');
      langButton.focus();
    }
  });
});

// این بخش اضافه بشه 👇
function changeLanguage(lang) {
  // alert("Language changed to: " + lang);
  const langMenu = document.getElementById('langMenu');
  if (langMenu) langMenu.classList.add('hidden');
}
