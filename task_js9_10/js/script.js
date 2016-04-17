$(function() {
    $('.dropdown').hover(function(){
        $(this).children('.sub-menu').stop(true,false).slideDown(400);
    }, function(){
        $(this).children('.sub-menu').stop(true,false).slideUp(400);
    });

    $('.dropdown ul li').hover(function(){
        $(this).animate({backgroundColor:"#cc00ff",}, 400 );
    }, function(){
        $(this).animate({backgroundColor:"#E14B4B",}, 400 );
    });
});
