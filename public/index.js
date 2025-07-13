const menuToggle = document.querySelector('#menu');
const navLinks = document.querySelector('#links');

menuToggle.addEventListener('click', () => {
  if (navLinks.classList.contains('hidden')) {
    navLinks.classList.remove('hidden');
  } else {
    navLinks.classList.add('hidden');
  }
});
