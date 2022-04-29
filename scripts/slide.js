let time = 5000; //--> Tempo de transição das imagens em milisegundos
//-> Imagens grandes e pequenas
const bigImage = document.getElementsByClassName("big-image")
const numberOfBigImages = bigImage.length
let currentBigImageIndex = 0

const smallImage = document.getElementsByClassName("small-image")
const numberOfSmallImages = smallImage.length
let currentSmallImageIndex = 0

const selectedImage = document.getElementById("selected");

function nextImage(){
        if(window.innerWidth > 450){
            smallImage[currentSmallImageIndex].classList.remove("selected")
            bigImage[currentBigImageIndex].classList.remove("selected")
            currentBigImageIndex++
            
            if(currentBigImageIndex >= numberOfBigImages){
                currentBigImageIndex = 0
            }
            bigImage[currentBigImageIndex].classList.add("selected")
        }
        else{
            smallImage[currentSmallImageIndex].classList.remove("selected")
            currentSmallImageIndex++
            if(currentSmallImageIndex >= numberOfSmallImages){
                currentSmallImageIndex = 0
            }
            smallImage[currentSmallImageIndex].classList.add("selected")
        }
}

function resize(){
    if(window.innerWidth > 450){
        smallImage[0].classList.remove('selected')
        bigImage[0].classList.add('selected')
    } else{
        bigImage[0].classList.remove('selected')
        smallImage[0].classList.add('selected')
    }
}

function start(){
    if(window.innerWidth > 450){
        bigImage[0].classList.add('selected')
    } else{
        smallImage[0].classList.add('selected')
    }
    setInterval(()=>{
        nextImage()
    }, time)
}
    window.addEventListener('resize', resize)
    window.addEventListener("load", start)

    