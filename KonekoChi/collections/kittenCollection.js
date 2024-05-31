const OLIVER_BTN = document.getElementById("oliver")
const PATRICK_BTN = document.getElementById("patrick")
const EDWARD_BTN = document.getElementById("edward")
const BOB_BTN = document.getElementById("bob")

const MODAL_GEN = document.getElementById("modal")
const MODAL_OLIVER = document.getElementById("modalOliver")
const MODAL_PATRICK = document.getElementById("modalPatrick")
const MODAL_EDWARD = document.getElementById("modalEdward")
const MODAL_BOB = document.getElementById("modalBob")


const OLIVER_CLOSE_BTN = document.getElementById("closeOliver")
const PATRICK_CLOSE_BTN = document.getElementById("closePatrick")
const EDWARD_CLOSE_BTN = document.getElementById("closeEdward")
const BOB_CLOSE_BTN = document.getElementById("closeBob")


const PRESENT_BOXES = document.getElementById("presentBoxes")


if(localStorage.getItem("Oliver") == null ){
    OLIVER_BTN.style.display = "none"
    PATRICK_BTN.style.display = "none"
    EDWARD_BTN.style.display = "none"
    BOB_BTN.style.display = "none"
    PRESENT_BOXES.style.justifyContent = "center"
}



if(localStorage.getItem("Patrick") == null ){
    OLIVER_BTN.style.display = "block"
    PATRICK_BTN.style.display = "none"
    EDWARD_BTN.style.display = "none"
    BOB_BTN.style.display = "none"
    PRESENT_BOXES.style.justifyContent = "center"
}


if(localStorage.getItem("Patrick") !== null ){
    
    PATRICK_BTN.style.display = "block"
    EDWARD_BTN.style.display = "none"
    BOB_BTN.style.display = "none"
    PRESENT_BOXES.style.justifyContent = "space-evenly"
}


if(localStorage.getItem("Edward") !== null ){
    
    EDWARD_BTN.style.display = "block"
    BOB_BTN.style.display = "none"
    
}

if(localStorage.getItem("Bob") !== null){
    
    BOB_BTN.style.display = "block"
    
}











OLIVER_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "block"
    MODAL_OLIVER.style.display = "flex"
    MODAL_PATRICK.style.display = "none"
    MODAL_EDWARD.style.display = "none"
    MODAL_BOB.style.display = "none"

})

PATRICK_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "block"
    MODAL_OLIVER.style.display = "none"
    MODAL_PATRICK.style.display = "flex"
    MODAL_EDWARD.style.display = "none"
    MODAL_BOB.style.display = "none"

})
EDWARD_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "block"
    MODAL_OLIVER.style.display = "none"
    MODAL_PATRICK.style.display = "none"
    MODAL_EDWARD.style.display = "flex"
    MODAL_BOB.style.display = "none"

})
BOB_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "block"
    MODAL_OLIVER.style.display = "none"
    MODAL_PATRICK.style.display = "none"
    MODAL_EDWARD.style.display = "none"
    MODAL_BOB.style.display = "flex"

})
















OLIVER_CLOSE_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "none"
    MODAL_OLIVER.style.display = "none"

})

PATRICK_CLOSE_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "none"
    MODAL_PATRICK.style.display = "none"

})

EDWARD_CLOSE_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "none"
    MODAL_EDWARD.style.display = "none"

})

BOB_CLOSE_BTN.addEventListener("click", () => {
    MODAL_GEN.style.display = "none"
    MODAL_BOB.style.display = "none"

})