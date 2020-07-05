//
// const carosel = document.querySelector('.carousel-img');
// const image1 = document.querySelector('#carosel-image-1');
// const image2 = document.querySelector('#carosel-image-2');
// const image3 = document.querySelector('#carosel-image-3');
// const image4 = document.querySelector('#carosel-image-4');
// const image5 = document.querySelector('#carosel-image-5');

//const images = []

// let imageIndex = 1;
//
// const image1 = document.querySelector('#button-1').addEventListener('click', currentImage(1));
// const image2 = document.querySelector('#button-2').addEventListener('click', currentImage(2));
// const image3 = document.querySelector('#button-3').addEventListener('click', currentImage(3));
// const image4 = document.querySelector('#button-4').addEventListener('click', currentImage(4));
// const image5 = document.querySelector('#button-5').addEventListener('click', currentImage(5));
//
// function currentImage(n){
//   showSlide(imageIndex = n)
//   console.log(imageIndex);
// }
//
// function showSlide(n){
// let i;
// const images = document.getElementsByClassName('carosel-images');
// if (n > images.length) {
//   imageIndex = 1;
// }
// if (n < 1) {
//   imageIndex = images.length
//   }
//
//   for (i = 0; i < images.length; i++) {
//     images[i].style.display = 'none';
//   }
//
//
//   images[imageIndex - 1].style.display = 'block';
//   images[imageIndex - 1].style.transition = 'all 2s'
// }

// (function(d){
//   const itemClassName = '.carosel-images';
//   const items = document.getElementsByClassName(itemClassName);
//   const totalItems = items.length;
//   const slide = 0;
//   const moving = true;
//
//   function setInitialClasses(){
//     items[totalItems - 1].classList.add("prev");
//     items[0].classList.add("active");
//     items[1].classList.add("next");
//   }
//
//   function setEventListeners() {
//   var next = d.getElementsByClassName('carousel__button--next')[0],
//       prev = d.getElementsByClassName('carousel__button--prev')[0];
//   next.addEventListener('click', moveNext);
//   prev.addEventListener('click', movePrev);
// }
//
// function moveNext() {
//   // Check if moving
//   if (!moving) {
//     // If it's the last slide, reset to 0, else +1
//     if (slide === (totalItems - 1)) {
//       slide = 0;
//     } else {
//       slide++;
//     }
//     // Move carousel to updated slide
//     moveCarouselTo(slide);
//   }
// }
// // Previous navigation handler
// function movePrev() {
//   // Check if moving
//   if (!moving) {
//     // If it's the first slide, set as the last slide, else -1
//     if (slide === 0) {
//       slide = (totalItems - 1);
//     } else {
//       slide--;
//     }
//
//     // Move carousel to updated slide
//     moveCarouselTo(slide);
//   }
// }
// })(document)



document.querySelector('#button-1').addEventListener('click', nextImage);
document.querySelector('#button-2').addEventListener('click', nextImage);
// const image3 = document.querySelector('#button-3').addEventListener('click', currentImage(3));
// const image4 = document.querySelector('#button-4').addEventListener('click', currentImage(4));
// const image5 = document.querySelector('#button-5').addEventListener('click', currentImage(5));

var curImage = 0;
var numImages = 5;

function nextImage() {
    var e;
    // remove showMe class from current image
    e = document.getElementById("carosel-images" + curImage);
    removeClass(e, "opaque");

    // compute next image
    curImage++;
    if (curImage > numImages - 1) {
        curImage = 0;
    }

    // add showMe class to next image
    e = document.getElementById("carosel-images" + curImage);
    addClass(e, "opaque");
}

function addClass(elem, name) {
    var c = elem.className;
    if (c) c += " ";  // if not blank, add a space separator
    c += name;
    elem.className = c;
}

function removeClass(elem, name) {
    var c = elem.className;
    elem.className = c.replace(name, "").replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");  // remove name and extra blanks
}




// var s = 0;
// var r = 5;
//
// function changeImage(){
//
//   var e = document.getElementById("carosel-images" + s);
//     removeClass(e, "opaque");
//
//     r++;
//     if (r > numImages - 1) {
//         r = 0;
//     }
//
//     // add showMe class to next image
//     e = document.getElementById("carosel-images" + r);
//     addClass(e, "opaque");
// }
//
// function addClass(elem, name) {
//     var c = elem.className;
//     if (c) c += " ";  // if not blank, add a space separator
//     c += name;
//     elem.className = c;
// }
//
// function removeClass(elem, name) {
//     var c = elem.className;
//     elem.className = c.replace(name, "").replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");  // remove name and extra blanks
// }
// // const image = document.getElementsByClassName('carosel-images');
// //
// // var arr = [].slice.call(image);
// // console.log(arr);
// //
// // arr.forEach((item, i) => {
// // console.log(arr[i].classList);
// // });
//
// // if (image.classList.contains('opaque')) {
// //   image.classList.toggle('opaque');
// // } else {
// //   image.classList.toggle('opaque');
// // }
//
// // if (image.values === 'opaque') {
// // console.log('yes');
// // }
//
// // image.classList.remove('opaque')
// // console.log(image);
// // if (image.classList.contains === 'opaque') {
// //
// //   console.log('yes');
// //
// // }
