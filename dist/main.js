const navToggle = document.querySelector('.nav_toggle');
const navList = document.querySelector('nav');

navToggle.addEventListener('click', function () {
  navList.classList.toggle('open')
})


// let testimonialSlider = document.querySelectorAll('.testimonial_slider');
// let btns = document.querySelectorAll('.navigation_btn')
// let currentSlide = 1;

// let manualNav = function (manual) {
//   testimonialSlider.forEach((slide) => {
//     slide.classList.remove('active');

//     btns.forEach((btn) => {
//       btn.classList.remove('active');
//     })
//   });
//   testimonialSlider[manual].classList.add('active');
//   btns[manual].classList.add('active');
// }

// btns.forEach((btn, i) => {
//   btn.addEventListener('click', () => {
//     manualNav(i);
//     currentSlide = i;
//   });
// });

// let repeat = function (activeClass) {
//   let active = document.getElementsByClassName('active');
//   let i = 1;

//   let repeater = () => {
//     setTimeout(function () {
//       [...active].forEach((activeSlide) => {
//         activeSlide.classList.remove('active');
//       })

//       testimonialSlider[i].classList.add('active');
//       btns[i].classList.add('active');
//       i++;

//       if (testimonialSlider.length == i) {
//         i = 0;
//       }
//       if (i >= testimonialSlider.length) {
//         return;
//       }
//       repeater();
//     }, 5000);
//   }
//   repeater();
// }
// repeat();

$(".carousel").owlCarousel({
  effect: 'coverflow',
  centeredSlides: true,
  margin: 5,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000, //2000 ms = 2
  autoplayHoverPause: true,
  responsive: {
    0: {
      item: 1,
      nav: false
    },
    600: {
      item: 2,
      nav: false
    },
    1000: {
      item: 3,
      nav: false
    }
  }
});

