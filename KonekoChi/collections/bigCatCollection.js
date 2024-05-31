const LEO_BTN = document.getElementById("leo")
const GERARD_BTN = document.getElementById("gerard")
const TOM_BTN = document.getElementById("tom")
const NALA_BTN = document.getElementById("nala")

const MODAL_GEN = document.getElementById("modal")
const MODAL_LEO = document.getElementById("modalLeo")
const MODAL_GERARD = document.getElementById("modalGerard")
const MODAL_TOM = document.getElementById("modalTom")
const MODAL_NALA = document.getElementById("modalNala")


const LEO_CLOSE_BTN = document.getElementById("closeLeo")
const GERARD_CLOSE_BTN = document.getElementById("closeGerard")
const TOM_CLOSE_BTN = document.getElementById("closeTom")
const NALA_CLOSE_BTN = document.getElementById("closeNala")


const PRESENT_BOXES = document.getElementById("presentBoxes")


if(localStorage.getItem("Leo") == null ){
    LEO_BTN.style.display = "none"
    GERARD_BTN.style.display = "none"
    TOM_BTN.style.display = "none"
    NALA_BTN.style.display = "none"
    PRESENT_BOXES.style.justifyContent = "center"
}



if(localStorage.getItem("Leo") !== null ){
    LEO_BTN.style.display = "block"
    GERARD_BTN.style.display = "none"
    TOM_BTN.style.display = "none"
    NALA_BTN.style.display = "none"
    PRESENT_BOXES.style.justifyContent = "center"
}


if(localStorage.getItem("Gerard") !== null ){
    
    GERARD_BTN.style.display = "block"
    TOM_BTN.style.display = "none"
    NALA_BTN.style.display = "none"
    PRESENT_BOXES.style.justifyContent = "space-evenly"
}


if(localStorage.getItem("Tom") !== null ){
    
    TOM_BTN.style.display = "block"
    NALA_BTN.style.display = "none"
    
}

if(localStorage.getItem("Nala") !== null){
    
    NALA_BTN.style.display = "block"
    
}











LEO_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "block"
    MODAL_LEO.style.display = "flex"
    MODAL_GERARD.style.display = "none"
    MODAL_TOM.style.display = "none"
    MODAL_NALA.style.display = "none"

})

GERARD_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "block"
    MODAL_LEO.style.display = "none"
    MODAL_GERARD.style.display = "flex"
    MODAL_TOM.style.display = "none"
    MODAL_NALA.style.display = "none"

})
TOM_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "block"
    MODAL_LEO.style.display = "none"
    MODAL_GERARD.style.display = "none"
    MODAL_TOM.style.display = "flex"
    MODAL_NALA.style.display = "none"

})
NALA_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "block"
    MODAL_LEO.style.display = "none"
    MODAL_GERARD.style.display = "none"
    MODAL_TOM.style.display = "none"
    MODAL_NALA.style.display = "flex"

})
















LEO_CLOSE_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "none"
    MODAL_LEO.style.display = "none"

})

GERARD_CLOSE_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "none"
    MODAL_GERARD.style.display = "none"

})

TOM_CLOSE_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "none"
    MODAL_TOM.style.display = "none"

})

NALA_CLOSE_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "none"
    MODAL_NALA.style.display = "none"

})