var character = document.getElementById("character");
var block = document.getElementById("block");
var HighScore = document.getElementById("HighScore");

function jump () {
  if(character.classList !="animate"){
  character.classList.add("animate");
  }
  setTimeout(function(){
    character.classList.remove("animate");
  },500);
}

var i=0;
var checkDead = setInterval (function(){
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue ("top"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue ("left"));

  if(blockLeft < 20 && blockLeft > 0 && characterTop > 130){
    block.style.animation ="none";
    block.style.display ="none";
    // alert("Game Over");
    GameOver.innerHTML = "Game Over";
  }
  if(blockLeft < 10) i++;
  HighScore.innerHTML = i;
  
},20);
 
 
function kp(event) {
  var key = event.keyCode;
  if(key==32) jump();
  if (key==82) restart();
  
  // (alert(key);
}

function restart() {
  location.reload();
  }
  
function HighScore() {
  //location.();
  }
