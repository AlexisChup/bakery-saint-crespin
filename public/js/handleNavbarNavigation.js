$("#collapsibleNavId .nav-item").click(function(){
    $("#collapsibleNavId").find(".active").removeClass("active");
    $(this).addClass("active");
 });

$("#anchor-presenation").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 2000);
});

$("#anchor-services").click(function() {
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 2000);
});

$("#anchor-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
});