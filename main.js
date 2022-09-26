$(document).ready(function(){
    $(window).scroll(function(){
    });
    $('.menu-link').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-link i').toggleClass("active");
    });
});