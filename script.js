emailjs.init("e82nMmN1TUdZv9yXu"); // Public Key di emailjs
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    emailjs.send("service_55c43q4", "template_k1e1t6a", { //service_id dan template_id di emailjs
        from_name: name,
        reply_to: email,
        message: message,
    })
    .then((response) => {
        Swal.fire({
        icon: "success",
        title: "Pesan Terkirim! MOHON JANGAN SPAM!!!",
        text: "Pesan Anda telah berhasil dikirim. MOHON JANGAN SPAM!!!. Kami akan segera menghubungi Anda.",
    });
      e.target.reset(); // reset form setelah pengiriman
    })
    .catch((error) => {
        Swal.fire({
        icon: "error",
        title: "Gagal Mengirim Pesan",
        text: "Silakan coba lagi nanti.",
    });
    console.error("Error:", error);
    });
});

// Theme toggle functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const profileImg = document.querySelector('.home-img img');
const lightPhoto = 'image/ft ligth.png';
const darkPhoto = 'image/profil.jpeg';

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);
profileImg.src = savedTheme === 'dark' ? darkPhoto : lightPhoto;

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    profileImg.src = newTheme === 'dark' ? darkPhoto : lightPhoto;
});

function updateThemeIcon(theme) {
    themeToggleBtn.innerHTML = theme === 'light' ? '<i class="bi bi-moon-fill"></i>' : '<i class="bi bi-sun-fill"></i>';
    themeToggleBtn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
}

// Scroll spy - active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (link) {
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
});