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
let isRequest = false
jQuery("#requestShow").click(function () {
  if (!isRequest) {
    jQuery(".index-iframe").css({ "visibility": "visible" })
    isRequest = true;
  } else {
    jQuery(".index-iframe").css({ "visibility": "hidden" })
    isRequest = false
  }

})
jQuery("#changeLang").mouseover(function () {
  const ul = document.querySelector('#changeLangUl');
  if (ul) {
    jQuery("#changeLangBox").children().show();
  } else {
    jQuery("#changeLangBox").append('<ul id="changeLangUl"><li id="en"><span>English</span></li><li id="zh"><span>Chinese</span></li></ul>');
    jQuery("#changeLangBox ul li").click(function () {
      window.location.pathname = `en${window.location.pathname}`
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
let isExtend = true
jQuery('.head-toggle').click(function () {
  console.log("aaaa", a)
  if (!a) {
    jQuery('.q-main').css({ "marginTop": "0" })
    jQuery('.main').css({ "display": "none" })
    a = true
  }
  else {

    jQuery('.q-main').css({ "marginTop": "12em" })
    jQuery('.main').css({ "display": "flex" })
    a = false
  }
})
//监听窗口大小变化
jQuery(window).resize(function () {
  // if (jQuery(window).width() > 900) {
  jQuery('.q-main').css({ "marginTop": "0" })
  jQuery('.main').css({ "display": "none" })
  a = true

  // }
  //监听首页移动端
  // else {
  //   a = true
  //   jQuery('.q-main').css({ "marginTop": "0" })
  //   jQuery('.main').css({ "display": "none" })
  //   console.log("屏幕缩小")
  // jQuery('.q-main').css({ "marginTop": "12em" })
  // jQuery('.main').css({ "display": "flex" })
  // if (!a && !isExtend) {
  //   console.log("收起")
  //   jQuery('.q-main').css({ "marginTop": "0" })
  //   a = true
  // }
  // else if (isExtend) {
  //   console.log("伸展")

  //   jQuery('.q-main').css({ "marginTop": "12em" })
  //   a = false
  // }

  // }
})