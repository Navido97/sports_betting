function toggleSubmenu(button) {
  const submenu = button.nextElementSibling;
  const isActive = button.classList.contains('active');

  document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.classList.remove('active');
    const sub = btn.nextElementSibling;
    if (sub && sub.classList.contains('submenu')) {
      sub.style.display = 'none';
    }
  });

  if (!isActive) {
    button.classList.add('active');
    if (submenu && submenu.classList.contains('submenu')) {
      submenu.style.display = 'block';
    }
  }
}
