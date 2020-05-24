
// function linkToPage(page) {
//   window.location.href = page;
// };



// NOT WORKING
$(window).scroll(function(){
  // const upArrow = document.getElementById("upArrow");
  // const downArrow = document.getElementById("downArrow");
  // upArrow.style.opacity = 1 - $(window).scrollTop() / 250;
  // upArrow.style.opacity = 1 - $(window).scrollTop / 250;
  // downArrow.style.opacity = 0 + $(window).scrollTop() / 250;
  // downArrow.style.opacity = 0 + $(window).scrollTop / 250;
  // $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
  // $("#home-container > *").css("opacity", 1 - $(window).scrollTop() / 400); 
  // $("#about-container > *").css("opacity", 0 + $(window).scrollTop() / 400); 

//250 is fade pixels
});


// these functions provice scroll to element support to the up and down arrows on the index page
// these were used due to the simplicity of achieving this goal
function scrollToAbout() {
  const element = document.getElementById("about-container");
  element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function scrollToTop() {
  const element = document.getElementById("home-container");
  element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}


