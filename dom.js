var track = document.querySelector('.slider-track');
var leftBtn = document.querySelector('.arrow-left');
var rightBtn = document.querySelector('.arrow-right');
var slides = document.getElementsByClassName('slide');
var wWidth = window.innerWidth;
var slideCount = slides.length;

var index = 0;

// set up sizes
track.style.width = wWidth * slideCount + 'px';
for (i = 0; i < slides.length; i++) {
  slides[i].style.width = wWidth + 'px';
}

// moving the sliders
leftBtn.addEventListener('click', () => {
  index--;
  console.log(index);
  track.style.transform = `translateX(-${wWidth * index}px)`;
});

rightBtn.addEventListener('click', () => {
  console.log(index);
 if((index + 1) >= 4) {
   return null;
 }
 index++;
 track.style.transform = `translateX(-${wWidth * index}px)`;
});