document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Before/after ring reveal slider
const slider = document.getElementById('revealSlider');
const finished = document.querySelector('.rings-finished');
if (slider && finished) {
  const update = () => {
    const val = slider.value;
    finished.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
  };
  slider.addEventListener('input', update);
  update();
}

// Contact form: no backend yet, so just confirm locally.
// Swap this for a real submit handler (e.g. Formspree, Netlify Forms,
// or a mailto fallback) once you decide how you want to receive leads.
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = "This form isn't wired up to send messages yet — for now, email hello@2nd-storyfurniture.com directly.";
  });
}
