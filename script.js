// script.js - Interacciones simples: toggle menú y activación de tabs
document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.tab');
  btns.forEach(b => b.addEventListener('click', () => {
    btns.forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    // Scroll suave al contenido si tiene data-target
    const target = b.dataset.target;
    if (target) {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  }));

  // Mobile menu toggle
  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => nav.classList.toggle('show'));
  }
});
