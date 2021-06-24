let form = document.querySelector("form");

console.log( form);

let userInfo ={};

function handleSubmit(event){
    event.preventDefault();
    console.log(form.elements.text)
}


form.addEventListener("submit" , handleSubmit)