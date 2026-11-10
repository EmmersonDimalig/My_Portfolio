/* ─────────────────────────────────────────────────
   script.js — Portfolio interactions
───────────────────────────────────────────────── */

// ── Mobile nav drawer ─────────────────────────────
const hamburger  = document.getElementById('hamburger');
const drawer     = document.getElementById('mobile-drawer');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  drawer.classList.toggle('open');
});

function closeDrawer() {
  hamburger.classList.remove('open');
  drawer.classList.remove('open');
}

// ── Active nav link on scroll ─────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${e.target.id}`;
        link.classList.toggle('active', active);
      });
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => sectionObserver.observe(s));

// ── Scroll-reveal animations ──────────────────────
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ── Copy email ────────────────────────────────────
const copyBtn   = document.getElementById('copyBtn');
const emailText = document.querySelector('.cta-email');

if (copyBtn && emailText) {
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(emailText.textContent.trim()).then(() => {
      copyBtn.textContent = 'Copied!';
      setTimeout(() => { copyBtn.textContent = 'Copy ↗'; }, 2000);
    });
  });
}
