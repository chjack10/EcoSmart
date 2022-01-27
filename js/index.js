var nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {

      if (window.pageYOffset > 50) {
        nav.classList.remove('bg-transparent');
        nav.classList.add('bg-dark', 'shadow');
      } else {
        nav.classList.add('bg-transparent');
        nav.classList.remove('bg-dark', 'shadow');
      }
    });