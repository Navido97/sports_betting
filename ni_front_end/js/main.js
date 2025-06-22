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

document.addEventListener('DOMContentLoaded', () => {
  // Existing code...
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

  // 👇 Scroll animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-fade').forEach(el => observer.observe(el));
});

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
}

// Optional: close sidebar when clicking outside
document.addEventListener('click', function (event) {
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.querySelector('.menu-toggle');
  if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
    sidebar.classList.remove('open');
  }
});
