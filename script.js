/* =============================================
   PRAISE | Portfolio — JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ===== CUSTOM CURSOR =====
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');

  if (cursor && follower && window.innerWidth > 768) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effects
    const hoverTargets = document.querySelectorAll('a, button, .cursor-hover, .project-card, .trust-card, .pricing-card');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        follower.style.width = '60px';
        follower.style.height = '60px';
        follower.style.borderColor = 'rgba(245,197,24,0.6)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        follower.style.width = '40px';
        follower.style.height = '40px';
        follower.style.borderColor = 'rgba(245,197,24,0.4)';
      });
    });
  }

  // ===== NAVBAR SCROLL =====
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ===== MOBILE MENU =====
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = document.getElementById('close-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    const lines = hamburger.querySelectorAll('.ham-line');
    lines[0].style.transform = 'translateY(8px) rotate(45deg)';
    lines[1].style.opacity = '0';
    lines[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    lines[2].style.width = '24px';
    lines[2].style.marginLeft = '0';
  }

  function closeMenuFn() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    const lines = hamburger.querySelectorAll('.ham-line');
    lines[0].style.transform = '';
    lines[1].style.opacity = '';
    lines[2].style.transform = '';
    lines[2].style.width = '';
    lines[2].style.marginLeft = '';
  }

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (closeMenu) closeMenu.addEventListener('click', closeMenuFn);
  mobileLinks.forEach(link => link.addEventListener('click', closeMenuFn));

  // ===== SCROLL REVEAL =====
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  reveals.forEach(el => revealObserver.observe(el));

  // ===== FAQ ACCORDION =====
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      faqItems.forEach(i => i.classList.remove('open'));
      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
  });

  // ===== CURRENCY SWITCHER =====
  const currencyData = {
    NGN: { symbol: '₦', format: (n) => '₦' + n.toLocaleString('en-NG') },
    USD: { symbol: '$', format: (n) => '$' + n.toLocaleString('en-US') },
    GBP: { symbol: '£', format: (n) => '£' + n.toLocaleString('en-GB') },
    EUR: { symbol: '€', format: (n) => '€' + n.toLocaleString('de-DE') },
    CAD: { symbol: 'C$', format: (n) => 'C$' + n.toLocaleString('en-CA') },
  };

  const currencyBtns = document.querySelectorAll('.currency-btn');
  const priceAmounts = document.querySelectorAll('[data-price]');
  const priceSymbols = document.querySelectorAll('[data-price-prefix]');

  let activeCurrency = 'NGN';

  function updatePrices(currency) {
    activeCurrency = currency;

    priceAmounts.forEach(el => {
      const prices = {};
      el.getAttribute('data-price').split('|').forEach(pair => {
        const [key, val] = pair.split(':');
        prices[key] = parseInt(val);
      });

      if (prices[currency] !== undefined) {
        const val = prices[currency];
        // Format with commas
        el.textContent = val.toLocaleString();
      }
    });

    priceSymbols.forEach(el => {
      el.textContent = currencyData[currency].symbol;
    });

    currencyBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.currency === currency);
    });
  }

  currencyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      updatePrices(btn.dataset.currency);
    });
  });

  // ===== CONTACT FORM =====
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name) {
        showToast('⚠️ Please enter your name.', 'error');
        return;
      }

      if (!email || !isValidEmail(email)) {
        showToast('⚠️ Please enter a valid email address.', 'error');
        return;
      }

      if (!message) {
        showToast('⚠️ Please tell me about your project.', 'error');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
      }

      try {
        const formData = new FormData(form);

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (result.success) {
          showToast('✅ Message sent successfully. I will get back to you soon!', 'success');
          form.reset();
        } else {
          showToast('❌ Something went wrong. Please try again.', 'error');
        }

      } catch (error) {
        showToast('❌ Network error. Please try again.', 'error');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Send Message';
        }
      }
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showToast(message, type = 'success') {
    const bg = type === 'success'
      ? 'linear-gradient(135deg, #1a1a1a, #2a2a2a)'
      : 'linear-gradient(135deg, #2a1a1a, #1a0a0a)';

    const border = type === 'success' ? '#F5C518' : '#ff6b6b';

    Toastify({
      text: message,
      duration: 4000,
      gravity: 'top',
      position: 'right',
      stopOnFocus: true,
      style: {
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: '10px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
        color: '#fff',
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '0.9rem',
        fontWeight: '500',
        padding: '14px 20px',
        minWidth: '280px',
      }
    }).showToast();
  }

  // ===== SMOOTH SCROLL FOR NAV LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = navbar ? navbar.offsetHeight : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ===== HERO COUNTER ANIMATION =====
  function animateCounter(el, target, duration = 1200) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        el.textContent = target + (el.dataset.suffix || '');
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(start) + (el.dataset.suffix || '');
      }
    }, 16);
  }

  // Observe hero stats
  const heroStats = document.querySelectorAll('.hero-stat-number');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  heroStats.forEach(stat => statsObserver.observe(stat));

  // ===== NAVBAR ACTIVE STATE ON SCROLL =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.style.color = 'var(--gold)';
          }
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-80px 0px 0px 0px'
  });

  sections.forEach(section => sectionObserver.observe(section));

  // ===== PAGE LOAD ANIMATION =====
  window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 50);
  });

  // ===== PROJECT CARD TILT EFFECT =====
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 768) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ===== TRUST CARD TILT EFFECT =====
  const trustCards = document.querySelectorAll('.trust-card');

  trustCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 768) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;
      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ===== BACK TO TOP ON LOGO CLICK =====
  const logo = document.querySelector('nav a[href="#"]');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== GLOWING EFFECT ON SCROLL =====
  const heroSection = document.getElementById('hero');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (heroSection) {
      heroSection.style.setProperty('--scroll', scrolled + 'px');
    }
  });

  // ===== WHATSAPP TOAST ON LOAD (after 8 seconds) =====
  setTimeout(() => {
    showToast('💬 Quick question? Chat on WhatsApp →', 'success');
  }, 8000);

});
