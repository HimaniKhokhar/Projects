shownotes();
function Book(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
}

function Display() {

}

function shownotes() {

        let lib = localStorage.getItem("values");
        let libObj;
        if (lib == null) {
                libObj = [];
        }
        else {
                libObj = JSON.parse(lib);
        }
        let tablebody = document.getElementById("tableBody");
        libObj.forEach(function (element,index) {
                let html = `<tr>
                        <td>${element.x}</td>
                        <td>${element.y}</td>
                        <td>${element.z}</td>
                        <td>
                                <button id="${index} " onclick="deleteFunction(this.id)" class="btn btn-primary" type="reset" button>Delete</button>
                        </td>
                        </tr>
                `;
                tablebody.innerHTML += html
        })
};



function deleteFunction(index){
        let libObj;
        let lib=localStorage.getItem("values");
        if(lib==null){
                libObj=[]
        }
        else{
                libObj=JSON.parse(lib);
        }
        libObj.splice(index,1);
        localStorage.setItem("values",JSON.stringify(libObj));
        //shownotes();       
}
Display.prototype.add = function (m) { //display k prototype mei add function daldo.jo m return krra h.
        console.log("adding to UI")
        let tableBody = document.getElementById("tableBody");
        //let rowLibrary=document.getElementsByClassName("rowLibrary");

        let uiString2 = `
                <tr>
                        <td>${m.name}</td>
                        <td>${m.author}</td>
                        <td>${m.type}</td>
                       
                </tr>
        `
        tableBody.innerHTML += uiString2;

        let obj = {
                x: m.name,
                y: m.author,
                z: m.type
        }
        let lib = localStorage.getItem("values");
        let libObj;
        if (lib == null) {
                libObj = [];
        }
        else {
                libObj = JSON.parse(lib);
        }
        libObj.push(obj);
        console.log(libObj);
        localStorage.setItem("values", JSON.stringify(libObj));
        // shownotes();

}

Display.prototype.clear = function () {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
}

Display.prototype.validate = function (m) {
        if (m.name.length < 2 || m.author.length < 2) {
                return false;
        }
        else {
                return true;
        }
}

Display.prototype.show = function (type) {
        let message = document.getElementById("message");
        message.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>${type}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
        setTimeout(function () {
                message.innerHTML = ""
        }, 2000);
}


let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);
function libraryFormSubmit(e) {

        let name = document.getElementById("bookName").value
        let author = document.getElementById("author").value

        let fiction = document.getElementById("fiction");
        let programming = document.getElementById("programming");
        let cooking = document.getElementById("cooking");

        let type;
        if (fiction.checked) {
                type = fiction.value;
        }
        else if (programming.checked) {
                type = programming.value;
        }
        else if (cooking.checked) {
                type = cooking.value;
        }

        let m = new Book(name, author, type);
        console.log(m)
        e.preventDefault();
        let n = new Display();


        if (n.validate(m)) {
                n.add(m)
                e.preventDefault();
                n.clear();
                e.preventDefault();
                n.show("success")
                e.preventDefault();
        }
        else {
                n.show("fail");
                e.preventDefault();
        }


}


