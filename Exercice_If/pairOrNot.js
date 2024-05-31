const NUMBER = document.getElementById("number")
const BUTTON = document.getElementById("button")
const ANSWER = document.getElementById("answer")

BUTTON.addEventListener("click", () => {
    if(isNaN(parseInt(number.value)) ){
        alert("Non mais on a dit un nombre !")

    }else{
        if(parseInt(number.value) %2 == 0){
            ANSWER.innerText = "Ton nombre est pair"
        }else{
            ANSWER.innerText = "Ton nombre est impair"
        }
        
    }

    
})

const YEAR = document.getElementById("year")
const VALID_BUTTON = document.getElementById("validationButton")
const RESULT = document.getElementById("result")

VALID_BUTTON.addEventListener("click", () => {
    const VALUE_NUMBER = parseInt(YEAR.value)
    if(isNaN(VALUE_NUMBER)){
        alert("Pour info, une année c'est quatres chiffres...")

    }else{
        if(VALUE_NUMBER < -9999 || VALUE_NUMBER > 9999){
            alert("Merci de rentrer une année valide")
        }else{
            if(VALUE_NUMBER % 4 == 0 && VALUE_NUMBER % 100 !== 0 || VALUE_NUMBER % 400 == 0) {
                RESULT.innerText = "L'année est bissextile"
            }else{
                RESULT.innerText = "L'année n'est pas bissextile"
                }
            }
        }
    }
)

const LANG = prompt(`Veuillez choisir une langue :
FR
EN
IT
ES`)

switch(LANG.toLocaleUpperCase){
    case "FR" :       
        alert("Bonjour")
        break;
    case "EN" :
    case "ENGLISH" :   
        alert("Hello")
        break; 
    case "IT" :
        alert("Buongiorno")
        break;
    case "ES"  :
        alert("Buenos Dias")
        break; 
    default : 
        alert("Je comprends pas ta langue")
        break;       
}


const BTN_FR = document.getElementById("fr")
const BTN_EN = document.getElementById("en")
const BTN_IT = document.getElementById("it")
const BTN_ES = document.getElementById("es")
const BTN_WTF = document.getElementById("??")
const BJR_RESULT = document.getElementById("bjr_result")

BTN_FR.addEventListener("click", () =>{
    BJR_RESULT.innerText = sayHello("fr")
})
BTN_EN.addEventListener("click", () =>{
    BJR_RESULT.innerText = sayHello("en")
})
BTN_IT.addEventListener("click", () =>{
    BJR_RESULT.innerText = sayHello("it")
})
BTN_ES.addEventListener("click", () =>{
    BJR_RESULT.innerText = sayHello("es")
})
BTN_WTF.addEventListener("click", () =>{
    BJR_RESULT.innerText = sayHello("??")
})

function sayHello(LANG){
    switch(LANG.toLowerCase()){
        case "fr" :
            return "Bonjour"
        case "en" :
            return "Hello"
        case "it" :
            return "Buongiorno"
        case "es" :
            return "Buenos Dias"
        default :
            return  "Je comprends pas ta langue"     

    }
    

}