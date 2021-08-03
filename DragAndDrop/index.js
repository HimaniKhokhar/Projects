console.log("drag and drop")

let imgbox=document.querySelector(".imgbox")
imgbox.addEventListener("dragstart",(e)=>{
    console.log("drag start");
    e.target.className +=" hold";    //need to makle a hold class in css
    setTimeout(()=>{
        e.target.className = "hide";    //need to makle a hide class in css
    },0)
  
})
imgbox.addEventListener("dragend",(e)=>{
    console.log("drag end");
    e.target.className="imgbox";
})

let whitebox=document.getElementsByClassName("whitebox")
for(x of whitebox){
    x.addEventListener("dragover",(e)=>{
        e.preventDefault();
        console.log("drag over.......");
    })

    x.addEventListener("dragenter",(e)=>{
        console.log("drap entered")
        e.target.className +=" dashed"; //dashed is just a class in css to make dashed border for an image
    })

    x.addEventListener("dragleave",(e)=>{
        console.log("drag leave")
        e.target.className="whitebox";       //when we remove the image from any particular box,it will make it white.
    })

    x.addEventListener("drop",(e)=>{
        console.log("drag drop")
        // e.target.className=imgbox;
        // e.preventDefault();
        e.target.append(imgbox)
    })
}