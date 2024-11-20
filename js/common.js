$(function () {

  //depth2
  $(".depth2, .depth2_bg").hide();
  $("#header .h_btm .gnb > li").mouseenter(function () {
    $(".depth2_bg").stop().fadeIn();
    $(this).find(".depth2").stop().fadeIn();
  });

  $("#header .h_btm .gnb > li").mouseleave(function () {
    $(".depth2_bg").stop().fadeOut();
    $(this).find(".depth2").stop().fadeOut();
  });

  //sch-area
  $(".sch_area").hide();
  $(".util .search").click(function () {
    $(".sch_area").stop().fadeIn();
  });
  $(".sch_close").click(function () {
    $(".sch_area").stop().fadeOut();
  });

  //mgnb
  $(".mgnb_wrap").hide();
  $(".btn_ham").click(function () {
    $(".mgnb_wrap").fadeIn();
    $(".sch_area").fadeOut();
  });
  $(".mutil .m_sch").click(function () {
    $(".mgnb_wrap").fadeOut();
    $(".sch_area").fadeIn();
  });
  $(".mutil .ham_close").click(function () {
    $(".mgnb_wrap").fadeOut();
    $(".mdepth2").stop().slideUp();
    $(".mgnb > li").removeClass("active");
  });

  // 와 이거 찾는데 2시간 씀 와
  $(".mgnb > li").click(function () {
    $(this).find(".mdepth2").stop().slideToggle();
    $(this).toggleClass("active");
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