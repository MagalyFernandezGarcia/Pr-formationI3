
const EASY_MODE_HOME = document.getElementById("easyMode")
const MEDIUM_MODE_HOME = document.getElementById("mediumMode")
const HARD_MODE_HOME = document.getElementById("hardMode")



if(localStorage.getItem("Oliver") !== null) {
    
    EASY_MODE_HOME.src = "../images/siamois.png";
}

if(localStorage.getItem("Patrick") !== null) {
    
    EASY_MODE_HOME.src = "../images/chatonTigre.png";
}
if(localStorage.getItem("Edward") !== null) {
    
    EASY_MODE_HOME.src = "../images/bobcat.png";
}


if(localStorage.getItem("Caramel") !== null) {
    
    MEDIUM_MODE_HOME.src = "../images/greyCat.png";
}

if(localStorage.getItem("Miso") !== null) {
    
    MEDIUM_MODE_HOME.src =  "../images/playfullCat.png";
}
if(localStorage.getItem("Zunny") !== null) {
    
    MEDIUM_MODE_HOME.src =  "../images/bigCat.png";
}


if(localStorage.getItem("Leo") !== null) {
    
    HARD_MODE_HOME.src = "../images/guepard.png";
}

if(localStorage.getItem("Gerard") !== null) {
    
    HARD_MODE_HOME.src =  "../images/tigre.png";
}
if(localStorage.getItem("Tom") !== null) {
    
    HARD_MODE_HOME.src =  "../images/puma.png";
}


const MODAL_HOME = document.getElementById("myModal");
const MODAL_FINAL_GAME = document.getElementById("modalFinalGame");
const MODAL_BOX = document.querySelectorAll(".box");



if (localStorage.getItem("Bob") !== null && localStorage.getItem("Chonker") !== null && localStorage.getItem("Nala") !== null) {
    
    MODAL_HOME.style.display = "block";
    MODAL_FINAL_GAME.style.display = "block";
    MODAL_BOX.forEach(box => {
        box.style.display = "none";
    });
}

const FINAL_END_BTN = document.getElementById("finalGame")



FINAL_END_BTN.addEventListener("click", () => {
    localStorage.clear()
    MODAL_HOME.style.display = "none";
    MODAL_FINAL_GAME.style.display = "none";
    MODAL_BOX.forEach(box => {
        box.style.display = "block";
    });
})