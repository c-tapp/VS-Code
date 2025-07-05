const darkLayer = document.querySelector('.bg-dark');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > 400) {
    darkLayer.style.opacity = 1;
    document.body.classList.add('dark-mode');
  } else {
    darkLayer.style.opacity = 0;
    document.body.classList.remove('dark-mode');
  }
});
