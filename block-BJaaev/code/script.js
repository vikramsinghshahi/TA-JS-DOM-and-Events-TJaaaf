function main(){

let inputText = document.querySelector("#text");


let root = document.querySelector("ul");

let allTodos = JSON.parse(localStorage.getItem("todos")) ||  [];

function handleInput(event){
    if( event.keyCode ===13 && event.target.value !== ""){
        let todo ={
            name: event.target.value,
            isDone: false,
        }
        allTodos.push(todo);

        event.target.value ="";

        createUI(allTodos , root);
    }

    localStorage.setItem(
        "todos", JSON.stringify(allTodos));
}


function handleDelete(event){
     let id = event.target.dataset.id;

     allTodos.splice(id , 1);

     localStorage.setItem("todos", JSON.stringify(allTodos));

     createUI(allTodos , root);

}

function handleToggle(event){
    let id = event.target.dataset.id;

    allTodos[id].isDone = !allTodos[id].isDone;

    localStorage.setItem("todos", JSON.stringify(allTodos));

    createUI(allTodos , root);
}

function createUI(data , rootElm){

    rootElm.innerHTML ="";

    data.forEach((todo , index) =>{
        let li = document.createElement("li");

        let input = document.createElement("input");
    
        input.type = "checkbox";
    
        input.checked = todo.isDone;
    
        input.addEventListener("input" , handleToggle);

        input.setAttribute("data-id" , index);
    
        let p = document.createElement("p");
    
        p.innerText = todo.name;
    
        let span = document.createElement("span");
        span.innerText = "x";

        span.addEventListener("click" , handleDelete);
        span.setAttribute("data-id" , index)
    
        li.append( input , p , span);
    
        rootElm.append(li);

    });


};

createUI( allTodos , root);
inputText.addEventListener("keyup" , handleInput);

};

main();