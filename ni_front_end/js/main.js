function toggleSubmenu(button) {
  const submenu = button.nextElementSibling;
  const isActive = button.classList.contains('active');

  // Reset all buttons and submenus
  document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.classList.remove('active');
    const arrow = btn.querySelector('.arrow');
    if (arrow) arrow.style.transform = 'rotate(90deg)';
    const sub = btn.nextElementSibling;
    if (sub && sub.classList.contains('submenu')) {
      sub.style.display = 'none';
    }
  });

  // If not active, activate this one
  if (!isActive) {
    button.classList.add('active');
    if (submenu && submenu.classList.contains('submenu')) {
      submenu.style.display = 'block';
    }
  }
}
