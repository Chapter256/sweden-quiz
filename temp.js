
document.addEventListener("DOMContentLoaded", function() {
    // let buttons = document.getElementsByTagName("button"); 
    
    // for (let button of buttons) {
    //     button.addEventListener()
    // }
    var startBtn = document.getElementById("start-btn");
    startBtn.onclick = function(event) {
        console.log("button clicked");
        rendernextquestion();
        startButton.classList.add("hide");
        howtoPlayButton.classList.add("hide");
        nextButton.classList.remove("hide");
        questionContainerElement.classList.remove("hide");
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

function createQuestionElement(questionText, A1, A2, A3, A4) {
    var questionElem = document.createElement("div");
    questionElem.innerText = questionText;
    questionElem.classList.add("questionElem");
    questionElem.style.border = "5px solid black";
    var A1Elem = document.createElement("div");
    A1Elem.innerText = A1;
    questionElem.appendChild(A1Elem);
    var A2Elem = document.createElement("div");
    A2Elem.innerText = A2;
    questionElem.appendChild(A2Elem);
    var A3Elem = document.createElement("div");
    A3Elem.innerText = A3;
    questionElem.appendChild(A3Elem);
    var A4Elem = document.createElement("div");
    A4Elem.innerText = A4;
    questionElem.appendChild(A4Elem);
    return questionElem; 
}

function displayFirstQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionone = createQuestionElement("What is the capital of Sweden?", "Helsingborg", "Stockholm", "Gothenburg", "Uppsala")
    document.body.appendChild(questionone);
}

function displaySecondQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionone = createQuestionElement("What is the currency of Sweden?", "Swedish dollars (SWED)", "Swedish crowns (SEK)", "Swedish pesos (SEP)", "Scandinavian swish (SDW)")
    document.body.appendChild(questionone);
}

function displayThirdQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionone = createQuestionElement("Which of these is not originally Swedish?", "H&M", "IKEA", "Volvo", "Apple")
    document.body.appendChild(questionone);
}

function displayFourthQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionone = createQuestionElement("What is the highest Mountain in Sweden called?", "Vikingmountain", "Kebnekaise", "Storberget (big mountain)", "Mount Everest")
    document.body.appendChild(questionone);
}

function displayFifthQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionone = createQuestionElement("Who is the current King of Sweden?", "Gustav Vasa", "Car XVI Gustaf", "Hans ??berg", "Jorgen the second of Sweden")
    document.body.appendChild(questionone);
}

function displaySixthQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionone = createQuestionElement("What is the national animal of Sweden?", "Arctic fox", "Eurasian elk", "Brown bear", "Deer")
    document.body.appendChild(questionone);
}

function displaySeventhQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionone = createQuestionElement("What languages is Swedish the closest to?", "German & Finnish", "Danish & Norweigan", "Finnish & French", "Scandinavian & German")
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