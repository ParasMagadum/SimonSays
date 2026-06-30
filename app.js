
let higgestScore=0;
let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let started =false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
}); 

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
};

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
};
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level${level}`;

    //choose random button
    let randIndex=Math.floor(Math.random()*btns.length);
    let randColor=btns[randIndex];
    let randButton=document.querySelector(`.${randColor}`);
    console.log(randButton);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randButton);
};

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    cheakAns(userSeq.length-1);

}

function cheakAns(idx){
   
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length== gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game over!! your score was <b>${level}<b>.<br>Press any key to star again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns ){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}