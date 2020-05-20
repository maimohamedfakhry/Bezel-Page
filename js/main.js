var mkanelabout = $("#about").offset().top;
var navhight = $("nav").outerHeight(true);
$(window).scroll(function () {
  if ($(window).scrollTop() > mkanelabout - navhight) {
    $("nav").addClass("tariq");
    $(".MYBTN").fadeIn(1000);
  } else {
    $("nav").removeClass("tariq");
    $(".MYBTN").fadeOut(1000);
  }
});
$(".nav-link").click(function () {
  var sectionID = $(this).attr("href");
  var sectionplace = $(sectionID).offset().top;
  $("html,body").animate({ scrollTop: sectionplace }, 1000);
});
$(".MYBTN").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1000);
});
