onload = () => {
    const audio = document.getElementById("myAudio"); // Ambil elemen audio
    document.body.classList.remove("container");
    
    // Fungsi untuk memulai pemutaran suara
    function playSound() {
        audio.play();
    }
    
    // Atur timeout untuk memulai suara setelah beberapa detik (misalnya, 2 detik)
    setTimeout(playSound, 2000);
};
