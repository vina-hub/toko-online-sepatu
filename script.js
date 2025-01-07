document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form dari pengiriman default
  
    // Menampilkan pesan sukses
    document.getElementById('message-success').style.display = 'block';
  
    // Reset form setelah pengiriman
    document.getElementById('contact-form').reset();
  });
  