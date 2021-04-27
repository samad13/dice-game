function dicegame(){
// first dice start here
var image1 = ["images/dice1.png","images/dice2.png","images/dice3.png", "images/dice4.png","images/dice5.png","images/dice6.png" ]
function dice1(image1){
   
    var randomNumber = Math.floor(Math.random()*image1.length);
    return image1[randomNumber];
}
 
 var firstDice = dice1(image1);
console.log(firstDice);

// the second dice function start here
var image2 = ["images/dice1.png","images/dice2.png","images/dice3.png", "images/dice4.png","images/dice5.png","images/dice6.png" ]
function dice2(image2){
   
    var randoNumber = Math.floor(Math.random()*image2.length);
    return image2[randoNumber];
}
 
 var secondDice = dice2(image2);
console.log(secondDice);
 // changing both image with random image using attribute
document.querySelector(".img1").setAttribute("src",firstDice)
document.querySelector(".img2").setAttribute("src",secondDice)

//then using an if statement to change the h1 
if (firstDice > secondDice){
    document.querySelector("h1").innerHTML = "player 1 won"
}else if (firstDice < secondDice){document.querySelector("h1").innerHTML = "player 2 won"
}else document.querySelector("h1").innerHTML = "it a draw";

}
dicegame()

