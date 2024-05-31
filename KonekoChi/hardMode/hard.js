
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
const LOST = document.getElementById("lostGame")


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

// window.addEventListener("click", () => {

//     MODAL.style.display = "none";
// }


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

let imgEventArray = ["../images/bol.png", "../images/poop.png", "../images/pet.png", "../images/play.png"]
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





function removeFood() {
    if (food == 0) {
        let food = 20
        widthFood -= food
        widthFood = Math.min(widthFood, 100);

        FOOD_BAR.style.width = widthFood + "%"
    }
}

function removeClean() {
    if (clean == 0) {
        let clean = 20;
        widthClean -= clean;
        widthClean = Math.min(widthClean, 100)

        CLEAN_BAR.style.width = widthClean + "%";
    }

}

function removePet() {
    if (pet == 0) {
        let pet = 20;
        widthPet -= pet;
        widthPet = Math.min(widthPet, 100)

        PET_BAR.style.width = widthPet + "%";
    }

}

function removePlay() {
    if (play == 0) {
        let play = 20
        widthPlay -= play
        widthPlay = Math.min(widthPlay, 100);

        PLAY_BAR.style.width = widthPlay + "%"
    }
}



function moveFood() {
    if (food == 0 && isFoodFull === false) {
        let food = 10
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
        let clean = 10;
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
        let pet = 10;
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
        let play = 10
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
    if (imgEvent.getAttribute("src") === imgEventArray[0]) {
        if (isToolFoodUsed === true) {
            HAPPY_IMG.style.display = "block"
            SAD_IMG.style.display = "none"
            moveFood()
            imgEvent.src = imgEventArray[1]
                      
            isToolFoodUsed = false


        }

    } else {
        HAPPY_IMG.style.display = "none"
        SAD_IMG.style.display = "block"
        isToolFoodUsed = false
        if (imgEvent.getAttribute("src") === imgEventArray[1]) {
            removeClean()
            imgEvent.src = imgEventArray[2]
            


        } else {
            if (imgEvent.getAttribute("src") === imgEventArray[2]) {
                removePet()
                imgEvent.src = imgEventArray[3]
                



            } else {
                if (imgEvent.getAttribute("src") === imgEventArray[3]) {
                    removePlay()
                    imgEvent.src = imgEventArray[0]
                    



                }
            }

            

        }
        

        if (isFoodFull) {
            endGame()
        }

    }

})

CLEAN_BTN.addEventListener("click", () => {
   
    
console.log(widthFood);
    isToolCleanUsed = true
    if (imgEvent.getAttribute("src") === imgEventArray[1]) {
        if (isToolCleanUsed === true) {
            HAPPY_IMG.style.display = "block"
            SAD_IMG.style.display = "none"
            isToolCleanUsed = false
            moveClean()
            imgEvent.src = imgEventArray[2]
            


        }

    } else {
        SAD_IMG.style.display = "block"
        HAPPY_IMG.style.display = "none"
        isToolCleanUsed = false
        if (imgEvent.getAttribute("src") === imgEventArray[0]) {
            removeFood()
            imgEvent.src = imgEventArray[1]
            endGame()
            
            


        } else {
            if (imgEvent.getAttribute("src") === imgEventArray[2]) {
                removePet()
                imgEvent.src = imgEventArray[3]
                endGame()

                



            } else {
                if (imgEvent.getAttribute("src") === imgEventArray[3]) {
                    removePlay()
                    imgEvent.src = imgEventArray[0]
                    endGame()
                    



                }
            }

            

        }

        

    }

    if (isCleanFull) {
        endGame()
    }

})

PET_BTN.addEventListener("click", () => {
    isToolPetUsed = true
    if (imgEvent.getAttribute("src") === imgEventArray[2]) {
        if (isToolPetUsed === true) {
            HAPPY_IMG.style.display = "block"
            SAD_IMG.style.display = "none"
            isToolPetUsed = false
            movePet()
            imgEvent.src = imgEventArray[3]
            


        }

    } else {
        SAD_IMG.style.display = "block"
        HAPPY_IMG.style.display = "none"
        isToolPetUsed = false
        if (imgEvent.getAttribute("src") === imgEventArray[0]) {
            removeFood()
            imgEvent.src = imgEventArray[1]
            endGame()
            
            


        } else {
            if (imgEvent.getAttribute("src") === imgEventArray[1]) {
                removeClean()
                imgEvent.src = imgEventArray[2]
                endGame()

                



            } else {
                if (imgEvent.getAttribute("src") === imgEventArray[3]) {
                    removePlay()
                    imgEvent.src = imgEventArray[0]
                    endGame()
                    



                }
            }

            

        }

       
    }

    if (isPetFull) {
        endGame()
    }

})



PLAY_BTN.addEventListener("click", () => {
    isToolPlayUsed = true
    if (imgEvent.getAttribute("src") === imgEventArray[3]) {
        if (isToolPlayUsed === true) {
            HAPPY_IMG.style.display = "block"
            SAD_IMG.style.display = "none"
            isToolPlayUsed = false
            movePlay()
            imgEvent.src = imgEventArray[0]
            


        }

    } else {
        SAD_IMG.style.display = "block"
        HAPPY_IMG.style.display = "none"
        isToolPlayUsed = false
        if (imgEvent.getAttribute("src") === imgEventArray[0]) {
            removeFood()
            imgEvent.src = imgEventArray[1]
            endGame()
            
            


        } else {
            if (imgEvent.getAttribute("src") === imgEventArray[2]) {
                removePet()
                imgEvent.src = imgEventArray[3 ]
                endGame()

                



            } else {
                if (imgEvent.getAttribute("src") === imgEventArray[1]) {
                    removeClean()
                    imgEvent.src = imgEventArray[2]
                    endGame()
                    



                }
            }

            

        }

           }

    if (isPlayFull) {
        endGame()
    }

})


const HARD_MODE = document.getElementById("hardMode")

if(localStorage.getItem("Leo") !== null) {
    
    HARD_MODE.src = "../images/guepard.png";
}

if(localStorage.getItem("Gerard") !== null) {
    
    HARD_MODE.src = "../images/tigre.png";
}
if(localStorage.getItem("Tom") !== null) {
    
    HARD_MODE.src = "../images/puma.png";
}


function endGame() {
    if (isFoodFull && isCleanFull && isPetFull && isPlayFull) {
        START.style.display = "none"
        MODAL.style.display = "block"
        END.style.display = "block"

        if(HARD_MODE.getAttribute("src") === "../images/lion2.png"){
            localStorage.setItem("Leo", "../images/lion2.png" )


        }
        if(HARD_MODE.getAttribute("src") === "../images/guepard.png"){
            
            localStorage.setItem("Gerard", "../images/guepard.png")
              
        }
        if(HARD_MODE.getAttribute("src") === "../images/tigre.png"){
           
            localStorage.setItem("Tom", "../images/tigre.png")
              
        }
        if(HARD_MODE.getAttribute("src") === "../images/puma.png"){
           
            localStorage.setItem("Nala", "../images/puma.png")
              
        }
    
       
        localStorage.setItem("grand chat", "../images/lion2.png")
    }
    if(widthFood < 0 && widthClean < 0 && widthPet < 0 && widthPlay < 0){
        START.style.display = "none"
        MODAL.style.display = "block"
        LOST.style.display = "block"
    }

    
}




