document.querySelector('#year').textContent = String(new Date().getFullYear());

const cards = document.querySelectorAll('.services article');
cards.forEach((card, index) => {
  card.animate(
    [
      { opacity: 0, transform: 'translateY(22px) scale(0.98)' },
      { opacity: 1, transform: 'translateY(0) scale(1)' },
    ],
    {
      duration: 500,
      delay: index * 130,
      easing: 'ease-out',
      fill: 'forwards',
    },
  );
});
