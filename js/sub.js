$(function () {

  //sub-visual
  $(".lnb_area > li ol").hide();
  $(".lnb_area > li").click(function () {
    $(this).find("ol").stop().slideToggle(200);
  });

  //howto-btn(tab-menu)
  $(".traffic_list ul").not(":first").hide();
  $(".btn_list button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $(".traffic_list ul").eq(num).show().siblings().hide();
  });
});