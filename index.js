
function dicee() {
    
        var imgOne = document.querySelector(".img1");
        var imgTwo = document.querySelector(".img2");
        var randomNumberOne = Math.floor((Math.random()*6)) + 1;
        var randomNumberTwo = Math.floor((Math.random()*6)) + 1;

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


