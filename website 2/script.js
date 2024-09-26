// Fungsi untuk menghandle tombol klik di beranda
document.getElementById('clickMe')?.addEventListener('click', function() {
    alert('Belum Ada Tambahan Ya :v');
});

// Fungsi untuk menangani pengiriman formulir kontak
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validasi input
    if (name === '' || email === '' || message === '') {
        alert('Semua field harus diisi!');
        return;
    }

    alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
    document.getElementById('contactForm').reset(); // Reset form setelah pengiriman
});

// Fungsi untuk memperbesar gambar galeri saat diklik
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.innerHTML = `<img src="${img.src}" alt="Gambar Besar">`;
        document.body.appendChild(overlay);

        overlay.addEventListener('click', function() {
            document.body.removeChild(overlay); // Hapus overlay saat diklik
        });
    });
});

// Animasi saat menggulir
const animatedElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});

animatedElements.forEach(element => {
    observer.observe(element);
});
