document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Mengisi Nama Sambutan secara Dinamis
    // Saya set nama defaultnya adalah namamu
    const userName = prompt("Please enter your name:", "Nadhil");
    if (userName) {
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.textContent = `Hi ${userName}, Welcome To Website`;
    }

    // 2. Validasi Form dan Menampilkan Output
    const messageForm = document.getElementById('message-form');
    if (messageForm) {
        messageForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form dari reload halaman

            // Mengambil nilai dari setiap input
            const fullName = document.getElementById('full-name').value;
            const birthDate = document.getElementById('birth-date').value;
            const genderRadio = document.querySelector('input[name="gender"]:checked');
            const messages = document.getElementById('messages').value;

            // Validasi: Pastikan semua field terisi
            if (!fullName || !birthDate || !genderRadio || !messages) {
                alert("Semua kolom wajib diisi ya!");
                return;
            }
            
            const gender = genderRadio.value;

            // Mengisi area output
            document.getElementById('current-time').textContent = new Date().toLocaleString('id-ID');
            document.getElementById('output-name').textContent = fullName;
            document.getElementById('output-birth-date').textContent = birthDate;
            document.getElementById('output-gender').textContent = gender;
            document.getElementById('output-messages').textContent = messages;
            
            messageForm.reset();
        });
    }
});