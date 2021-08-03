
function getElementFromString(string) {
    let div = document.createElement("div");
    div.innerHTML = string;
    return div.firstElementChild;
}


let Json = document.getElementById("json")     //
Json.addEventListener("click", () => {
    let requestjsonBox = document.getElementById("requestJsonBox")
    requestjsonBox.style.display = "block";
    let parameterBox = document.getElementById("parameterBox");
    parameterBox.style.display = "none";
})

let params = document.getElementById("params")
params.addEventListener("click", () => {
    let requestjsonBox = document.getElementById("requestJsonBox")
    requestjsonBox.style.display = "none";
    let parameterBox = document.getElementById("parameterBox");
    parameterBox.style.display = "block";
})

let addParamsCount = 0;
let addparams = document.getElementById("addParams");
addparams.addEventListener("click", () => {
    let params10 = document.getElementById("params10");

    let string = `
       
        <div class="form-row">
                
                    <div class="col-sm-10 "></div>

                    <div class="row g-3 my-1">
                     <legend class="col-form-label my-1 col-sm-2 pt-0">PARAMETER ${addParamsCount + 2}</legend>
                    
                    <div class="col-md-4">
                        <input type="text" id="parameterKey ${addParamsCount + 2}" class="form-control" placeholder="Enter prameter${addParamsCount + 2} key">
                    </div>
                
                    <div class="col-md-4">
                        <input type="text" id="parameterValue ${addParamsCount + 2}" class="form-control" placeholder="Enter prameter${addParamsCount + 2} value">
                    </div>
                    
                    <button  class="btn-btn-primary deleteparams col-md-1 mx-1 ">-</button>       
                </div>
            </div>
            
    `

//col=md-1 mx-1 helps to align in  a row
//same with col-sm-10 ,it also aligns i guesssss.

    let paramElement = getElementFromString(string);
    params10.appendChild(paramElement)
    addParamsCount++;
 

    let paramsDelete=document.getElementsByClassName("deleteparams");
    for(item of paramsDelete){
        item.addEventListener("click",(e)=>{
            e.target.parentElement.remove();
        })
    }
})

let submit=document.getElementById("submit");
submit.addEventListener("click",()=>{

    document.getElementById("response").value ="please wait.Fetching....";
    // document.getElementById("responsePrism").innerHTML ="please wait.Fetching....";

    let url=document.getElementById("url").value
    let requestType=document.querySelector("input[name='requestType']:checked").value
    let contentType=document.querySelector("input[name='contentType']:checked").value

    if(contentType=="params"){
        data={};
        for(i=0 ; i<addParamsCount+1 ; i++){
                if(document.getElementById("parameterKey" + (i+1))!=undefined){
                    let key=document.getElementById("parameterKey"+(i+1)).value;
                    let value=document.getElementById("parameterValue"+(i+1)).value;
                    data[key]=value;
            }
        }
         data=JSON.stringify(data);           //qki post m data  object ki form m nahi ja skta. toh string m convert krdia
    }
    else{
        data=document.getElementById("json").value;  //
    }
console.log("url = " + url)
console.log("req = "+requestType);
console.log("content = "+contentType);
console.log("data is = "+data);

if(requestType == "GET"){
    fetch(url).then((response)=>{
        return response.text();
    }).then((x)=>{
        document.getElementById("response").value=x;
        // document.getElementById("responsePrism").innerHTML=x;
    })
}

else{
    fetch(url,{
        method:"POST",
        body:data,
        header:{
            'Content-type': 'application/json; charset=UTF-8',
          },
    }).then((response)=>{
        return response.text();
    }).then((data)=>{
       console.log(data)
        document.getElementById("response").value=data;
        // document.getElementById("responsePrism").innerHTML=data;
    })
}





})


    
