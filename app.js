//
const carosel = document.querySelector('.carousel-img');
const image1 = document.querySelector('#carosel-image-1');
const image2 = document.querySelector('#carosel-image-2');
const image3 = document.querySelector('#carosel-image-3');
const image4 = document.querySelector('#carosel-image-4');
const image5 = document.querySelector('#carosel-image-5');
const images = []

let slideIndex = 0
changeimg()

function changeimg(){
  let i;
  const x = document.getElementsByClassName('carosel-images');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
  }

  slideIndex++
  if (slideIndex > x.length) {
  slideIndex = 1;
  }
  x[slideIndex-1].style.display= 'block';
  setTimeout(changeimg, 7000)
}

(function(d){
  const itemClassName = 'carosel-photo',
  items = d.getElementsByClassName(itemClassName),
    totalItems = items.length,
    slide = 0,
    moving = true;

    function setInitialClasses(){
      // Targets the previous, current, and next items
      // This assumes there are at least three items.
      items[totalItems - 1].classList.add("prev");
      items[0].classList.add("active");
      items[1].classList.add("next");
    }

    function setEventListeners(){
      var next = d.getElementsByClassName('carousel-next')[0],
      prev = d.getElementsByClassName('carousel-prev')[0];
      next.addEventListener('click', moveNext);
      prev.addEventListener('click', movePrev);
    }
})(document)
