const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const total = slideItems.length;
let index = 0;

setInterval(() => {
  index = (index + 1) % total;
  
  const slideWidth = slideItems[0].offsetWidth + 20; 
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}, 5000);

