let addBtn=document.getElementById("button_id")
addBtn.addEventListener("click",function(e){

    let addTxt=document.getElementById("addTxt");
    let addTitle=document.getElementById("addTitle");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let m={
        title:addTitle.value,
        text:addTxt.value
    }
    notesObj.push(m);
    localStorage.setItem("notes",JSON.stringify(notesObj))
    addTxt.value= "";
    console.log(notesObj);
    shownotes();
}); 

function shownotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[]
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let a="";
    notesObj.forEach(function(element,index)  {

        a += `
            <div class="noteCard mx-2" style="width: 15rem;">     
                <div class="card-body">
                <h5 class="card-title">Note ${element.title} </h5>
              <br>  <p class="card-text"> ${element.text} </p>
                <button id="${index}" onclick="deleteFunction(this.id)" class="btn btn-primary">Delete note</button>
            </div>
        </div>`

});
let notesEle=document.getElementById("notes");
if(notes.length!=0){
    notesEle.innerHTML=a;
}
else{
        notesEle.innerHTML==`Nothing to show! "Add a note"`
    }
}
function deleteFunction(index){
    console.log("deleted index ",index);

    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj))
    shownotes();
}

let search=document.getElementById("inputTxt");
search.addEventListener("input",function(){
    let inputVal=search.value;
    //console.log("input event fired !",inputVal)

    let noteCards=document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let x = element.getElementsByTagName("p")[0].innerText;
        if(x.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        
        console.log(x);
    })

})



