/**
 * Magari - Lógica de cliente interactiva
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Año dinámico en el pie de página
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Contador de clics interactivo
  const actionBtn = document.getElementById('actionBtn');
  const clickCountSpan = document.getElementById('clickCount');
  let count = 0;

  if (actionBtn && clickCountSpan) {
    actionBtn.addEventListener('click', () => {
      count++;
      clickCountSpan.textContent = count;
      
      // Animación sutil al hacer clic
      actionBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        actionBtn.style.transform = '';
      }, 100);
    });
  }

  // 3. Alternador de Tema Claro / Oscuro
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';

  const applyTheme = (theme) => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeToggle) themeToggle.textContent = '☀️';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeToggle) themeToggle.textContent = '🌙';
    }
  };

  // Inicializar con el tema guardado
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const newTheme = isLight ? 'dark' : 'light';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  console.log('✨ Proyecto Magari inicializado correctamente.');
});
