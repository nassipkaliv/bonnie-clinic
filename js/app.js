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



document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('#bn-about, #bn-examples, #bn-reviews, #bn-doctors, #bn-price');
  const navLinks = document.querySelectorAll('.bn-nav-site-section');

  function onScroll() {
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll);
});
