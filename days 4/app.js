$(document).ready(function(){
    $(".item img").on("mouseenter", function(e){
        $(this).addClass("img-zoo");
    });
    $(".item img").on("mouseleave", function(e){
        $(this).removeClass("img-zoo",{duration: 50000});
    });
});
