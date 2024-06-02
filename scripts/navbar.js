window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('hidden', window.scrollY > 60);
  });