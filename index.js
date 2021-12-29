
function dicee() {
        var title = document.getElementById('title');
        var imgOne = document.querySelector(".img1");
        var imgTwo = document.querySelector(".img2");
        var randomNumberOne = Math.floor((Math.random()*6)) + 1;
        var randomNumberTwo = Math.floor((Math.random()*6)) + 1;

        if (randomNumberOne > randomNumberTwo) {
            title.innerHTML = 'Player One Won!';
        }
        else if (randomNumberOne < randomNumberTwo) {
            title.innerHTML = 'Player Two Won!';
        }
        else {
            title.innerHTML = 'Draw!';
        }

        if (randomNumberOne == 1) {
            imgOne.src = 'images/dice1.png';
        }
        else if (randomNumberOne == 2){
            imgOne.src = 'images/dice2.png';
        }
        else if (randomNumberOne == 3){
            imgOne.src = 'images/dice3.png';
        }
        else if (randomNumberOne == 4){
            imgOne.src = 'images/dice4.png';
        }
        else if (randomNumberOne == 5){
            imgOne.src = 'images/dice5.png';
        }
        else if (randomNumberOne == 6){
            imgOne.src = 'images/dice6.png';
        }
        
        if (randomNumberTwo == 1) {
            imgTwo.src = 'images/dice1.png';
        }
        else if (randomNumberTwo == 2){
            imgTwo.src = 'images/dice2.png';
        }
        else if (randomNumberTwo == 3){
            imgTwo.src = 'images/dice3.png';
        }
        else if (randomNumberTwo == 4){
            imgTwo.src = 'images/dice4.png';
        }
        else if (randomNumberTwo == 5){
            imgTwo.src = 'images/dice5.png';
        }
        else if (randomNumberTwo == 6){
            imgTwo.src = 'images/dice6.png';
        }
    

}


// Resposta do desafio pela Prof Angela

// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }
