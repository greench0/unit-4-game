$(document).ready(function () {

  // Basic Global Variables
  var wins = 0;
  var loss = 0;
  var userCrystal = 0;
  var randomCrystals = [];
  var randomNumber = [];

  // reset function
  function reset() {
    userCrystal = 0;
    $("#uservalue").text("0");
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#target").text(randomNumber);
    

    // end reset function
  };


  // win condition
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


  // generate a random number between 19 and 120 - place it in a the html
  randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  $("#target").text(randomNumber);


  // genereate 4 random numbers for the 4 crystals
  // every crystal has a random num 1 - 12, no doubles - at least 1 odd number - tbd ?
  while (randomCrystals.length < 4) {
    var crystalNumbers = Math.floor(Math.random() * 12) + 1;
    if (randomCrystals.indexOf(crystalNumbers) > -1) continue;
    randomCrystals[randomCrystals.length] = crystalNumbers;
    // lets you see the 4 random numbers in the console log
    console.log(randomCrystals);
  }









  // click events for the html crystal elements
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




// another way to get 4 random numbers

// for (var i = 0; randomCrystals.length < 4; i++) {
//   crystalNumbers = Math.floor(Math.random() * 12)+1;

//   if (randomCrystals.includes(crystalNumbers) && randomCrystals.length < 4) {
//     crystalNumbers = Math.floor(Math.random() * 12)+1;
//       // console.log(random);
//       continue;
//   } 
//   else {
//     randomCrystals.push(crystalNumbers); 
//   }
//   console.log(randomCrystals);
// }