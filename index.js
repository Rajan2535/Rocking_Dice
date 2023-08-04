var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImgSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImgSource);

// 2nd dice 2nd player dice

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImgSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);

// player1 and player2 Random seletor

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins the game!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins the game!";
}
else{
    document.querySelector("h1").innerHTML="Game DRAW !";
}
