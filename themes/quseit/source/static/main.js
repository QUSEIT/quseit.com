var header = document.querySelector(".q-header");
const $ = jQuery

document.querySelector(".head-toggle").onclick = function () {
  header.classList.toggle("active");
}

$(document).ready(function(){
  $('.your-class').slick({
      infinite = true,
      slidesToShow =  1,
      slidesToScroll = 1,
      autoplay = true,
      autoplaySpeed = 2000,
  }
  
    // infinite = true,
    // slidesToShow =  1,
    // slidesToScroll = 1,
    // autoplay = true,
    // autoplaySpeed = 2000,
  );
})