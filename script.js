'use strict';
//selecting the elements
let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");
let score0Ele = document.querySelector("#score--0");
let score1Ele = document.querySelector("#score--1");
let current0El = document.querySelector("#current--0");
let current1El = document.querySelector("#current--1")
let diceEl = document.querySelector(".dice")
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");

//starting condition
score0Ele.textContent=0;
score1Ele.textContent=0
diceEl.classList.add("hidden")

let score;
let currentScore;
let activePlayer;
let playing;

let init = function(){
    score = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing=true;

    score0Ele.textContent=0;
    score1Ele.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;

    diceEl.classList.add('hidden')
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
    
};
init();

const swithcPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}

//Rolling Dice Functionality
btnRoll.addEventListener('click',function(){
    if(playing){
        //Generating a random dice roll
        let dice = Math.trunc(Math.random()*6)+1;

        //Displaying the Dice
        diceEl.classList.remove("hidden");
        diceEl.src=`dice-${dice}.png`;

        //check for rolled 1
        if(dice!==1){
        //adding dice to current score
        currentScore+=dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore
        }else{
        swithcPlayer();
        }
    }
    

})
//Score holding functionality
btnHold.addEventListener('click',function(){
    if(playing){
        score[activePlayer]+=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];

        if(score[activePlayer]>=100){
            diceEl.classList.add("hidden");
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            playing=false;
        }else{
            swithcPlayer();   
        }
    }
})

//Reseting game functionality
btnNew.addEventListener("click",init)