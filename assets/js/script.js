const startButton = document.getElementById("start-btn"); 
const howtoPlayButton = document.getElementById("how-to-play-btn"); 
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container"); 
const questionElement = document.getElementById("question"); 
const answerButtonsElement = document.getElementById("answer-buttons"); 

let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener("click", startQuiz)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++ 
    setNextQuestion()
}); 

function startQuiz() {
    startButton.classList.add("hide")
    howtoPlayButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}; 

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}; 

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}; 

// Code from W3 Schools page on modal windows:  https://www.w3schools.com/howto/howto_css_modals.asp
// Modal window opens when user clicks 'How To Play' button.

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("how-to-play-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}