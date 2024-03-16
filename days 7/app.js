$(document).ready(function () {
    $(".wrapper__content li").find("i").on("click", removeTag);

    $(".wrapper__footer button").on("click", function (e) {
        $(this).parent().siblings(".wrapper__content").find("li").remove();
    });

    $(".wrapper__content input").on("keypress", function (e) {
        let value = $(this).val();
        if(checkValueExist(value) > -1){
            alert("Value is exist search tags");
        }
        else if (e.keyCode == 13 && value.length > 0) {
            $(this).val("");
            $('<li>' + value + `<i class="fa-solid fa-xmark"></i></li>`).insertBefore($(this));
            $(".wrapper__content li").find("i").on("click", removeTag);
        }
    });

    function removeTag(){
        $(this).parent().remove();
    };

    function checkValueExist(value){
        let data = $(".wrapper__content li").map(function(){
            return $.trim($(this).text())
        });
        return $.inArray(value, data);
    }

});