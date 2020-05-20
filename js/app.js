
// function linkToPage(page) {
//   window.location.href = page;
// };


$(window).scroll(function(){
  $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
//250 is fade pixels
});

const btnScrollToAbout = document.querySelector("#scroll-to-about");
btnScrollToAbout.addEventListener("click", function() {
  // $("html, body").animate({scrollTop: 0, "slow"});
  $("#about-container").show();
  // $("#home-container").hide();

  $(window).scrollTop($('#about-container').offset().top);
});