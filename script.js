// Tema Día/Noche
const toggleBtn = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const setTheme = (theme) => {
  document.body.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
};

const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
});

// Animación al hacer scroll
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});
sections.forEach(section => observer.observe(section));

// EmailJS Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_PUBLIC_KEY')
    .then(() => {
      document.getElementById('form-message').textContent = 'Mensaje enviado correctamente ✅';
      this.reset();
    })
    .catch((err) => {
      document.getElementById('form-message').textContent = 'Error al enviar el mensaje ❌';
      console.error(err);
    });
});
