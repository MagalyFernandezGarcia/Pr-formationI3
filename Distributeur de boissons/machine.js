const SELECTION = document.getElementById("selection")
const BTN_ONE = document.getElementById("btn_nb1")
const BTN_TWO = document.getElementById("btn_nb2")
const BTN_THREE = document.getElementById("btn_nb3")
const BTN_FOUR = document.getElementById("btn_nb4")
const BTN_FIVE = document.getElementById("btn_nb5")
const BTN_SIX = document.getElementById("btn_nb6")
const BTN_SEVEN = document.getElementById("btn_nb7")
const BTN_EIGHT = document.getElementById("btn_nb8")
const BTN_NINE = document.getElementById("btn_nb9")
const BTN_VALIDATION = document.getElementById("okButton")
const RESET_BUTTON = document.getElementById("resetButton")

const COCA_STOCK = document.getElementById("cocaStock")
const FANTA_STOCK = document.getElementById("fantaStock")
const LIPTON_STOCK = document.getElementById("liptonStock")
const ORANGINA_STOCK = document.getElementById("oranginaStock")
const SPRITE_STOCK = document.getElementById("spriteStock")
const SMARTIES_STOCK = document.getElementById("smartiesStock")

const RECEPTION_BOX = document.getElementById("receptionBox")



function addValidation() {
    BTN_ONE.addEventListener("click", () => {
        SELECTION.innerText += "1"
    })

    BTN_TWO.addEventListener("click", () => {
        SELECTION.innerText += "2"
    })

    BTN_THREE.addEventListener("click", () => {
        SELECTION.innerText += "3"
    })
    BTN_FOUR.addEventListener("click", () => {
        SELECTION.innerText += "4"
    })
    BTN_FIVE.addEventListener("click", () => {
        SELECTION.innerText += "5"
    })
    BTN_SIX.addEventListener("click", () => {
        SELECTION.innerText += "6"
    })
    BTN_SEVEN.addEventListener("click", () => {
        SELECTION.innerText += "7"
    })
    BTN_EIGHT.addEventListener("click", () => {
        SELECTION.innerText += "8"
    })
    BTN_NINE.addEventListener("click", () => {
        SELECTION.innerText += "9"
    })
}

addValidation()




BTN_VALIDATION.addEventListener("click", () => {
    switch (SELECTION.innerText) {
        case "11":
            if (parseInt(COCA_STOCK.innerText) > 0) {
                RECEPTION_BOX.src = "./images/coca.jpg"
                COCA_STOCK.innerText -= 1
            } else {
                SELECTION.innerText = "NO STOCK"
            }
            break
        case "12":
            RECEPTION_BOX.src = "./images/fanta.png"
            FANTA_STOCK.innerText -= 1

            break
        case "13":
            RECEPTION_BOX.src = "./images/lipton.jpg"
            LIPTON_STOCK.innerText -= 1

            break
        case "14":
            RECEPTION_BOX.src = "./images/orangina.jpg"
            ORANGINA_STOCK.innerText -= 1

            break
        case "15":
            RECEPTION_BOX.src = "./images/sprite.jpg"
            SPRITE_STOCK.innerText -= 1

            break
        case "16":
            RECEPTION_BOX.src = "smartiesStock"
            SMARTIES_STOCK.innerText -= 1

            break
        default:
            alert("ce code n'existe pas")

    }
    setTimeout(() => {
        SELECTION.innerText = " "
        RECEPTION_BOX.src = " "
    }, 2000)


})


RESET_BUTTON.addEventListener("click", () => {
    SELECTION.innerText = " "
})


//mettre un timer:
//fonction anonyme en premier paramètre, 2ème paramètre, le temps en milisecondes
//3000 = 3secondes
// setTimeout(() =>
// {
//     SELECTION.innerText = " "
//     RECEPTION_BOX.src = " "
// }, 3000)

//setInterval (() =>{}, temps en milisecondes), exécute la fonction renseignée toute les milisecondes. pour stopper le timer: clearInterval()
