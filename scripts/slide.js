let time = 2000; //--> Tempo de transição das imagens em milisegundos
let currentImageIndex = 0;
const images = document.querySelectorAll(".slider img");
const numberOfImages = images.length;

const selectedImage = document.getElementById("selected");

function nextImage(){

    images[currentImageIndex].classList.remove("selected")
    currentImageIndex++
    if(currentImageIndex >= numberOfImages){
        currentImageIndex = 0
    }

    images[currentImageIndex].classList.add("selected")
}

function start(){
    setInterval(()=>{
        nextImage()
    }, time)
}

window.addEventListener("load", start)