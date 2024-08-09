let gameSeq = [];
let userSeq = [];

let body=document.querySelector('body');

let btns=["red","yellow","green","purple"];

let started=false;
let level=0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(started==false){
        console.log("game started!");
        started=true;

        levelUp();
    }

});

function gameFlash(btn){
    btn.classList.add('gameflash');
    setTimeout(function(){
        btn.classList.remove('gameflash');
    },250);
};

function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250);
};

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

};

function btnPress(){
    let btn=this;
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    userFlash(btn);
    console.log(userSeq);

    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll('.btn');

for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}


function checkAns(idx){
    //let idx=level-1;
    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=(`GAME OVER! <b>Your score is : ${level}</b> <br> Press any key to start.`);
        gameOver();
        reset();
        // restart();

        
    }
}

function gameOver(){
    body.classList.add('gameover');
    setTimeout(function(){
        body.classList.remove('gameover');
    },250);

};

function reset(){
    started=false;
    gameSeq=[];
    level=0;

}

function restart(){
    body.classList.add('restart');
    setTimeout(function(){
        body.classList.remove('restart');
    },250);
}