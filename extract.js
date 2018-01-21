
//consts
var btnOne = document.querySelector("#pone");
var paraOne = document.querySelector("#score");
var imageOne = document.querySelector("#imgOne");
var h4 = document.querySelector("h4");

var src = document.createAttribute("src");
imageOne.setAttributeNode(src);


var cards = ['10_of_clubs.png', '10_of_diamonds.png', '10_of_hearts.png', '10_of_spades.png', '2_of_clubs.png', '2_of_diamonds.png', '2_of_hearts.png', '2_of_spades.png', '3_of_clubs.png', '3_of_diamonds.png', '3_of_hearts.png', '3_of_spades.png', '4_of_clubs.png', '4_of_diamonds.png', '4_of_hearts.png', '4_of_spades.png', '5_of_clubs.png', '5_of_diamonds.png', '5_of_hearts.png', '5_of_spades.png', '6_of_clubs.png', '6_of_diamonds.png', '6_of_hearts.png', '6_of_spades.png', '7_of_clubs.png', '7_of_diamonds.png', '7_of_hearts.png', '7_of_spades.png', '8_of_clubs.png', '8_of_diamonds.png', '8_of_hearts.png', '8_of_spades.png', '9_of_clubs.png', '9_of_diamonds.png', '9_of_hearts.png', '9_of_spades.png', 'ace_of_clubs.png', 'ace_of_diamonds.png', 'ace_of_hearts.png', 'ace_of_spades.png', 'back.png', 'back@2x.png', 'black_joker.png', 'jack_of_clubs.png', 'jack_of_diamonds.png', 'jack_of_hearts.png', 'jack_of_spades.png', 'king_of_clubs.png', 'king_of_diamonds.png', 'king_of_hearts.png', 'king_of_spades.png', 'queen_of_clubs.png', 'queen_of_diamonds.png', 'queen_of_hearts.png', 'queen_of_spades.png', 'red_joker.png'];





//event listeners
btnOne.addEventListener('click', pickCardOne);



var countOne = 0;
function pickCardOne(){

	if((countOne == countTwo) || (countOne == countTwo - 1)){
	var numba = randomIntFromInterval(0,55);
	console.log("player1: " + numba);
	var url = "https://raw.githubusercontent.com/hayeah/playing-cards-assets/master/png/"
	var name= cards[numba];
	src.value = url + name;

	h4.innerHTML = "player 1, your card is:";

	
	var score = name.split("_of_");
	
	var type = score[1].split(".");

/////you can do this instead of splitting score[1]////////////////////
	//var color;
	//var trimmed = score[1].length - 4;
	//color = score[1].substring(0, trimmed);
//////////////////////////////

	paraOne.textContent = score[0] + ' of ' + type[0];
	paraOne.style.color = "black";
	//console.log(score[1].length);
	countOne ++;
	console.log("player 1 clicks: " + countOne);
	}else{
		paraOne.textContent = "Not your turn";
		paraOne.style.color = "red";
	}

}




	function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
};




// for player two

//const
var btnTwo = document.querySelector("#ptwo");
var h4t = document.querySelector("#uhf");
var parau = document.querySelector("#uscore");
var imageTwo = document.querySelector("#uimage");

var srcu = document.createAttribute("src");
imageTwo.setAttributeNode(srcu);





//event listeners
btnTwo.addEventListener("click", pickCardTwo);

var countTwo = 0;
function pickCardTwo(){

if((countOne == countTwo) || (countTwo == countOne -1)){
	h4t.innerHTML = "player 2, your score is:";
		var namba = randomIntFromInterval(0,55);
	console.log("player2:" + namba);
	urlu = "https://raw.githubusercontent.com/hayeah/playing-cards-assets/master/png/";
	var nombre= cards[namba];

	srcu.value = urlu + nombre;
	h4t.innerHTML = "player 2, your card is:"

	var result = nombre.split("_of_");
	var kind = result[1].split(".");

	parau.textContent = result[0] + ' of ' + kind[0];
	parau.style.color = "black";
	countTwo++;
	console.log("player 2 clicks: " + countTwo);

}else{
		parau.textContent = "Not your turn";
		parau.style.color = "red";
	}
}



