const SPAN_TODAY = document.getElementById("dateDuJour");
SPAN_TODAY.innerText = new Date().toLocaleDateString("fr-BE",{ weekday : "long" , day : "numeric", month : "long", year : "numeric"});
SPAN_TODAY.innerHTML = new Date().toLocaleDateString("fr-BE")
const DIFF_TXT_HTML = document.getElementById("diffTextHtml")
// DIFF_TXT_HTML.innerText = "<p> Pouet <p>" ne reprend pas les balises html
DIFF_TXT_HTML.innerHTML = "<p> Pouet <p>"
const INPUT_FIRST_NAME = document.getElementById("inputPrenom");
INPUT_FIRST_NAME.value = "Test";
const VALIDATION_BUTTON = document.getElementById("validationButton");
VALIDATION_BUTTON.addEventListener("click", () => {
    alert(`Bonjour ${INPUT_FIRST_NAME.value} ! Comment ça va ?`);
    DIFF_TXT_HTML.innerText = `Coucou ${INPUT_FIRST_NAME.value}`;
});