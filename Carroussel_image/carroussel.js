let monTableau =[2,6,12]
let monTableauVide = []
monTableau.push(98) //permet d'insérer d'office la valeur à la fin du tableau
monTableau.splice(2,1) //pour retirer un élément du tableau (l'index à partir duquel on veut supprimer, le nombre d'élément à supprimer)
const DOTS = document.getElementsByClassName("dot")

let mesImages = ["./images/hibou1.avif","./images/hibou2.avif","./images/hibou3.avif","./images/hibou4.avif"]

let currentIndex = 0

const IMG_CAROUSEL = document.getElementById("img")
const PREV = document.getElementById("previous")
const NEXT = document.getElementById("next")

NEXT.addEventListener("click", () => {
    DOTS[currentIndex].classList.remove("active")
    currentIndex++
    if(currentIndex === mesImages.length){
        currentIndex = 0
    }
    IMG_CAROUSEL.src =mesImages[currentIndex]
    DOTS[currentIndex].classList.add("active")
})

PREV.addEventListener("click", () => {
    DOTS[currentIndex].classList.remove("active")
    currentIndex--
    if(currentIndex === -1){
        currentIndex = mesImages.length -1
    }
    IMG_CAROUSEL.src = mesImages[currentIndex]
    DOTS[currentIndex].classList.add("active")
})

