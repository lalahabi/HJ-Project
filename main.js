let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5
let gameOver = false 
let chanceArea = document.getElementById("chance-area")
let history = []

console.log(playButton);

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus",function(){userInput.value=""});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("Correct, computerNum");
}

function play() {
  let userValue = userInput.value;

  if(userValue<1 || userValue>100){
   resultArea.textContent="Enter your guess from 1 to 100"
   return;
  }

  if(history.includes(userValue)){
   resultArea.textContent="You've already entered the number, please use another number."
   return;
  }

  chances --;
  chanceArea.textContent=`You get : ${chances} chances left`
  console.log("chance", chances)
  if (userValue < computerNum) {
    resultArea.textContent = "My number is greater than" + userValue;
  } else if (userValue > computerNum) {
    resultArea.textContent = "My number is less than" + userValue;
  } else {
    resultArea.textContent = "Well Done!";
    gameOver = true
  }

  history.push(userValue)
  console.log(history)


  if(chances < 1){
   gameOver  = true
  }

  if(gameOver == true){
   playButton.disabled = true
  }
}

function reset() {
userInput.value = ""
pickRandomNum();

resultArea.textContent = "결과값이 여기 나옵니다."
}

pickRandomNum();
