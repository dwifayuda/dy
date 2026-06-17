
    // PAGE LOADER
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('pageLoader').classList.add('done');
        setTimeout(() => document.getElementById('pageLoader').remove(), 700);
      }, 1500);
    });

    // CUSTOM CURSOR
    const cursor = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });

    function animateCursorRing() {
      rx += (mx - rx) * 0.8;
      ry += (my - ry) * 0.8;
      cursorRing.style.left = rx + 'px';
      cursorRing.style.top = ry + 'px';
      requestAnimationFrame(animateCursorRing);
    }
    animateCursorRing();

    // STARS CANVAS
    const canvas = document.getElementById('stars-canvas');
    const ctx = canvas.getContext('2d');
    let stars = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function initStars() {
      stars = [];
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.5 + 0.2,
          opacity: Math.random() * 0.8 + 0.1,
          speed: Math.random() * 0.3 + 0.05,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
          color: Math.random() > 0.85 ? '#d4a843' : Math.random() > 0.7 ? '#4fc3f7' : '#e8e4f8'
        });
      }
    }
    initStars();

    let frame = 0;
    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      stars.forEach(s => {
        const tw = Math.sin(frame * s.twinkleSpeed + s.twinkleOffset) * 0.4 + 0.6;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.opacity * tw;
        ctx.fill();
        ctx.globalAlpha = 1;
        s.y -= s.speed * 0.1;
        if (s.y < -2) {
          s.y = canvas.height + 2;
          s.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(animateStars);
    }
    animateStars();

    // NAV SCROLL
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // REVEAL ON SCROLL
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => observer.observe(el));

    // SMOOTH ANCHOR SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // PARALLAX HERO
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    });

    // FORM SUBMISSION
    document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      const subject = encodeURIComponent('Contact from Portfolio — ' + name);
      const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);

      window.location.href = `mailto:dwifayuda91@gmail.com?subject=${subject}&body=${body}`;
    });

    // SET CURRENT YEAR
    document.getElementById('year').textContent = new Date().getFullYear();

    // Disable custom cursor on touch devices
    if ('ontouchstart' in window) {
      document.body.style.cursor = 'auto';
      cursor.style.display = 'none';
      cursorRing.style.display = 'none';
    }
