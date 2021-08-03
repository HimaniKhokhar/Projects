validEmail=false;
validPhone=false;
validname=false;
let Name=document.getElementById("name");
Name.addEventListener("blur",()=>{
    console.log("name is blurred");

    //validate name here. 
    let reg=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let s = Name.value;
    console.log(reg,s)
    if(reg.test(s)){
        console.log("it matched")
        Name.classList.remove("is-invalid")
        validname=true;
    }
    else{
        console.log("no match")
        Name.classList.add("is-invalid");
        validname=false;
    }
})

let Email=document.getElementById("email")
Email.addEventListener("blur",function(){
    console.log("email is blured")
    let reg=/^([\-\_\.a-zA-Z0-9]+)@([A-Za-z0-9\.\-\_]+)\.([a-zA-Z]){1,10}$/
    let s=Email.value;
    if(reg.test(s)){
        console.log("it matched")
        Email.classList.remove("is-invalid");
        validEmail=true;
    }
    else{
        console.log("doesnt matched");
        Email.classList.add("is-invalid");
        validEmail=false;
    }
})

let Phone=document.getElementById("phone")
Phone.addEventListener("blur",()=>{
    let reg=/([0-9]){10}/;
    let s=Phone.value;
    console.log(reg,s);
    if(reg.test(s)){
        console.log("Your phn is valid");
        Phone.classList.remove("is-invalid")
        validPhone=true;
    }
    else{
        console.log("Your phn is invalid");
        Phone.classList.add("is-invalid")
        validPhonefalse;
    }
})

let Submit=document.getElementById("submit").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("you just clicked submit button");
    console.log(validname,validEmail,validPhone);
    let alert=document.getElementById("alert");
   

    if(validname && validEmail && validPhone){
        let html="";
        console.log("entered data is correct");
        html=`<div id="success" class="alert-success alert dismissible fade" role="alert">
     
        <strong>Success!</strong>Your travel request has been sucessfully submitted
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>
      </div>
  `
         alert.innerHTML=html;
        let success=document.getElementById("success");
        success.classList.add("show");
       
       // Failure.classList.remove("show");
    }
    else{
       
        let html2="";
        console.log("Incorrect data ! please check the data");
        html2=` <div id="failure" class="alert-danger alert dismissible fade show" role="alert">
    
        <strong>Fail!</strong>Your travel request has been failed
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>
      </div>`
      alert.innerHTML=html2;
      let Failure = document.getElementById("failure");
      Failure.classList.add("show");
    //   success.classList.remove("show");
       
        
    }
})