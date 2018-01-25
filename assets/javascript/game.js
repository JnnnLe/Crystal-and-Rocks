$(document).ready(function() {

// Declaring Global Variables

var win = 0;
var loss = 0;
var compGuess;
var userTotal = 0;
var gem1;
var gem2;
var gem3;
var gem4;


// Random Computer Guess Function

var computerGuess = function (max, min) {
  compGuess = Math.floor(Math.random() * (max - min) + min);
}; // Immediate Invoke
computerGuess(120,19);

  
function gemValues (max, min) {
  gem1 = Math.floor(Math.random() * (max - min) + min);
  gem2 = Math.floor(Math.random() * (max - min) + min);
  gem3 = Math.floor(Math.random() * (max - min) + min);
  gem4 = Math.floor(Math.random() * (max - min) + min);
}; // Immediate Invoke
gemValues(12,1);


var appendCompGuess = function() {
$("#comp-guess").append(compGuess);
}(); // Immediate Invoke


// Random Gem Value Assign to Image
//$(this).data("gem-num")
$("#gem1").on("click", function() {
  userTotal = userTotal + gem1;
  $("#user-total").html("Total: " + userTotal);
  updateScore();
  compareUserandComp();
});

$("#gem2").on("click", function() {
  userTotal = userTotal + gem2;
  $("#user-total").html("Total: " + userTotal);
  updateScore();
  compareUserandComp();
});

$("#gem3").on("click", function() {
  userTotal = userTotal + gem3;
  $("#user-total").html("Total: " + userTotal);
  updateScore();
  compareUserandComp();
});

$("#gem4").on("click", function() {
  userTotal = userTotal + gem4;
  $("#user-total").html("Total: " + userTotal);
  updateScore();
  compareUserandComp();
});

//.gems when clicked updateScore()
var updateScore = function() {
  $("#wins").html("Wins: " + win);
  $("#losses").html("Loss: " + loss);
  $("#comp-guess").html("Computer number guess: " + compGuess);
};
 var reset = function() {
  userTotal = 0;
  computerGuess(120, 19); 
  gemValues(12, 1);
};

var compareUserandComp = function() {
  console.log(userTotal, compGuess, win, loss)
  if (userTotal > compGuess) {
    loss++;
    reset();
  } else if (userTotal === compGuess) {
    win++;
    reset();
  }
}


updateScore();

//triggered every click 
 //test W/L 
 //update view(score)


//closes doc
});
