window.addEventListener('scroll', function () {
  let tou = document.querySelector('.q-header');
  tou.classList.toggle("q-header-change", window.scrollY > 0);
})

jQuery('.single-item').slick({
  dots: true,
  arrows: false,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 10000
});

jQuery("#changeLang").mouseover(function () {
  const ul = document.querySelector('#changeLangUl');
  if (ul) {
    jQuery("#changeLangBox").children().show();
  } else {
    jQuery("#changeLangBox").append('<ul id="changeLangUl"><li id="en"><span>English</span></li><li id="zh"><span>Chinese</span></li></ul>');
    jQuery("#changeLangBox ul li").click(function () {
      console.log(jQuery(this).attr('id'))
    })
  }
});
jQuery("#changeLang").mouseout(function () {
  jQuery("#changeLangBox").children().hide();
});
jQuery("#changeLangBox").mouseover(function () {
  jQuery("#changeLangBox").children().show();
});
jQuery("#changeLangBox").mouseout(function () {
  jQuery("#changeLangBox").children().hide();
});
let a = true
jQuery('.head-toggle').click(function () {
  console.log("aaaa", a)
  if (!a) {
    jQuery('.section-item').css({ "marginTop": "0" })
    jQuery('.head-menu-s').css({ "display": "none", "positon": "static" })
    jQuery('.main').css({ "display": "none" })
    a = true
  }
  else {
    jQuery('.head-menu-s').css({ "display": "block", "position": "fixed", "top": "4em", "width": "100%" })
    jQuery('.section-item').css({ "marginTop": "180px" })
    jQuery('.main').css({ "display": "flex" })


    a = false
  }
})

