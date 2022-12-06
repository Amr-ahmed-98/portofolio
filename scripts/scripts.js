const slides = document.querySelectorAll(".slide");
const arrowLeft = document.querySelectorAll(".arrow-left");
const arrowRight = document.querySelectorAll(".arrow-right");
let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const goNext = function () {
  if (curSlide === maxSlide - 1) curSlide = 0;
  else curSlide++;
  goToSlide(curSlide);
};

const goPrev = function () {
  if (curSlide == 0) curSlide = maxSlide - 1;
  else curSlide--;
  goToSlide(curSlide);
};

arrowRight.forEach((arrow) => arrow.addEventListener("click", goNext));
arrowLeft.forEach((arrow) => arrow.addEventListener("click", goPrev));
goToSlide(0);
