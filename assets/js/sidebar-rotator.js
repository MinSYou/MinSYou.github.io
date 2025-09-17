<script>
document.addEventListener('DOMContentLoaded', function () {
  // Put your sidebar images here (add as many as you want)
  const images = [
    '/assets/img/sidebar/slide1.jpg',
    '/assets/img/sidebar/slide2.jpg',
    '/assets/img/sidebar/slide3.jpg'
  ];

  // Early exit if no images
  if (!images.length) return;

  // Preload images
  images.forEach(src => { const i = new Image(); i.src = src; });

  const a = document.querySelector('.sidebar .bg-a');
  const b = document.querySelector('.sidebar .bg-b');
  if (!a || !b) return;

  // Set initial images
  let idx = 0;
  let showA = true;
  a.style.backgroundImage = `url('${images[idx]}')`;
  b.style.backgroundImage = `url('${images[(idx+1) % images.length]}')`;
  b.classList.add('hidden'); // a is visible first

  const swap = () => {
    idx = (idx + 1) % images.length;

    if (showA) {
      // Make B the next visible layer
      b.style.backgroundImage = `url('${images[idx]}')`;
      b.classList.remove('hidden');  // fade in B
      a.classList.add('hidden');     // fade out A
    } else {
      a.style.backgroundImage = `url('${images[idx]}')`;
      a.classList.remove('hidden');  // fade in A
      b.classList.add('hidden');     // fade out B
    }
    showA = !showA;
  };

  // Change every 30 seconds (30000 ms)
  setInterval(swap, 30000);
});
</script>
