/* ============================================
   FOOTER YEAR
   ============================================ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ============================================
   MOBILE NAV
   ============================================ */
const burger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

/* ============================================
   DARK MODE
   ============================================ */
const THEME_KEY = 'frame-and-spoke::theme';
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}

const savedTheme = localStorage.getItem(THEME_KEY);
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

/* ============================================
   SCROLL REVEAL
   ============================================ */
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in-view'));
}

/* ============================================
   CONTACT FORM VALIDATION
   ============================================ */
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

function showError(input, message) {
  const errorEl = form.querySelector(`[data-error-for="${input.id}"]`);
  if (errorEl) errorEl.textContent = message;
}

function clearError(input) {
  const errorEl = form.querySelector(`[data-error-for="${input.id}"]`);
  if (errorEl) errorEl.textContent = '';
}

function validateField(input) {
  input.dataset.touched = 'true';

  if (input.validity.valueMissing) {
    showError(input, 'This field is required.');
    return false;
  }
  if (input.type === 'email' && input.validity.typeMismatch) {
    showError(input, 'Enter a valid email address.');
    return false;
  }
  clearError(input);
  return true;
}

['nameInput', 'emailInput', 'messageInput'].forEach((id) => {
  const input = document.getElementById(id);
  input.addEventListener('blur', () => validateField(input));
  input.addEventListener('input', () => {
    if (input.dataset.touched === 'true') validateField(input);
  });
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const fields = ['nameInput', 'emailInput', 'messageInput'].map((id) =>
    document.getElementById(id)
  );
  const allValid = fields.map(validateField).every(Boolean);

  if (!allValid) {
    status.textContent = 'Please fix the fields highlighted above.';
    status.style.color = 'var(--orange)';
    return;
  }

  // No backend wired up — this is a portfolio demo.
  // In production this would POST to an API endpoint or form service.
  status.textContent = "Thanks — we'll get back to you within one business day.";
  status.style.color = 'var(--brass)';
  form.reset();
  fields.forEach((f) => (f.dataset.touched = 'false'));
});
