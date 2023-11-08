const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.scrollY > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeStylesheet = document.querySelector('link[rel="stylesheet"][href="css/components/dark-mode.css"]');

darkModeToggle.addEventListener('click', () => {
  if (darkModeStylesheet.disabled) {
    darkModeStylesheet.disabled = false;
  } else {
    darkModeStylesheet.disabled = true;
  }
});