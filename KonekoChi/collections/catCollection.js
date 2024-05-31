const CARAMEL_BTN = document.getElementById("caramel")
const MISO_BTN = document.getElementById("miso")
const ZUNNY_BTN = document.getElementById("zunny")
const CHONKER_BTN = document.getElementById("chonker")

const MODAL_GEN = document.getElementById("modal")
const MODAL_CARAMEL = document.getElementById("modalCaramel")
const MODAL_MISO = document.getElementById("modalMiso")
const MODAL_ZUNNY = document.getElementById("modalZunny")
const MODAL_CHONKER = document.getElementById("modalChonker")


const CARAMEL_CLOSE_BTN = document.getElementById("closeCaramel")
const MISO_CLOSE_BTN = document.getElementById("closeMiso")
const ZUNNY_CLOSE_BTN = document.getElementById("closeZunny")
const CHONKER_CLOSE_BTN = document.getElementById("closeChonker")


const PRESENT_BOXES = document.getElementById("presentBoxes")


if(localStorage.getItem("Caramel") == null ){
    CARAMEL_BTN.style.display = "none"
    MISO_BTN.style.display = "none"
    ZUNNY_BTN.style.display = "none"
    CHONKER_BTN.style.display = "none"
    PRESENT_BOXES.style.justifyContent = "center"
}



if(localStorage.getItem("Caramel") !== null ){
    CARAMEL_BTN.style.display = "block"
    MISO_BTN.style.display = "none"
    ZUNNY_BTN.style.display = "none"
    CHONKER_BTN.style.display = "none"
    PRESENT_BOXES.style.justifyContent = "center"
}


if(localStorage.getItem("Miso") !== null ){
    
    MISO_BTN.style.display = "block"
    ZUNNY_BTN.style.display = "none"
    CHONKER_BTN.style.display = "none"
    PRESENT_BOXES.style.justifyContent = "space-evenly"
}


if(localStorage.getItem("Zunny") !== null ){
    
    ZUNNY_BTN.style.display = "block"
    CHONKER_BTN.style.display = "none"
    
}

if(localStorage.getItem("Chonker") !== null){
    
    CHONKER_BTN.style.display = "block"
    
}











CARAMEL_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "block"
    MODAL_CARAMEL.style.display = "flex"
    MODAL_MISO.style.display = "none"
    MODAL_ZUNNY.style.display = "none"
    MODAL_CHONKER.style.display = "none"

})

MISO_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "block"
    MODAL_CARAMEL.style.display = "none"
    MODAL_MISO.style.display = "flex"
    MODAL_ZUNNY.style.display = "none"
    MODAL_CHONKER.style.display = "none"

})
ZUNNY_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "block"
    MODAL_CARAMEL.style.display = "none"
    MODAL_MISO.style.display = "none"
    MODAL_ZUNNY.style.display = "flex"
    MODAL_CHONKER.style.display = "none"

})
CHONKER_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "block"
    MODAL_CARAMEL.style.display = "none"
    MODAL_MISO.style.display = "none"
    MODAL_ZUNNY.style.display = "none"
    MODAL_CHONKER.style.display = "flex"

})
















CARAMEL_CLOSE_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "none"
    MODAL_CARAMEL.style.display = "none"

})

MISO_CLOSE_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "none"
    MODAL_MISO.style.display = "none"

})

ZUNNY_CLOSE_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "none"
    MODAL_ZUNNY.style.display = "none"

})

CHONKER_CLOSE_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "none"
    MODAL_CHONKER.style.display = "none"

})