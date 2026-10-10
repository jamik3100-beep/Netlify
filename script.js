document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.main-nav a, .link-btn');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((item) => item.classList.remove('active'));
    });
  });
});
