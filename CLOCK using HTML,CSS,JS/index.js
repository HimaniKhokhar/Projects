//Count Seconds :
//60 sec=360 degree rotation
//1 sec=360/60=>6
//s seconds = ( 6*s )degree

//Count minutes :
//60 min=360 degree rotation
// 1 min = 360/60=>6
// m min = 6m degree

//Count hours :
//12 hours=360 degree rotation
//1 hour=360/12=>30 degree
// h hour = 30h degree
//Also, in every hour minutes and seconds changes but seconds are negligible 
//so calculate minutes,

//In 60 min an hour hand for 30 degree only
//60 min=30 degree
//1 min = 1/2 degree
// m min=1/2m degree 

//Total Hours Count = 30h + 1/2m 

setInterval(function(){

    date=new Date();
   
    hourTime=date.getHours();
    minTime=date.getMinutes();
    secTime=date.getSeconds();

    hourRotation=30*hourTime + minTime/2;
    minRotation=6*minTime;
    secRotation=6*secTime;

    hour.style.transform=`rotate(${hourRotation}deg)`;
    minute.style.transform=`rotate(${minRotation}deg)`;
    second.style.transform=`rotate(${secRotation}deg)`;

},1000);