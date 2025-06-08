const ucapanBucin = [
  "Mass tuh gak butuh alarm, cukup senyum dedee udah bikin mass bangun semangat 💕",
  "Cinta mass ke dedee tuh kayak kuota unlimited, gak pernah habis buat dedee 💌",
  "Kangen ini udah kayak utang, makin lama makin nambah bunganya. 🌷💐",
  "Mass kangen, tapi bukan kangen biasa. Ini kangen yang cuma bisa sembuh kalau lihat senyum dedee 😘"
];

function tampilkanUcapan() {
  const acak = Math.floor(Math.random() * ucapanBucin.length);
  document.getElementById("ucapan").innerText = ucapanBucin[acak];
}

function mulaiMusik() {
  const musik = document.getElementById("musik");
  musik.play().catch(err => {
    console.log("Musik tidak bisa diputar otomatis. Klik layar dulu.");
  });
  document.body.onclick = null;
}

function buatLove() {
  const love = document.createElement("img");
  love.src = "heart.png";
  love.style.left = Math.random() * 100 + "vw";
  love.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.getElementById("hearts").appendChild(love);

  setTimeout(() => {
    love.remove();
  }, 5000);
}

setInterval(buatLove, 500);
