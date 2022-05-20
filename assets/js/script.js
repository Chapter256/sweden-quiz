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
    questionContainerElement.classList.remove("hide")
    nextButton.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
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
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
};

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add("hide")
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild) 
  }
}; 

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
  } else {
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
  }
}; 

function setStatusClass(element, correct) {
  clearStatusClass(element) 
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}; 

function clearStatusClass(element) {
  element.classList.remove("correct")
  element.classList.remove("wrong")
}

const questions = [
  {
    question: "What is the highest Mountain in Sweden called?", 
    answers: [
      { text: "Kebnekaise", correct: true},
      { text: "Vikingmountain", correct: false},
      { text: "Big mountain", correct: false},
      { text: "Mount Everest", correct: false}
    ]
  }, 
  {
    question: "What languages is Swedish the closest to?", 
    answers: [
      { text: "German & Finnish", correct: false},
      { text: "Scandinavian & German", correct: false},
      { text: "Finnish & French", correct: false},
      { text: "Danish & Norweigan", correct: true}
    ]
  }, 
  {
    question: "What is the highest Mountain in Sweden called?", 
    answers: [
      { text: "Kebnekaise", correct: true},
      { text: "Vikingmountain", correct: false},
      { text: "Big mountain", correct: false},
      { text: "Mount Everest", correct: false}
    ]
  }, 
  {
    question: "What is the national animal of Sweden?", 
    answers: [
      { text: "Deer", correct: false},
      { text: "Brown bear", correct: false},
      { text: "Eurasian elk", correct: true},
      { text: "Fox", correct: false}
    ]
  }, 
  {
    question: "What is the capital of Sweden?", 
    answers: [
      { text: "Stockholm", correct: true},
      { text: "Helsingborg", correct: false},
      { text: "Malmö", correct: false},
      { text: "Göteborg", correct: false}
    ]
  }, 
  {
    question: "What currency is used in Sweden?", 
    answers: [
      { text: "Swedish dollars (SWED)", correct: false},
      { text: "Swedish crowns (SEK)", correct: true},
      { text: "Swedish pesos (SEP)", correct: false},
      { text: "Scandinavian swish (SDW", correct: false}
    ]
  }, 
  {
    question: "Which of these is not originally Swedish?", 
    answers: [
      { text: "H&M", correct: false},
      { text: "IKEA", correct: false},
      { text: "APPLE", correct: true},
      { text: "Volvo", correct: false}
    ]
  }
]








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