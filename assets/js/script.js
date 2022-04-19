document.addEventListener("DOMContentLoaded", function() {
    // let buttons = document.getElementsByTagName("button"); 
    
    // for (let button of buttons) {
    //     button.addEventListener()
    // }
    var startBtn = document.getElementById("start-btn");
    startBtn.onclick = function(event) {
        console.log("button clicked");
        rendernextquestion();
    }
})

var currentquestion = 0; 
function rendernextquestion() {
    currentquestion++; 
    //in the body of this function, add elements to the page that are the quiz 
    console.log("current question: ", currentquestion);
    if (currentquestion === 1) {
        displayFirstQuestion()
    }
    if (currentquestion === 2) {
        displaySecondQuestion()
    }
    if (currentquestion === 3) {
        displayThirdQuestion()
    }
    if (currentquestion === 4) {
        displayFourthQuestion()
    }
    if (currentquestion === 5) {
        displayFifthQuestion()
    }
    if (currentquestion === 6) {
        displaySixthQuestion()
    }
    if (currentquestion === 7) {
        displaySeventhQuestion()
    }
}

function createQuestionElement(questionText) {
    var questionElem = document.createElement("div");
    questionElem.innerText = questionText;
    questionElem.classList.add("questionElem");
    questionElem.style.border = "5px solid black";
    return questionElem; 
}

function displayFirstQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionone = createQuestionElement("What is the capital of Sweden?")
    document.body.appendChild(questionone);
}

function displaySecondQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionone = createQuestionElement("What is the currency of Sweden?")
    document.body.appendChild(questionone);
}

function displayThirdQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionone = createQuestionElement("Which of these stores are not Swedish?")
    document.body.appendChild(questionone);
}

function displayFourthQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionone = createQuestionElement("What is the highest Mountain in Sweden called?")
    document.body.appendChild(questionone);
}

function displayFifthQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionone = createQuestionElement("What is a 'fika'?")
    document.body.appendChild(questionone);
}

function displaySixthQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionone = createQuestionElement("What is the national animal of Sweden?")
    document.body.appendChild(questionone);
}

function displaySeventhQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionone = createQuestionElement("What is the country number/prefix for Sweden?")
    document.body.appendChild(questionone);
}

// Write a function that will restart the quiz


function checkAnswer() {

}

function calculateCorrectAnswer() {
    
}

function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}