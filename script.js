let currentLang = 'en';

    function toggleLanguage() {
      currentLang = currentLang === 'en' ? 'az' : 'en';
      document.getElementById('langToggle').innerText = currentLang === 'en' ? 'AZ / EN' : 'EN / AZ';
      
      document.querySelectorAll('[data-en]').forEach(el => {
        el.innerHTML = el.getAttribute(`data-${currentLang}`);
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.fade-in-up').forEach(el => {
            el.style.animationPlayState = 'running';
          });
          const fadeElements = entry.target.querySelectorAll('.fade-in-up');
          if (fadeElements.length === 0) {
            entry.target.classList.add('fade-in-up');
          }
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));
