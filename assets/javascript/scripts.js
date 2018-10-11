$(document).ready(function () {
// Basic Global Variable info
var wins = 0;
var loss = 0;

var userCrystal = 0;

// generate a random number between 19 and 120 - place it in a div
var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19; 
$("#target").text(randomNumber);



  // genereate 4 random numbers for the crystals
  // 4 crystals and a random result for each
  // every crystal has a random num 1 - 12
  // at least 1 odd number - tbd
  // no doubles

  var randomCrystals = [];
  while (randomCrystals.length < 4) {
    var crystalNumbers = Math.floor(Math.random() * 12) + 1;
    if (randomCrystals.indexOf(crystalNumbers) > -1) continue;
    randomCrystals[randomCrystals.length] = crystalNumbers;

    console.log(randomCrystals);



    // click events for the html crystal elements

    $("#sky").on("click", function () {
      userCrystal += randomCrystals[0] / 4;
      $("#uservalue").text(userCrystal);
    });


    var crystal1 = randomCrystals[1];

    $("#red").on("click", function () {
      userCrystal += randomCrystals[1] / 4;
      $("#uservalue").text(userCrystal);
    });

    $("#blue").on("click", function () {
      userCrystal += randomCrystals[2] / 4;
      $("#uservalue").text(userCrystal);
    });

    $("#green").on("click", function () {
      userCrystal += randomCrystals[3] / 4;
      $("#uservalue").text(userCrystal);
    });


   var winCondition = userCrystal;
   
console.log(winCondition);

 // win conditions
 if (randomNumber === winCondition) {
  wins++;

$('#winCounter').text("CONGRATULATIONS YOU GUESSED IT RIGHT!");

}
//Incorrect Guess: If user guesses wrong, guessesLeft should go down by 1 point.// 
else {

$('#winCounter').text("keeping picking")

}



//This is the function to reset the two variables below.//
var gameReset = function () {
  userCrystal = 0;
}


  // end of var randomCrystals //
}







  //    // This time, our click event applies to every single crystal on the page. Not just one.
  // $(".crystal-image").on("click", function() {

  //   // Determining the crystal's value requires us to extract the value from the data attribute.
  //   // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  //   // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  //   // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter



  //   var crystalValue = ($(this).attr("data-crystalvalue"));
  //   crystalValue = parseInt(crystalValue);
    
    
  //   counter += crystalValue;



    // $("body").on("click", "#pbj", function() {
    //   pbjCount++;
    //   alert("you just ate" + pbjCount + " pbj's" );
    //   $("#pbjdisplay").text(pbjCount);
    // });














// There will be four crystals displayed as buttons on the page.

// The player will be shown a random number at the start of the game.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 



// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.


// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.


// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// end document ready function
});



/// mani code: 

// Initialize variables
// wins
// losses
// currentUsersCrystal
// crystals 1 - 4
// targetCrystal

// Create a function that sets crystals 1 - 4 with a random number between 1 - 12
  // this function should also set the targetCrystal to a random Number between 19 - 120


// Create an event handler for when a player clicks on a crystal
  // increment currentUsersCrystal with the amount of the crystal that was clicked on
  // check if currentUsersCrystal === targetCrystal
    // if yes increment wins by 1
    // call the function that sets crystals 1 - 4 and the targetCrystal
    // Update UI
  // check if currentUsersCrystal > targetCrystal
    // increment losses by 1
    // call the function that sets crystals 1 - 4 and the target crystal
    // update UI
  // No winning/losing conditions happened but Update UI anyways