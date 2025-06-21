function toggleSubmenu(button) {
  const isActive = button.classList.contains('active');
  document.querySelectorAll('.menu button').forEach(btn => btn.classList.remove('active'));
  if (!isActive) {
    button.classList.add('active');
  }

  // Rotate arrow only on this specific button
  document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.querySelector('.arrow').style.transform = 'rotate(0deg)';
  });
  if (!isActive) {
    button.querySelector('.arrow').style.transform = 'rotate(90deg)';
  }
}
