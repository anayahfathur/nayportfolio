const movingContent = document.querySelector('.moving-content');
    let position = 0;
    
    function animate() {
      position += 1; // Kecepatan bergerak (ubah angka ini kalau mau lebih cepat/lambat)
      movingContent.style.transform = `translateX(${position}px)`;
      
      // Jika sudah melebihi layar, reset ke kiri
      if (position > window.innerWidth) {
        position = -movingContent.offsetWidth;
      }
    
      requestAnimationFrame(animate);
    }
    
    animate();