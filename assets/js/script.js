function runGame () {

}

function checkAnswer () {

}

function calculateCorrectAnswer () {

}

function incrementScore () {

}

function incrementWrongAnswer () {

}









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