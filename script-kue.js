document.addEventListener('DOMContentLoaded', () => {
    const blowButton = document.getElementById('blow-button');
    const candles = document.querySelectorAll('.candle');
    const instruction = document.getElementById('instruction');
    const finalWish = document.getElementById('final-wish');
    const readLetterButton = document.getElementById('read-letter-button'); // Tombol baru

    blowButton.addEventListener('click', () => {
        // Matikan semua lilin
        candles.forEach(candle => {
            candle.classList.remove('lit');
        });

        // Sembunyikan tombol & instruksi awal
        blowButton.style.display = 'none';
        instruction.style.display = 'none';

        // Tampilkan pesan harapan dan tombol untuk lanjut
        setTimeout(() => {
            finalWish.classList.remove('hidden');
            readLetterButton.classList.remove('hidden'); // Tampilkan tombol lanjut
        }, 800);
    });
});