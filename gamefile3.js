//'use strict';

/*document.querySelector(".message").textContent="Correct Number!";
document.querySelector(".numbers").textContent="13";
document.querySelector(".scorenumber").textContent="10";
document.querySelector(".highscoreNumber").textContent="20";

document.querySelector(".guess").value=23;
console.log(document.querySelector(".guess").value=23);*/
 let numbers=  Math.trunc(Math.random () * 20) + 1;
 let highscore = 0;
 let score =20;
 
document.querySelector('.check').addEventListener('click',function()
{
 let guess = Number(document.querySelector('.guess').value);
 console.log(  guess);
document.querySelector(".message").textContent="Correct Number!";
//when input 0 or not fill.
if(guess==0){
    document.querySelector(".message").textContent=
    "Please enter valid Number!";
// when input is correct.    
}else if(guess===numbers){
    document.querySelector(".message").textContent=
    "Correct Number!";
    document.querySelector(".displayNumbers").textContent=numbers;
document.querySelector('body').style.backgroundColor=' #00FF00';
if(score > highscore){
highscore=score;
document.querySelector('.highscoreNumber').textContent = highscore;
}
//when guess is grater then number.   
}else if(guess > numbers){
document.querySelector(".message").textContent=
" To High !";
score--;
document.querySelector(".scorenumber").textContent=score;
//when guess is less than number.
}else if(guess < numbers){
document.querySelector(".message").textContent=
" To Low !";
score--;
document.querySelector(".scorenumber").textContent=score;
//if counter is 0 and gose to negative count is solve the problem.
}if(score < 1){
    let score = 0;
    document.querySelector(".scorenumber").textContent= score;
    document.querySelector(".message").textContent=
" you loss the game";
document.querySelector('body').style.backgroundColor='#ff0000';
}
});
// again button program.
document.querySelector('.again').addEventListener('click',function(){
   score= 20;
  document.querySelector(".scorenumber").textContent=score;
  document.querySelector(".message").textContent=
  "Start Guessing...";
   numbers=  Math.trunc(Math.random () * 20) + 1;
  document.querySelector(".displayNumbers").textContent='?';
  document.querySelector('body').style.backgroundColor='#ffffff';
});
   