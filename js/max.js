$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
$(document).ready(function () {
    $(".dangky").click(function () {
        $('html, body').animate({
            scrollTop: $(".fx8").offset().top
        }, 2000);
    });
     $(".dangky").click(function() {
        $(this).addClass("final");
    }) 
});
