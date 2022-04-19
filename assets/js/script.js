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


function displayFirstQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionone = document.createElement("div");
    questionone.innerText = "I'm question one";
    questionone.classList.add("questionElem");
    document.body.appendChild(questionone);
}

function displaySecondQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questiontwo = document.createElement("div");
    questiontwo.innerText = "I'm question two";
    questiontwo.classList.add("questionElem");
    document.body.appendChild(questiontwo);
}

function displayThirdQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionthree = document.createElement("div");
    questionthree.innerText = "I'm question three";
    questionthree.classList.add("questionElem");
    document.body.appendChild(questionthree);
}

function displayFourthQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionfour = document.createElement("div");
    questionfour.innerText = "I'm question four";
    questionfour.classList.add("questionElem");
    document.body.appendChild(questionfour);
}

function displayFifthQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionfive = document.createElement("div");
    questionfive.innerText = "I'm question five";
    questionfive.classList.add("questionElem");
    document.body.appendChild(questionfive);
}

function displaySixthQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionsix = document.createElement("div");
    questionsix.innerText = "I'm question six";
    questionsix.classList.add("questionElem");
    document.body.appendChild(questionsix);   
}

function displaySeventhQuestion() {
    var questionElems = document.getElementsByClassName("questionElem");
    for (var e of questionElems){
        e.remove();
    }
    var questionseven = document.createElement("div");
    questionseven.innerText = "I'm question seven";
    questionseven.classList.add("questionElem");
    document.body.appendChild(questionseven);  
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