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