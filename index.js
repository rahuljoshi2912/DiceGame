var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

var image1Loc = "images/dice" + player1 + ".png";
var image2Loc = "images/dice" + player2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", image1Loc);
image2.setAttribute("src", image2Loc);

if(player1 > player2){
    document.querySelector("h1").innerHTML  =  "Player 1 Wins";
    document.querySelector("h2").innerHTML  =  "👈";
}
else if(player1 < player2){
    document.querySelector("h1").innerHTML  =  " Player 2 Wins";
    document.querySelector("h2").innerHTML  =  "👉"; 
}
else{
    document.querySelector("h1").innerHTML  =  "It's a Draw!";
}
