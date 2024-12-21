document.querySelectorAll('.bn-nav-site-section').forEach(section => {
  section.addEventListener('click', function (e) {
    document.querySelectorAll('.bn-nav-site-section').forEach(item => {
      item.classList.remove('active');
    });
    this.classList.add('active');

    // Прокрутка к секции
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) { 
      e.preventDefault(); 
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth' 
        });
      }
    }
  });
});


window.addEventListener('scroll', function () {
  const navSite = document.querySelector('.bn-nav-site');
  if (window.scrollY > 10) {
    navSite.classList.add('scrolled'); 
  } else {
    navSite.classList.remove('scrolled'); 
  }
});
