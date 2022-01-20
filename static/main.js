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
    jQuery("#changeLangBox").append('<ul id="changeLangUl"><li><span>🇺🇸英文</span></li><li><span>🇺🇸马来西亚</span></li></ul>');
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
