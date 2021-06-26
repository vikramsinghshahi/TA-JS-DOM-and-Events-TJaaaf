let form = document.querySelector("form")

let userInfo = {};

let errorMessages = {};


function displayError(name){

  

    let ele = form.elements[name];
    ele.nextElementSibling.innerText = errorMessages[name];
    ele.parentElement.classList.add("error");
};


function displaySuccess(name){

    

   let ele = form.elements[name];
  //  console.dir(ele);

    ele.nextElementSibling.innerText = "";
    errorMessages[name] = "";
    ele.parentElement.classList.remove("error");

    ele.parentElement.classList.add("success");
};



function handleSubmit(event){
    event.preventDefault();
    let elements = event.target.elements;

    const username = elements.username.value;

    const name = elements.name.value;

    const email = elements.email.value;
    const phone = elements.phone.value;
    const password = elements.password.value;

    const passwordCheck = elements["password-check"].value;

    console.log({username ,name ,email ,phone , password, passwordCheck});
    
//1. Username can't be less than 4 characters
    
     if ( username.length <4 ){
        errorMessages.username = "Username can't be less then 4 charactors" 
        displayError("username")
     } else {
         displaySuccess("username");
     };
   
//2. Name can't be numbers
    if ( !isNaN(name)){
        errorMessages.name = "Name can't be number" ;

        displayError("name");
    } else {
        displaySuccess("name");
    }

//3. Email must contain the symbol `@`
    if ( !email.includes('@')){
        errorMessages.email = "email must contain the symbol @" ;

        displayError("email");
    } else if( email.length < 6){
        errorMessages.email = "email must be atleast 6 character" ;
        displayError("email");
    }
    else {
        displaySuccess("email");
    }


//4. Email must be at least 6 characters

//5. Phone numbers can only be a number
        if ( isNaN(phone)){
            errorMessages.phone = "Phone numbers can only be a number" ;

            displayError("phone");

        } else if( phone.length < 7){
            errorMessages.phone = "Length of phone number can't be less than 7" ;
            displayError("phone");
        }
        else {
            displaySuccess("phone");
        }
//6. Length of phone number can't be less than 7
//8. Password and confirm password must be same.
        if ( password !== passwordCheck){
            errorMessages.password = " Password and confirm password must be same" ;
            errorMessages["password-check"] = 
            "Password and confirm password must be same" ;

            displayError("password");
            displayError("password-check");
        } else{
            
            displaySuccess("password");
            displaySuccess("password-check");
            
        }



}

form.addEventListener("submit" , handleSubmit)