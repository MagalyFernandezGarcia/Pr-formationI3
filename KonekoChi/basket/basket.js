
const BASKET_BTN = document.getElementById("basketBtn")
const BASKET_IMG = document.getElementById("basketImg")
const KITTEN_COLLECTION = document.getElementById("kittenBox")
const CAT_COLLECTION = document.getElementById("catBox")
const BIG_CAT_COLLECTION = document.getElementById("bigCatBox")

const KITTEN_JAUGE = document.getElementById("kittenJauge")
const CAT_JAUGE = document.getElementById("catJauge")
const BIG_CAT_JAUGE = document.getElementById("bigCatJauge")


function animationCollection(){
    KITTEN_COLLECTION.style.display = "flex"
    CAT_COLLECTION.style.display = "flex"
    BIG_CAT_COLLECTION.style.display = "flex"
    KITTEN_COLLECTION.classList.add("animationKittenCollection")
    CAT_COLLECTION.classList.add("animationCatCollection")
    BIG_CAT_COLLECTION.classList.add("animationBigCatCollection")
}


BASKET_BTN.addEventListener("click", () => {
    BASKET_IMG.classList.add("animationBasket")
    
    setInterval(animationCollection, 500)


})



if(localStorage.getItem("Oliver") !== null){
    KITTEN_JAUGE.style.width = 25 + "%"

}
if(localStorage.getItem("Patrick") !== null){
    KITTEN_JAUGE.style.width = 50 + "%"

}
if(localStorage.getItem("Edward") !== null){
    KITTEN_JAUGE.style.width = 75 + "%"

}
if(localStorage.getItem("Bob") !== null){
    KITTEN_JAUGE.style.width = 100 + "%"

}




if(localStorage.getItem("Caramel") !== null){
    CAT_JAUGE.style.width = 25 + "%"

}
if(localStorage.getItem("Miso") !== null){
    CAT_JAUGE.style.width = 50 + "%"

}
if(localStorage.getItem("Zunny") !== null){
    CAT_JAUGE.style.width = 75 + "%"

}
if(localStorage.getItem("Chonker") !== null){
    CAT_JAUGE.style.width = 100 + "%"

}


if(localStorage.getItem("Leo") !== null){
    BIG_CAT_JAUGE.style.width = 25 + "%"

}
if(localStorage.getItem("Gerard") !== null){
    BIG_CAT_JAUGE.style.width = 50 + "%"

}
if(localStorage.getItem("Tom") !== null){
    BIG_CAT_JAUGE.style.width = 75 + "%"

}
if(localStorage.getItem("Nala") !== null){
    BIG_CAT_JAUGE.style.width = 100 + "%"

}




const MODAL_HOME = document.getElementById("myModal");
const MODAL_FINAL_GAME = document.getElementById("modalFinalGame");
const MODAL_BOX = document.querySelectorAll(".box");

if(localStorage.getItem("Bob") !== null && localStorage.getItem("Chonker") !== null && localStorage.getItem("Nala") !== null){
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
    KITTEN_JAUGE.style.width = 0  + "%"
    CAT_JAUGE.style.width = 0  + "%"
    BIG_CAT_JAUGE.style.width = 0  + "%"
})