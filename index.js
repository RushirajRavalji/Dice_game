
//! for image 1
var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;

var randomimg = "images/"+"dice" + randomNumber1 +".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimg);


//! for image 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomimg2 = "images/"+"dice" + randomNumber2 +".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimg2);


//! showing result

if(randomNumber1 > randomNumber2){
    
     document.querySelector("h1").innerHTML = "player 1 win  ";
}
else if(randomNumber1 < randomNumber2){
    
    document.querySelector("h1").innerHTML = "player 2 win  ";
}

else{
    
    document.querySelector("h1").innerHTML = "Draw";
}
