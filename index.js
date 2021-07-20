// code for player 1

var randomNumber1= Math.floor(Math.random() *3) + 1; //to generate number between 1-6

var randomMoveNumber1= "icon" + randomNumber1 + ".jpg";

var MoveImage1= "images/" + randomMoveNumber1 ;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src" , MoveImage1);

//code for player 2

var randomNumber2 = Math.floor(Math.random() *3) + 1; 

var randomMoveNumber2= "icon" + randomNumber2 + ".jpg";

var MoveImage2= "images/" + randomMoveNumber2 ;

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src" , MoveImage2);


// code for choosing winner

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML= "DRAW !";
}
else if(randomNumber1===1){
    if(randomNumber2===2){
        document.querySelector("h1").innerHTML= "🎈Player 2 Win !";
    }
    else{
        document.querySelector("h1").innerHTML= " 🚩Player 1 Win !";
    }
}
else if(randomNumber1===2){
    if(randomNumber2===1){
        document.querySelector("h1").innerHTML= "🚩Player 1 Win !";
    }
    else{
        document.querySelector("h1").innerHTML= "🎈Player 2 Win !";
    }
}
else if(randomNumber1===3){
    if(randomNumber2===1){
        document.querySelector("h1").innerHTML= "🎈Player 2 Win !";
    }
    else{
        document.querySelector("h1").innerHTML= "🚩Player 1 Win !";
    }
}








