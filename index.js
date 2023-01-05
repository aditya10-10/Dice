var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImange = "dice" + randomNumber1 + ".png";

var randomImangeSource = "images/" + randomDiceImange;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImangeSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImange2 = "dice" + randomNumber2 + ".png";

var randomImangeSource2 = "images/" + randomDiceImange2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImangeSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = " 🚩Player 1 Wins!"
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = " 🚩Player 2 Wins!"
}else{
  document.querySelector("h1").innerHTML = "Draw!"
}
