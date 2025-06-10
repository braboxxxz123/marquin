const accessibilityBtn = document.getElementById('accessibility-btn');

accessibilityBtn.addEventListener('click', () => {
  document.body.classList.toggle('high-contrast');
  document.body.classList.toggle('large-font');

  const isActive = document.body.classList.contains('high-contrast');
  accessibilityBtn.textContent = isActive
    ? 'Acessibilidade (Desativar)'
    : 'Acessibilidade';
});