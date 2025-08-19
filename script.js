const video = document.getElementById('video');
const captureBtn = document.getElementById('capture');
const canvas = document.getElementById('canvas');
const photoResult = document.getElementById('photo-result');

// Aktifkan kamera
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    alert("Tidak bisa mengakses kamera: " + err);
  });

// Ambil foto saat tombol diklik
captureBtn.addEventListener('click', () => {
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Ubah hasil canvas menjadi gambar
  const imageData = canvas.toDataURL('image/png');
  const img = document.createElement('img');
  img.src = imageData;

  // Hapus foto lama lalu tampilkan foto baru
  photoResult.innerHTML = '';
  photoResult.appendChild(img);
});
