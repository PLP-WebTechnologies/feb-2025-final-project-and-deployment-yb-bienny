document.addEventListener('DOMContentLoaded', () => {
  // Product Add to Cart
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Item added to cart!');
    });
  });

  // Background color cycle (optional)
  const colors = ['#fdfbfb', '#e0f7fa', '#fff3e0', '#fce4ec'];
  let current = 0;

  setInterval(() => {
    document.body.style.background = colors[current];
    current = (current + 1) % colors.length;
  }, 10000);

  // Mousemove parallax effect
  const bg = document.getElementById('animated-bg');
  document.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    bg.style.backgroundPosition = `${x / 50}px ${y / 50}px`;
  });
});
