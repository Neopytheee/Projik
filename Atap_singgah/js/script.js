document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-section');
  if (!hero) return; // kalau tidak ada hero, stop

  window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    // Atur background position Y, dibagi faktor untuk efek paralaks lebih halus
    hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
  });
});
