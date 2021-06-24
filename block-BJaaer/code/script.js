let form = document.querySelector("form");



let modal = document.querySelector(".modal_overlay");

console.log(modal);


let modalInfo = document.querySelector(".modalInfo");
console.log(modalInfo);



let userData = {};

form.addEventListener("submit" , (event) =>{
    event.preventDefault();
    let elements = event.target.elements;

    userData.name = elements.name.value;
    userData.email = elements.email.value;
    userData.choice = elements.gender.value;
    userData.color = elements.color.value;
    userData.movie = elements.movie.value;
    userData.book = elements.book.value;
    userData.terms = elements.terms.checked;

    console.log(userData);

    modal.classList.add("open");

    displayInfo(userData);

})

function displayInfo(data ={}){
    modalInfo.innerHTML ="";
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;

    let email = document.createElement("p"); 
    email.innerText = `Email: ${data.email}`;


    let choice = document.createElement("p"); 
    choice.innerText = `movie choice: ${data.choice}`;

    let color = document.createElement("p"); 
    color.innerText = `color: ${data.color}`;

    let movie = document.createElement("p"); 
    movie.innerText = `movie: ${data.name}`;

    let book = document.createElement("p"); 
    book.innerText = `Book: ${data.book}`;

    let terms = document.createElement("p"); 
    terms.innerText = `${
        data.terms
        ? "You have accepted the terms and condition"
        : "you have not accepted the terms and condition"
    }`




    modalInfo.append(h1 , email , choice , color , movie , book , terms);

}
