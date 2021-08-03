const data =[
    {
        name:"himani",
        age:20,
        year:4,
        language:"C",
        image:"https://randomuser.me/api/portraits/women/75.jpg"

    },
    {
        name:"harshit",
        age:20,
        year:4,
        language:"java",
        image:"https://randomuser.me/api/portraits/men/71.jpg"

    },
    {
        name:"Ayush",
        age:19,
        year:3,
        language:"Cpp",
        image:"https://randomuser.me/api/portraits/men/72.jpg"

    },
    {
        name:"Shivani",
        age:21,
        year:4,
        language:"Python",
        image:"https://randomuser.me/api/portraits/women/73.jpg"

    },
    {
        name:"Gourang",
        age:17,
        year:1,
        language:"DBMS",
        image:"https://randomuser.me/api/portraits/men/74.jpg"

    },
]


function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ? 
            {value:profiles[nextIndex++],done:false} : {done:true};
        }
    }
}

const candidates = cvIterator(data);

nextCV();

let next=document.getElementById("next");
next.addEventListener("click",nextCV);

function nextCV() {
    
    const currentCV = candidates.next().value;
    let image=document.getElementById("image");
    let profile=document.getElementById("profile");
    if(currentCV!=undefined){
    image.innerHTML=`<img src="${currentCV.image} ">`;
    profile.innerHTML=`
        <div class="list-group">
    
        <a href="#" class="list-group-item list-group-item-action list-group-item-primary">Name : ${currentCV.name}</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">Age : ${currentCV.age}</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-success">Year : ${currentCV.year}</a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Language : ${currentCV.language}</a>
        
  </div>            
    `
    }
    else{
        alert("You are done with all CV")
        window.location.reload();
    }
}