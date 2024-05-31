
//Modal

const MODAL = document.getElementById("myModal")
const MODAL_CAT = document.getElementById("modalCat")
const MODAL_JAUGE = document.getElementById("modalJauge")
const MODAL_TOOL = document.getElementById("modalTool")




const WELCOME = document.getElementById("welcome")
const CAT = document.getElementById("presentCat")
const JAUGE = document.getElementById("presentJauge")
const EVENT_PRESENT = document.getElementById("presentEvent")
const TOOL = document.getElementById("presentTool")
const START = document.getElementById("play")
const END = document.getElementById("endGame")
const CAT_IMAGE = document.getElementById("box")
const JAUGE_IMAGE = document.getElementById("jaugeContainer")
const EVENT_IMAGE = document.getElementById("imgEvent")
const TOOL_BOX_IMAGE = document.getElementById("toolBox")


const WELCOME_BTN = document.getElementById("welcomeBtn")
const CAT_BTN = document.getElementById("catBtn")
const JAUGE_BTN = document.getElementById("jaugeBtn")
const EVENT_BTN = document.getElementById("eventBtn")
const TOOL_BTN = document.getElementById("toolBtn")
const START_BTN = document.getElementById("startBtn")



WELCOME_BTN.addEventListener("click", () => {
    WELCOME.style.display = "none"
    CAT.style.display = "block"
    CAT_IMAGE.style.zIndex = 1


})

CAT_BTN.addEventListener("click", () => {
    CAT.style.display = "none"
    JAUGE.style.display = "block"
    CAT_IMAGE.style.zIndex = 0
    JAUGE_IMAGE.style.zIndex = 1
    

})

JAUGE_BTN.addEventListener("click", () => {   
    JAUGE.style.display = "none"
    EVENT_PRESENT.style.display = "block"
    JAUGE_IMAGE.style.zIndex = 0
    EVENT_IMAGE.style.zIndex = 1
    
})

EVENT_BTN.addEventListener("click", () => {
    EVENT_PRESENT.style.display = "none"
    TOOL.style.display = "block"
    TOOL_BOX_IMAGE.style.zIndex = 1
    EVENT_IMAGE.style.zIndex = 0

})

TOOL_BTN.addEventListener("click", () => {
    TOOL.style.display = "none"
    START.style.display = "block"
    TOOL_BOX_IMAGE.style.zIndex = 0
})

START_BTN.addEventListener("click", () => {

    START.style.display = "none"
    MODAL.style.display = "none"

})

// window.addEventListener ("click",  () => {
   
//       MODAL.style.display = "none";
//     }
  

// )











//Jauges

const FOOD_BAR = document.getElementById("foodJauge")
const CLEAN_BAR = document.getElementById("cleanJauge")
const PET_BAR = document.getElementById("petJauge")
const PLAY_BAR = document.getElementById("playJauge")
const FOOD_BTN = document.getElementById("foodBtn")
const CLEAN_BTN = document.getElementById("cleanBtn")
const PET_BTN = document.getElementById("petBtn")
const PLAY_BTN = document.getElementById("playBtn")


let imgEventArray = ["../images/bol.png" , "/./images/poop.png" , "../images/pet.png" , "../images/play.png" ]
const HAPPY_IMG = document.getElementById("happy")
const SAD_IMG = document.getElementById("sad")
let imgEvent = document.getElementById("event")



let food = 0
let clean = 0
let pet = 0
let play = 0


let widthFood = 0
let widthClean = 0
let widthPet = 0
let widthPlay = 0

let isFoodFull = false
let isCleanFull = false
let isPetFull = false
let isPlayFull = false

let isToolFoodUsed = false
let isToolCleanUsed = false
let isToolPetUsed = false
let isToolPlayUsed = false
let currentIndex = 0




function moveFood() {
    if (food == 0 && isFoodFull === false) {
        let food = 20
        widthFood += food
        widthFood = Math.min(widthFood, 100);
        if (widthFood >= 100) {
            isFoodFull = true
           
           
        }
        FOOD_BAR.style.width = widthFood + "%"
    }
    

}

function moveClean() {
    if (clean == 0 && isCleanFull === false) {
        let clean = 20;
        widthClean += clean;
        widthClean = Math.min(widthClean, 100)
        if (widthClean >= 100) {
            isCleanFull = true
            
            
        }
        CLEAN_BAR.style.width = widthClean + "%";
    }

}


function movePet() {
    if (pet == 0 && isPetFull === false) {
        let pet = 20;
        widthPet += pet;
        widthPet = Math.min(widthPet, 100)
        if (widthPet >= 100) {
            isPetFull = true
            
            
        }
        PET_BAR.style.width = widthPet + "%";
    }

}

function movePlay() {
    if (play == 0 && isPlayFull === false) {
        let play = 20
        widthPlay += play
        widthPlay = Math.min(widthPlay, 100);
        if (widthPlay >= 100) {
            isPlayFull = true
           
        }
        PLAY_BAR.style.width = widthPlay + "%"
    }
}


FOOD_BTN.addEventListener("click", () => {
    isToolFoodUsed = true
    if (currentIndex === 0 ) {
        if (isToolFoodUsed === true) {
            HAPPY_IMG.style.display = "block"
            SAD_IMG.style.display = "none"
            moveFood()
            imgEvent.src = imgEventArray[currentIndex+1]
            currentIndex++
            isToolFoodUsed = false
           
           
           
        }

    }else{
        SAD_IMG.style.display = "block"
        HAPPY_IMG.style.display = "none"
        isToolFoodUsed = false
        


    }
    
    if(isFoodFull){
        endGame()
    }

}
)

CLEAN_BTN.addEventListener("click", () => {
    
    isToolCleanUsed = true
    if (currentIndex === 1 ) {
        if (isToolCleanUsed === true) {
            HAPPY_IMG.style.display = "block"
            SAD_IMG.style.display = "none"
            isToolCleanUsed = false
            moveClean()
            imgEvent.src = imgEventArray[currentIndex+1]
            currentIndex++
            
          
        }

    }else{
        SAD_IMG.style.display = "block"
        HAPPY_IMG.style.display = "none"
        isToolCleanUsed = false
        


    }

    if(isCleanFull){
        endGame()
    }

})

PET_BTN.addEventListener("click", () => {
    isToolPetUsed = true
    if (currentIndex === 2 ) {
        if (isToolPetUsed === true) {
            HAPPY_IMG.style.display = "block"
            SAD_IMG.style.display = "none"
            isToolPetUsed = false
            movePet()
            imgEvent.src = imgEventArray[currentIndex+1]
            currentIndex++
          
            
        }

    }else{
        SAD_IMG.style.display = "block"
        HAPPY_IMG.style.display = "none"
        isToolPetUsed = false
        


    }

    if(isPetFull){
        endGame()
    }

})



PLAY_BTN.addEventListener("click", () => {
    isToolPlayUsed = true
    if (currentIndex === 3 ) {
        if (isToolPlayUsed === true) {
            HAPPY_IMG.style.display = "block"
            SAD_IMG.style.display = "none"
            isToolPlayUsed = false
            movePlay()
            imgEvent.src = imgEventArray[0]
            currentIndex = 0
            
            
            
            
            
            
        }

    }else{
        SAD_IMG.style.display = "block"
        HAPPY_IMG.style.display = "none"
        isToolPlayUsed = false
    

    }

    if(isPlayFull){
        endGame()
    }

})



// Jeu





const KITTEN_IMG = document.getElementById("kitten")


if(localStorage.getItem("Oliver") !== null) {
    
    KITTEN_IMG.src = "../images/siamois.png";
}

if(localStorage.getItem("Patrick") !== null) {
    
    KITTEN_IMG.src = "../images/chatonTigre.png";
}
if(localStorage.getItem("Edward") !== null) {
    
    KITTEN_IMG.src = "../images/bobcat.png";
}

function endGame(){
    if(isFoodFull && isCleanFull && isPetFull && isPlayFull){
        START.style.display = "none"
        MODAL.style.display ="block"
        END.style.display = "block"
        if(KITTEN_IMG.getAttribute("src") === "../images/kitten.png"){
            localStorage.setItem("Oliver", "../images/kitten.png" )


        }
        if(KITTEN_IMG.getAttribute("src") === "../images/siamois.png"){
            
            localStorage.setItem("Patrick", "../images/siamois.png")
              
        }
        if(KITTEN_IMG.getAttribute("src") === "../images/chatonTigre.png"){
           
            localStorage.setItem("Edward", "../images/chatonTigre.png")
              
        }
        if(KITTEN_IMG.getAttribute("src") === "../images/bobcat.png"){
           
            localStorage.setItem("Bob", "../images/bobcat.png")
              
        }
    
       
        

    }
}