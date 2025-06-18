  const toggleBtn = document.getElementById('dropdown-trigger');
  const menu = document.getElementById('dropdown-menu');

  // Toggle dropdown when clicking on button
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from bubbling up
    menu.classList.toggle('show');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
      menu.classList.remove('show');
    }
  });