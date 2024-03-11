$(document).ready(function () {
    var currentIndex = 0;
    var len = $(".item img").length;

    function setGalleryImage(src) {
        $(".gallery__img img").fadeOut(200, function(){
            $(this).attr("src",src);
            $(this).fadeIn(500);
        });
    }

    function toggleGallery(show){
        if(show == true){
            $(".gallery").addClass("show");
        }else{
            $(".gallery").removeClass("show");
        }
    }

    function buttonGalleryImage(index){
       if(index <= 0){
        $(".gallery__prev").addClass("btn-hide");
       }
       else{
        $(".gallery__prev").removeClass("btn-hide");
       }

       if(index >= len -1){
        $(".gallery__next").addClass("btn-hide");
       }else{
        $(".gallery__next").removeClass("btn-hide");
       }
    }

    $(".item img").on("mouseenter", function (e) {
        $(this).addClass("img-zoo");
    }).on("mouseleave", function (e) {
        $(this).removeClass("img-zoo");
    }).on("click", function (e) {
        currentIndex = $(".item img").index(this);
        toggleGallery(true);
        setGalleryImage($(this).attr("src"));
    });

    $(".close").on("click", function () {
        toggleGallery(false);
    });

    $(".gallery__next").on("click", function () {
        currentIndex++;
       
        var src = $(".item img").eq(currentIndex).attr("src");
        setGalleryImage(src);
        buttonGalleryImage(currentIndex);
    });

    $(".gallery__prev").on("click", function () {
        currentIndex--;
        var src = $(".item img").eq(currentIndex).attr("src");
        setGalleryImage(src);
        buttonGalleryImage(currentIndex);
    });
});
