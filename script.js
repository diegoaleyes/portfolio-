// Tema Día/Noche
const toggleBtn = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const setTheme = (theme) => {
  document.body.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
};

// Inicializar tema
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme(prefersDark ? 'dark' : 'light');
}

// Cambiar tema manual
toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
});

// Formulario con EmailJS (reemplaza tus claves)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_PUBLIC_KEY')
    .then(() => {
      document.getElementById('form-message').textContent = 'Mensaje enviado correctamente ✅';
      this.reset();
    }, (err) => {
      document.getElementById('form-message').textContent = 'Error al enviar el mensaje ❌';
      console.error(err);
    });
});
