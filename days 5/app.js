
$(document).ready(function(){
    function toggleSearchBox(){
        $(this).parent().toggleClass('open');
        $(this).siblings('.search-box__input').focus()
    }

    var searchBoxButton = $('.search-box__btn');
    searchBoxButton.on('click', toggleSearchBox);
});