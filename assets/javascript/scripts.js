// Basic Global Variables
var wins = 0;
var loss = 0;
var userCrystal = 0;
var randomCrystals = [];
var randomNumber = [];

// set the document to ready
$(document).ready(function () {
  reset();

  // reset function
  function reset() {
    userCrystal = 0;
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#uservalue").text(userCrystal);
    $("#target").text(randomNumber);
    rCrystals()
    // end reset function
  };

  // check win / lose  condition
  function checkWinOrLose() {
    if (randomNumber === userCrystal) {
      wins++;
      $("#wins").text(wins);
      $('#winCounter').text("CONGRATULATIONS YOU GOT IT!");
      reset();
    }
    // If usercrystal value goes over the random number they lose, loss +1 
    else if (randomNumber < userCrystal) {
      loss++;
      $("#losses").text(loss);
      $('#winCounter').text("YOU BUST");
      reset();
    }
  } // end checkwinorlose function


  // Target Score - generate a random number between 19 and 120 - place it in a the html
  randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  $("#target").text(randomNumber);


  // Crystal Values - genereate 4 random numbers for the 4 crystals
  // every crystal has a random num 1 - 12, no doubles - at least 1 odd number - tbd ?
  function rCrystals() {
    randomCrystals = []
    while (randomCrystals.length < 4) {
      var crystalNumbers = Math.ceil(Math.random() * 12)
      if (randomCrystals.indexOf(crystalNumbers) === -1) { randomCrystals.push(crystalNumbers) }
    }
    console.log([...randomCrystals]);
  }



  // Click Events - for the 4 Crystals: in the html crystal image elements
  $("#sky").on("click", function () {
    $('#winCounter').text("");
    userCrystal += randomCrystals[0];
    $("#uservalue").text(userCrystal);
    checkWinOrLose();

  });


  $("#red").on("click", function () {
    $('#winCounter').text("");
    userCrystal += randomCrystals[1];
    $("#uservalue").text(userCrystal);
    checkWinOrLose();

  });


  $("#yellow").on("click", function () {
    $('#winCounter').text("");
    userCrystal += randomCrystals[2];
    $("#uservalue").text(userCrystal);
    checkWinOrLose();

  });


  $("#green").on("click", function () {
    $('#winCounter').text("");
    userCrystal += randomCrystals[3];
    $("#uservalue").text(userCrystal);
    checkWinOrLose();

  });




  // end document ready function
});



