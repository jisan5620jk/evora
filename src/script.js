//header top Slider
///////////////////////////////////////////////////////
const blogSlider = new Swiper('.header-top-slider', {
  // Optional parameters
  grabCursor: false,
  speed: 500,
  loop: true,
  autoplay: {
    delay: 2000, // Autoplay delay in milliseconds
    disableOnInteraction: false,
  },
  spaceBetween: 0,
  slidesPerView: 1,
});

//Product slider
///////////////////////////////////////////////////////
$(document).ready(function () {
  $('.product-slider1').slick({
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<span class="slick-prev"><i class="fa-solid fa-arrow-right"></i></span>',
    nextArrow:
      '<span class="slick-next"><i class="fa-solid fa-arrow-left"></i></span>',
    fade: false,
    cssEase: 'ease',
    asNavFor: '.product-slider-btn1',
  });
});
$(document).ready(function () {
  $('.product-slider-btn1').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: false,
    asNavFor: '.product-slider1',
    dots: false,
    centerMode: false,
    arrows: true,
    prevArrow:
      '<span class="slick-prev"><i class="fa-solid fa-arrow-right"></i></span>',
    nextArrow:
      '<span class="slick-next"><i class="fa-solid fa-arrow-left"></i></span>',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $('.product-slider2').slick({
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<span class="slick-prev"><i class="fa-solid fa-arrow-right"></i></span>',
    nextArrow:
      '<span class="slick-next"><i class="fa-solid fa-arrow-left"></i></span>',
    fade: false,
    cssEase: 'ease',
    asNavFor: '.product-slider-btn2',
  });
});
$(document).ready(function () {
  $('.product-slider-btn2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: false,
    asNavFor: '.product-slider2',
    dots: false,
    centerMode: false,
    arrows: true,
    prevArrow:
      '<span class="slick-prev"><i class="fa-solid fa-arrow-right"></i></span>',
    nextArrow:
      '<span class="slick-next"><i class="fa-solid fa-arrow-left"></i></span>',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $('.product-slider3').slick({
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<span class="slick-prev"><i class="fa-solid fa-arrow-right"></i></span>',
    nextArrow:
      '<span class="slick-next"><i class="fa-solid fa-arrow-left"></i></span>',
    fade: false,
    cssEase: 'ease',
    asNavFor: '.product-slider-btn3',
  });
});
$(document).ready(function () {
  $('.product-slider-btn3').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: false,
    asNavFor: '.product-slider3',
    dots: false,
    centerMode: false,
    arrows: true,
    prevArrow:
      '<span class="slick-prev"><i class="fa-solid fa-arrow-right"></i></span>',
    nextArrow:
      '<span class="slick-next"><i class="fa-solid fa-arrow-left"></i></span>',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
});


  ////////////////////////////////////////////////////
  // 09. Product Expand

  let expand = document.querySelectorAll(".product-dropdown-btn");
  expand.forEach((expand) => {
    expand.addEventListener("click", (event) => {
      const active = document.querySelector(".product-dropdown-btn");
      if (active && active !== expand) {
        active.classList.toggle("active");
        active.nextElementSibling.style.maxHeight = 0;
      }
      expand.classList.toggle("active");
      const expandContent = expand.nextElementSibling;
      if (expand.classList.contains("active")) {
        expandContent.style.maxHeight = expandContent.scrollHeight + "px";
      } else {
        expandContent.style.maxHeight = 0;
      }
    });
  });


/* Calendar Tab */

document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab-btn');
  const all_content = document.querySelectorAll('.tab-content');

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (tab) {
        tab.classList.remove('active');
      });
      tab.classList.add('active');

      all_content.forEach(function (content) {
        content.classList.remove('active');
      });
      all_content[index].classList.add('active');
    });
  });
});
