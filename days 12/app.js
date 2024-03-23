var btnSuccess = document.querySelector(".control .success");
var btnWarning = document.querySelector(".control .warning");
var btnError = document.querySelector(".control .error");

btnSuccess.addEventListener("click", function () {
    createToast("success", "This is a Success Message");
});

btnWarning.addEventListener("click", function () {
    createToast("warning", "This is a Warning Message");
});

btnError.addEventListener("click", function () {
    createToast("error", "This is a Error Message");
});

function createToast(status, text) {
    let innerTemplte = `<i class="fa-solid fa-circle-check"></i>
    <span>${text}</span>
    <div class="timeline"></div>`;
    let classStatus = "toast--success";
    switch (status) {
        case "success":
            innerTemplte = `<i class="fa-solid fa-circle-check"></i>
            <span>${text}</span>
            <div class="timeline"></div>`;
            classStatus = "toast--success";
            break;
        case "warning":
            innerTemplte = `<i class="fa-solid fa-triangle-exclamation"></i>
            <span>${text}</span>
            <div class="timeline"></div>`;
            classStatus = "toast--warning";
            break;
        case "error":
            innerTemplte = `<i class="fa-solid fa-bug"></i>
            <span>${text}</span>
            <div class="timeline"></div>`;
            classStatus = "toast--error";
            break;
    }
    let toast = document.createElement("div");
    toast.classList.add("toast", classStatus);
    toast.innerHTML = innerTemplte;
    let toasts = document.querySelector(".control .toasts")
    toasts.appendChild(toast);

    setTimeout(function(){
        toast.style.animation = "slidehide 2s ease forwards";
    }, 4000)

    setTimeout(function(){
        toast.remove();
    }, 6000)

}
