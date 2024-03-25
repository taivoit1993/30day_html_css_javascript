var uploadFile = document.querySelector("#uploadFile");
var upload = document.querySelector(".upload");

uploadFile.addEventListener("change", function(){
    previewFile(this.files[0])
})

function previewFile(file){
    let img = document.querySelector(".upload img") ?? document.createElement("img");
    if(file && validateFile(file)){
        img.src = URL.createObjectURL(file);
        upload.appendChild(img);
    } else{
        img.src = "";
    }
}

function validateFile(file){
    if(file){
        if(file.type.endsWith("jpeg")){
            return true;
        }
    }
    return false;
}