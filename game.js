// Iteration 2: Generate 2 random number and display it on the screen

let number1=Math.round(Math.random()*100);
let number2=Math.round(Math.random()*100);

let numberbox1=document.getElementById("number1");
let numberbox2=document.getElementById("number2");

numberbox1.innerText=number1;
numberbox2.innerText=number2;
console.log(number1,number2);

// Iteration 3: Make the options button functional

let greaterthan=document.getElementById("greater-than");
let lesserthan=document.getElementById("lesser-than");
let equalto=document.getElementById("equal-to");
let score=0;

greaterthan.onclick=()=>{
    if(number1>number2){
        score++;
        resetTime(timerId);
    }else{
        location.href="./gameover.html";
    }
    number1=Math.round(Math.random()*100);
    number2=Math.round(Math.random()*100);
    numberbox1.innerText=number1;
    numberbox2.innerText=number2;
}

lesserthan.onclick=()=>{
    if(number1<number2){
        score++;
        resetTime(timerId);
    }else{
        location.href="./gameover.html";
    }
    number1=Math.round(Math.random()*100);
    number2=Math.round(Math.random()*100);
    numberbox1.innerText=number1;
    numberbox2.innerText=number2;
}

equalto.onclick=()=>{
    if(number1==number2){
        score++;
        resetTime(timerId);
    }else{
        location.href="./gameover.html";
    }
    number1=Math.round(Math.random()*100);
    number2=Math.round(Math.random()*100);
    numberbox1.innerText=number1;
    numberbox2.innerText=number2;
}


// Iteration 4: Build a timer for the game

let time=5;
let timer=document.getElementById("timer");
let timerId;


function startTimer(){
    time=5;
    timer.innerText
    timerId=setInterval(()=>{
        time--;
        if(time==0){
            location.href="./gameover.html"
        }
        timer.innerText=time;
        localStorage.setItem("gamescore",score)
    },1000)
}

startTimer();


function resetTime(){
    clearInterval(timerId);
    startTimer();
}