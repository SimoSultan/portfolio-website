
// function linkToPage(page) {
//   window.location.href = page;
// };


$(window).scroll(function(){
  $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
  $("#home-container > *").css("opacity", 1 - $(window).scrollTop() / 600); 
  $("#about-container > *").css("opacity", 0 + $(window).scrollTop() / 600); 

//250 is fade pixels
});

function scrollToAbout() {
  $('#scroll-to-about').on('click', function(e) {
    e.preventDefault();
    $ ('html, body').animate({ scrollTop: $('#about-container').offset().top}, 700, 'swing');
    // $("#home-container > *").animate({opacity: 0}, 600);
    // $("#about-container > *").animate({opacity: 1}, 600)
  });
}

// function goToTopPage() {
//   $('#scroll-to-top').on('click', function(e) {
//   // $('#scroll-to-top').on('click', function() {
//     e.preventDefault();
//     $ ('html, body').animate({ scrollTop: 0}, 500, 'linear');
//     $("#about-container > *").animate({opacity: 0}, 600);
//     $("#home-container > *").animate({opacity: 1}, 600)
//   });
// }


