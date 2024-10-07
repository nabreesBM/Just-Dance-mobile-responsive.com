$(document).ready(function(){
    $("#menu").click(function(){
        $("#navbar").slideToggle("slow");
    });
});

var swiper5 = new Swiper(".heroslider", {
  grabCursor: true,
  effect: "creative",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ["-150%", 0, -50000],
      rotate: [0, 0, -90],
    },
    next: {
      shadow: false,
      translate: ["125%", 0, -5000],
      rotate: [0, 0, 200],
    },
  },
});

var swiper = new Swiper(".tesslider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});