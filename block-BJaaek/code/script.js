//javascript code

let boxOne = document.querySelector(".first");

let boxTwo = document.querySelector(".second");

function generaterRandomColor(){
 let hexCharacters = ['0','1','2' ,'3','4','5','6','7','8','9','a','b','c','d','e','f',];

 let color ="#";

 for ( let i = 0; i<6; i++){
 let randomNumber = Math.floor(Math.random()*16);
       color = color + hexCharacters[randomNumber]
 }


 return color;
}


function handleClick(){
 let randomColor = generaterRandomColor();
 
 boxOne.style.backgroundColor = randomColor;

}

function handleMouseMove(){
    let randomColor = generaterRandomColor();
    
    boxTwo.style.backgroundColor = randomColor;
   
   }


boxOne.addEventListener('click' , handleClick);
 
boxTwo.addEventListener('mousemove' ,handleMouseMove);