function getRandomNumber(max){
    return Math.floor(Math.random()* max);
}
function generaterRandomColor(){
    let hexCharacters = ['0','1','2' ,'3','4','5','6','7','8','9','a','b','c','d','e','f',];
   
    let color ="#";
   
    for ( let i = 0; i<6; i++){
    let randomNumber = Math.floor(Math.random()*16);
          color = color + hexCharacters[randomNumber]
    }
   
   
    return color;
   }

 let parentBox = document.querySelector(".boxes");

   for( let i=0 ; i<500 ;i++){
       let div = document.createElement('div');
       div.classList.add('box')

       let h3 = document.createElement('h3');
       let randomNo =  getRandomNumber(500);
        h3.innerText = randomNo;

        div.append(h3);
        parentBox.append(div);
   }


   let allBoxes = document.querySelectorAll(".box");

   function handleMouseMove(){
       allBoxes.forEach((box) =>{
           box.style.backgroundColor = generaterRandomColor();

           box.querySelector("h3").innerText = getRandomNumber(500);
       })
   }

   parentBox.addEventListener("mousemove" , handleMouseMove);



/*function main(){
    let inc = document.querySelector(".inc");

    let count = 0;
 
    let counter = document.querySelector('h1')
 
    inc.addEventListener("click" , function(){
 
        count = count + 1;
 
         counter.innerText = count ;
    })
 
 
 
    let decrement = document.querySelector(".decrement");
 
    decrement.addEventListener("click" , function(){
 
     count = count - 1
        counter.innerText = count ;
    }
    )
 
    let reset = document.querySelector(".reset");
 
    reset.addEventListener("click" , function(){
        count = 0;
        counter.innerText = count ;
    })
 
 
 
 counter.innerText = count ;
}

main(); */


/*let COLORS = [
        "Red", 
        "Orange ",
        "Yellow ",
        "Green ",
        "Cyan ",
        "Blue ",
        "Purple ",
        "Pink ",
        "White ",
        "Gray ",
        "Brown ",
]

let root = document.querySelector(".buttons")

let h1 = document.querySelector("h1");

function handleClick( colorText , e){
    if( e.shiftKey === true){
        h1.innerText = colorText;
    h1.style.backgroundColor = colorText;

    } else{
        h1.innerText = "Use shift key to change Color";
    }
    
   }


COLORS.forEach((color) =>{

    let div = document.createElement("div");

  

    div.classList.add("box");

    div.addEventListener("click", function(event){
        handleClick(color , event);
    })


        div.style.backgroundColor = color;

        root.append(div);
})

*/