$(document).ready(function () {
    $(document).on('keypress', function(e){
        console.log(e.originalEvent);
        var key = e.originalEvent.key;
        var location = e.originalEvent.location;
        var which = e.originalEvent.which;
        var code = e.originalEvent.code;
        $(".btn-press").addClass('hidden');
        $(".keypress-detect").removeClass("hidden");
        $('.key').text(key);
        $('.location').text(location);
        $('.which').text(which);
        $('.code').text(code);
    })    
});