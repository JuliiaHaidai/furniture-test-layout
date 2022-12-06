$(function () {
  $(".top-slider").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: `<button type="button" class="slick-arrow slick-next"> 
                   <img src="images/right-arrow.svg" alt="next arrow">
                </button>`,
    prevArrow: `<button type="button" class="slick-arrow slick-prev"> 
                   <img src="images/left-arrow.svg" alt="prev arrow">
                </button>`,
  });
});

$(function () {
  $(".benefits__items").slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: `<button type="button" class="slick-arrow slick-next">
                     <img src=" images/left-arrow.svg" alt="next arrow">
                  </button>`,
    prevArrow: `<button type="button" class="slick-arrow slick-prev">
                     <img src="images/right-arrow.svg" alt="prev arrow">
                  </button>`,
    responsive: [
      {
        breakpoint: 1440,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

const backToTopButton = document.querySelector(".footer__up-btn");

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

backToTopButton.addEventListener("click", goToTop);
