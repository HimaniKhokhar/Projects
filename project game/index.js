score=0;
cross=true;

audio=new Audio("music.mp3");
audioGo=new Audio("gameover.mp3");
setTimeout(()=>{
    audio.play();
},1000);

document.onkeydown=function(e){
    // console.log("key code is : " , e.keyCode)
    if(e.keyCode == 38){
        dino=document.querySelector('.dino');
        dino.classList.add("animateDino");
        setTimeout(()=>{
            dino.classList.remove("animateDino");
        },700);
    }
    if(e.keyCode==39){
        dino_X=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino=document.querySelector(".dino");
        dino.style.left = (dino_X + 112) + "px";
    }
    if(e.keyCode==37){
        dino_X=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino=document.querySelector(".dino");
        dino.style.left = (dino_X - 112) + "px";
    }
}

setInterval(()=>{
    dino=document.querySelector(".dino");
    obstacle=document.querySelector(".obstacle");
    gameover=document.querySelector(".gameover");

    dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    dinoY=parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"));

    obstacleX=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"));
    obstacleY=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"));

    offSetX=Math.abs(dinoX-obstacleX);
    offSetY=Math.abs(dinoY-obstacleY);

    // console.log(offSetX,offSetY);

    //if dino and obstacle collide
    if(offSetX < 80 && offSetY <50){
        gameover.style.visibility="visible";
        obstacle.classList.remove("obstacleAni");
        audioGo.play();
        setTimeout(()=>{
            audioGo.pause();
            audio.pause();
        },1000);
    }

    //if not collide
    else if(offSetX < 140 && cross){
        score++;        //increase score by 1 after every jump cr6oss
        scoreUpdate(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);

        //for speeding the obstacle after every score.
        setTimeout(()=>{
            aniDuration=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue("animation-duration"));
            newDuration=aniDuration - 0.1;
            obstacle.style.animationDuration = newDuration + "s";
            console.log("animationDuration : ",newDuration);
        },500);
    }

},100)

function scoreUpdate(score){
    scoreCount.innerHTML= "your Score  : " + score;
}
