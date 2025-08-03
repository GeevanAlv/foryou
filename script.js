document.addEventListener('DOMContentLoaded', function() {

    // KODE INI HANYA BERJALAN JIKA ADA COUNTDOWN DI HALAMAN (index.html)
    if (document.getElementById('countdownContainer')) {
        const targetDate = new Date("Aug 04, 2025 00:00:00").getTime();
        const hariEl = document.getElementById('hari');
        const jamEl = document.getElementById('jam');
        const menitEl = document.getElementById('menit');
        const detikEl = document.getElementById('detik');
        const countdownContainer = document.getElementById('countdownContainer');
        const ucapanWrapper = document.getElementById('ucapanWrapper');
        const confettiCanvas = document.getElementById('confetti-canvas');
        const myConfetti = confetti.create(confettiCanvas, { resize: true, useWorker: true });

        function startCelebration() {
            countdownContainer.style.display = 'none';
            ucapanWrapper.classList.remove('hidden');
            ucapanWrapper.classList.add('visible');

            let duration = 5 * 1000;
            let end = Date.now() + duration;
            (function frame() {
                myConfetti({ particleCount: 2, angle: 60, spread: 55, origin: { x: 0 } });
                myConfetti({ particleCount: 2, angle: 120, spread: 55, origin: { x: 1 } });
                if (Date.now() < end) { requestAnimationFrame(frame); }
            }());
        }

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            if (distance < 0) {
                clearInterval(interval);
                startCelebration();
                return;
            }
            hariEl.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
            jamEl.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            menitEl.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            detikEl.innerText = Math.floor((distance % (1000 * 60)) / 1000);
        }, 1000);
    }

    // KODE INI HANYA BERJALAN JIKA ADA HALAMAN UCAPAN

    if (document.getElementById('music-prompt')) {

    // Ambil semua elemen yang kita butuhkan

    const music = document.getElementById('background-music');

    const musicPrompt = document.getElementById('music-prompt');

    const playPromptButton = document.getElementById('play-prompt-button');

    const letterContainer = document.querySelector('.letter-container');

    const backButton = document.querySelector('.back-button');

    const musicControlButton = document.getElementById('music-control-button');



    // Fungsi saat tombol "Putar Lagu" di pesan pembuka diklik

    playPromptButton.addEventListener('click', () => {

        // 1. Putar musik

        music.play();

        musicControlButton.classList.remove('play', 'hidden');

        musicControlButton.classList.add('pause');



        // 2. Sembunyikan pesan pembuka

        musicPrompt.style.display = 'none';



        // 3. Tampilkan surat dan tombol kembali

        letterContainer.classList.remove('hidden');

        backButton.classList.remove('hidden');

        

        // --- INI BAGIAN YANG DIPERBAIKI ---

        // Beri browser waktu sesaat (50 milidetik) untuk memproses

        // hilangnya kelas 'hidden' sebelum kita memulai animasi.

        setTimeout(() => {

            // Ambil semua judul (h1) dan paragraf (p) di dalam surat

            const elementsToAnimate = letterContainer.querySelectorAll('h1, p');



            // Buat setiap elemen muncul satu per satu

            elementsToAnimate.forEach((element, index) => {

                setTimeout(() => {

                    element.classList.add('fade-in');

                }, index * 1200); // Jeda 1.2 detik antar elemen

            });

        }, 50); // Jeda kecil 50 milidetik

    });



    // Fungsikan juga tombol kontrol kecil di pojok

    musicControlButton.addEventListener('click', () => {

        if (music.paused) {

            music.play();

            musicControlButton.classList.remove('play');

            musicControlButton.classList.add('pause');

        } else {

            music.pause();

            musicControlButton.classList.remove('pause');

            musicControlButton.classList.add('play');

        }

    });

}

});
