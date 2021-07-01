function main(){

    let inputText = document.querySelector("#text");
    
    
    let root = document.querySelector("ul");
    
    let all = document.querySelector(".all");
    let active = document.querySelector(".active");
    let completed =document.querySelector(".completed");
    
    let clear = document.querySelector(".clear");
    
    
    
    let activeButton = "all";
    
    //let allTodos = JSON.parse(localStorage.getItem("todos")) ||  [];
    
    let allTodos = localStorage.getItem("allTodos")
                   ? JSON.parse(localStorage.getItem("allTodos"))
                   :[]; //{ name: "learning Dom" , isDone : true},
                     //{ name: "basketball" , isDone : false},
                     //{ name: "cricket" , isDone : true},
                    
    
    function handleInput(event){
        if( event.keyCode ===13 && event.target.value !== ""){
            let todo ={
                name: event.target.value,
                isDone: false,
            }
            allTodos.push(todo);
    
            event.target.value ="";
    
            createUI();
    
            localStorage.setItem("allTodos", JSON.stringify(allTodos));
        }
    
       // localStorage.setItem("allTodos", JSON.stringify(allTodos));
    }
    
    
    function handleDelete(event){
         let id = event.target.dataset.id;
    
         allTodos.splice(id , 1);
    
         localStorage.setItem("allTodos", JSON.stringify(allTodos));
    
         createUI();
    
    }
    
    function handleToggle(event){
        let id = event.target.dataset.id;
    
        allTodos[id].isDone = !allTodos[id].isDone;
    
        localStorage.setItem("allTodos", JSON.stringify(allTodos));
    
        createUI();
    }
    
    function createUI( data = allTodos){
    
        root.innerHTML ="";
    
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
        
            root.append(li);
    
        });
    
    
    };
    
    createUI();
    
    //all.classList.add("selected");
    
    clear.addEventListener("click" ,() =>{
      allTodos =  allTodos.filter(todo => !todo.isDone);
    
      createUI();
      
      localStorage.setItem("allTodos", JSON.stringify(allTodos));
    
    });
    
    
    active.addEventListener("click" , ()=>{
          let notCompleted =  allTodos.filter((todo) => !todo.isDone);
          createUI(notCompleted);
    
          activeButton = "active";
    
          updateActiveButton();
    
    });
    
    
    completed.addEventListener("click" , ()=>{
        let completed =  allTodos.filter((todo) => todo.isDone);
        createUI(completed);
    
        activeButton = "completed";
    
        updateActiveButton();
    
    });
    
    
    all.addEventListener("click" , ()=>{
        createUI();
    
        activeButton = "all";
    
        updateActiveButton();
    
    });
    
    
    function updateActiveButton(btn = activeButton){
        all.classList.remove("selected");
        active.classList.remove("selected");
        completed.classList.remove("selected");
    
        if(btn === "all"){
            all.classList.add("selected")
        } if(btn === "active"){
            active.classList.add("selected")
        } if(btn === "completed"){
            completed.classList.add("selected")
        }
    
    }
    
    updateActiveButton();
    
    inputText.addEventListener("keyup" , handleInput);
    
    
    
    };
    
    main();