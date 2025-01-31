function initCarousel() {
  const lefttArrow = document.querySelector('.carousel__arrow_left');
  const rightArrow = document.querySelector('.carousel__arrow_right');

  const carouselInner = document.querySelector('.carousel__inner');
  const slide = document.querySelector('.carousel__slide');
  const sildeWidth = slide.offsetWidth;


  let carouselInnerPosition = 0;

  if (carouselInnerPosition == 0) {
    lefttArrow.style.display = 'none';
  }

  lefttArrow.addEventListener('click', function(event) {

    rightArrow.style.display = '';

    carouselInnerPosition += sildeWidth;
    carouselInner.style.transform = `translateX(${carouselInnerPosition}px)`;

    if (carouselInnerPosition == 0) {
      lefttArrow.style.display = 'none';
    }

  });

  rightArrow.addEventListener('click', function(event) {

    lefttArrow.style.display = '';

    carouselInnerPosition -= sildeWidth;
    carouselInner.style.transform = `translateX(${carouselInnerPosition}px)`;

    if (carouselInnerPosition == -sildeWidth * (4 - 1)) {
      rightArrow.style.display = 'none';
    }

  });

}
