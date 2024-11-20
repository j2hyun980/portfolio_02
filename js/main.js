$(function () {

  // main-banner
  const mb = new Swiper('.mb', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false, },
    speed: 600,
    pagination: { el: ".swiper-pagination", type: "bullets", clickable: true, },
  });

  //victo
  const victo_img = new Swiper('.victo_img', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false, },
    speed: 600,
  });

  //ride
  const ride_img = new Swiper('.ride_img', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false, },
    speed: 600,
    pagination: { el: ".swiper-pagination", type: "bullets", clickable: true, },
  });

  //notice
  $("#notice .btn_list button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  //gotop-btn
  $(".gotop").hide();
  $(".gotop").click(function () {
    $(window).scrollTop(0);
  });
  $(window).scroll(function () {
    let mbtnScroll = $(this).scrollTop();
    if (mbtnScroll > 400) {

      $(".gotop").addClass("active").fadeIn();
    } else {
      $(".gotop").removeClass("active");
    }
  });

});