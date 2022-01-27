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
jQuery("#iframeXButton").click(function () {
  if (!isRequest) {
    jQuery(".index-iframe").css({ "visibility": "visible" })
    isRequest = true;
  } else {
    jQuery(".index-iframe").css({ "visibility": "hidden" })
    isRequest = false
  }
})

let first = true;
if (first && !window.location.pathname.includes('en')) {
  console.log("fff")
  first = false
  jQuery("#changeLangActive").append('<img alt = "China" width="20%" src = "http://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg" /><span>Chinese</span><img style="width: 10%; margin-left: 15%;" src="/static/images/changeLanIcon.svg"/>');
}
jQuery("#changeLang").mouseover(function () {
  const ul = document.querySelector('#changeLangUl');
  // if (ul) {
  jQuery("#changeLangBox").children().show();
  // } else {
  // jQuery("#changeLangBox").append('');empty()
  jQuery("#en").click(function () {
    jQuery("#en").css({ "background-color": "#3f4042" })
    jQuery("#changeLangBox #en span").css({ "color": "#fff" })
    jQuery("#zh").css({ "background-color": "#292a2d" })
    jQuery("#changeLangActive").empty()
    console.log("#changeLangActive", jQuery("#changeLangActive"))
    jQuery("#changeLangActive").append('<img alt = "US" width="20%" src = "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" /><span style="color: #fff;">English</span><img style = "width: 10%; margin-left: 19%;" src = "/static/images/changeLanIcon.svg" />');
    if (!window.location.pathname.includes('en')) window.location.pathname = `en${window.location.pathname}`
    else window.location.pathname = `${window.location.pathname}`
  })
  jQuery("#zh").click(function () {
    jQuery("#zh").css({ "background-color": "#3f4042" })
    jQuery("#changeLangBox #zh span").css({ "color": "#fff" })
    jQuery("#en").css({ "background-color": "#292a2d" })
    jQuery("#changeLangActive").empty()
    jQuery("#changeLangActive").append('<img alt = "China" width="20%" src = "http://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg" /><span>Chinese</span><img style="width: 10%; margin-left: 15%;" src="/static/images/changeLanIcon.svg"/>');
    if (!window.location.pathname.includes('en')) window.location.pathname = `${window.location.pathname}`
    else window.location.pathname = `${window.location.pathname.split('en').join()}`
  })
  // }
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
})