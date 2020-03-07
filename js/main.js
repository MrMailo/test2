/*Экран Загрузки*/
    $(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});
/*Экран Загрузки*/
 
$(document).ready(function(){

/*НАВЕРХ*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
/*НАВЕРХ*/

/*SCROLL-MENU-HEADER
jQuery(function($) {
   $(window).scroll(function(){
       if($(this).scrollTop()>0){
           $('.header__menu').addClass('fixed');
       }
       else if ($(this).scrollTop()<0){
           $('.header__menu').removeClass('fixed');
       }
   });
});
/*SCROLL-MENU-HEADER*/

/*SCROLL*/
$("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

$(".footer__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
/*SCROLL*/    
});