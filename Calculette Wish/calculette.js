const NUMBER_ONE = document.getElementById("firstNumber");
const NUMBER_TWO = document.getElementById("numberTwo");
const RESULT = document.getElementById("result")

const ADD_BUTTON = document.getElementById("addButton");
const MINUS_BUTTON = document.getElementById("minButton");
const MULTI_BUTTON = document.getElementById("multButton");
const DIVISED_BUTTON = document.getElementById("divButton");
const MODULO_BUTTON = document.getElementById("moduloButton")



ADD_BUTTON.addEventListener("click", () => { 
    RESULT.innerText = `Le résultat est : ${parseInt(NUMBER_ONE.value) + parseInt(NUMBER_TWO.value)}`

})

MINUS_BUTTON.addEventListener("click", () => {
    RESULT.innerText = `Le résultat est : ${parseInt(NUMBER_ONE.value) - parseInt(NUMBER_TWO.value)}`


})

MULTI_BUTTON.addEventListener("click", () => {
    RESULT.innerText = `Le résultat est : ${parseInt(NUMBER_ONE.value) * parseInt(NUMBER_TWO.value)}`


})

DIVISED_BUTTON.addEventListener("click", () => {
    RESULT.innerText = `Le résultat est : ${parseInt(NUMBER_ONE.value) / parseInt(NUMBER_TWO.value)}`


})

MODULO_BUTTON.addEventListener("click", () => {
    RESULT.innerText = `Le résultat est : ${parseInt(NUMBER_ONE.value) % parseInt(NUMBER_TWO.value)}`


})