const typed = document.getElementById("typed");

const typedText = new Typed(typed, {
    strings: ['Fullstack Web Developer', 'Networking Support', 'Cyber Security Enthusiast'],
    typeSpeed: 110,
    backSpeed: 100,
    loop: true,
    smartBackspace: true,
    cursorChar: '|',
});


const ctaButton = document.getElementById('cta-btn')

ctaButton.addEventListener('click', () => {
    const phoneNumber = "6285362802143"; // Ganti dengan nomor tujuan
    const message = encodeURIComponent("Halo, saya tertarik dengan jasa Anda!"); // Pesan otomatis
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank')
})