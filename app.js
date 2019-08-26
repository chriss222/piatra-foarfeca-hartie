let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const rezultat_p = document.querySelector(".rezultat > p");
const piatra_div = document.getElementById("p");
const foarfece_div = document.getElementById("f");
const hartie_div = document.getElementById("h");

function getComputerChoice(){
	const choices= ['p', 'f', 'h'];
	const randomNumber= Math.floor(Math.random() *3);
	return choices[randomNumber];
}

function convertToWord(letter){
	if (letter === "p") return "Piatra";
	if (letter === "f") return "Foarfece";
	if (letter === "h") return "Hartie";
}
function win(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const targetUser="user".fontsize(3).sub();
	const targetComp="comp".fontsize(3).sub();
	rezultat_p.innerHTML = convertToWord(userChoice) + targetUser +" castiga impotriva " + convertToWord(computerChoice) + targetComp +".Ai castigat! ";
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 300)
}

function lose(userChoice, computerChoice){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const targetUser="user".fontsize(3).sub();
	const targetComp="comp".fontsize(3).sub();
	rezultat_p.innerHTML = convertToWord(userChoice) + targetUser +" pierde impotriva " + convertToWord(computerChoice) + targetComp +".Ai pierdut. ";
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 300)
}

function draw(userChoice, computerChoice){
	const targetUser="user".fontsize(3).sub();
	const targetComp="comp".fontsize(3).sub();
	rezultat_p.innerHTML = "Este egalitate!"
	document.getElementById(userChoice).classList.add('grey-glow');
	setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow')}, 300)
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "pf":
		case "fh":
		case "hp":
			win(userChoice, computerChoice);
			break;
		case "ph":
		case "hf":
		case "fp":
			lose(userChoice, computerChoice);
			break;
		case "pp":
		case "hh":
		case "ff":
			draw(userChoice, computerChoice);
			break;
	}
}

function main(){

piatra_div.addEventListener('click', function() {
	game("p");
})

foarfece_div.addEventListener('click', function() {
	game("f");
})

hartie_div.addEventListener('click', function() {
	game("h");
})

}

main();
