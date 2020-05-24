
// function linkToPage(page) {
//   window.location.href = page;
// };


$(window).scroll(function(){
  $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
  // $("#home-container > *").css("opacity", 1 - $(window).scrollTop() / 400); 
  // $("#about-container > *").css("opacity", 0 + $(window).scrollTop() / 400); 

//250 is fade pixels
});

function scrollToAbout() {
  var element = document.getElementById("about-container");
  element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function scrollToTop() {
  var element = document.getElementById("home-container");
  element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}


