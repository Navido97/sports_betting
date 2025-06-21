function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function toggleSubmenu(button) {
  const submenu = button.nextElementSibling;
  const isActive = button.classList.contains('active');

  // Reset others
  document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.classList.remove('active');
    const sub = btn.nextElementSibling;
    if (sub && sub.classList.contains('submenu')) sub.style.display = 'none';
  });

  if (!isActive) {
    button.classList.add('active');
    if (submenu && submenu.classList.contains('submenu')) {
      submenu.style.display = 'block';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showTab('home');

  const ids = ['vizWorldCup', 'vizGoldCup', 'vizClubWorldCup'];
  ids.forEach(id => {
    const divElement = document.getElementById(id);
    const vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '100%';
    vizElement.style.height = '1000px';
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  });
});
