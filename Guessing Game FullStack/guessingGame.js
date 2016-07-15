/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

// this is .uniq because js doesn't have it(don't forget the ())
Array.prototype.getUnique = function(){
   var u = {}, a = [];
   for(var i = 0, l = this.length; i < l; ++i){
      if(u.hasOwnProperty(this[i])) {
         continue;
      }
      a.push(this[i]);
      u[this[i]] = 1;
   }
   return a;
}
// ^^^^^^^^^.uniq

// this displays how many guesses are left
var displayGuesses = setInterval(function guessesLeft() {
	if(guessesRemain > 1) {
		document.getElementById("guessesleft").innerHTML = "You have " + guessesRemain + " guesses remaining."
	}
	else if(guessesRemain === 1) {
		document.getElementById("guessesleft").innerHTML = "Only one guess left!"
	}
	else {
		document.getElementById("guessesleft").innerHTML = "You lose."
		document.getElementById("submitButton").disabled = true
	}
}, 500)





function generateWinningNumber(){
	num = Math.random() *  100
	return Math.round(num)
}

var winningNumber = generateWinningNumber()
var guessesRemain = 5
var guesses = []


// This is the script for the game, it is triggered by clicking SUBMIT

function runGame(){
	userInput = parseInt(document.getElementById('guess').value)
	
	if( (userInput > 0) && (userInput < 101) && (!guesses.includes(userInput)) ) 
		{
			validGuess = userInput
			guesses.push(validGuess)
			guessesRemain -= 1

			if( validGuess > winningNumber )
				{
					document.getElementById("action").innerHTML = validGuess + " is too big!"
				}
			else if( validGuess < winningNumber )
				{
					document.getElementById("action").innerHTML = validGuess + " is too little!"
				}
			else if( validGuess === winningNumber)
				{
					document.getElementById("action").innerHTML = validGuess + " is right!!! \nWinner!!!"
				}
		}
	else if( guesses.includes(userInput) )
		{
			document.getElementById("action").innerHTML = "You already guessed that!"
		}
	else
		{
			document.getElementById("action").innerHTML = "Please enter only numbers between 1 and 100."
		}
		
		submitBox = document.getElementById('guess')
		submitBox.value = ""
}



// this reloads the page to play the game again when play again is clicked
function reloadPage() {
	document.location.reload(true)
}

// this give a hint
function giveHint() {
	var zeroOrOne = Math.round(Math.random())
	var digit = winningNumber.toString()[zeroOrOne]
	document.getElementById("action").innerHTML = "The number contains the number " + digit
}





