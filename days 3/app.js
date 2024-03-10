// document.querySelector('.open-modal-btn').addEventListener("click", function(event){
//     console.log(event);
//     document.querySelector('.modal').style.display = 'initial'
// })

$(document).ready(function(){
    var modalOpen = $(".open-modal-btn");
    var modalClode = $(".model__footer button");
    var modalIcon = $(".modal__header i");
    var modal = $(".modal");

    modalOpen.on("click",toggleModal);
    modalClode.on("click",toggleModal);
    modalIcon.on("click",toggleModal);
    modal.on("click",function(e){
        console.log(e);
        if(e.target == e.currentTarget){
            $(".modal").toggle();
        }
    });

    function toggleModal(){
        $(".modal").toggle();
    }
});