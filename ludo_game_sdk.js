function onGameError(){
    Android.onGameError();
}
function onGameStart(){
     Android.onGameStart();
}
function onGameRestart(){
     Android.onGameRestart();
}
function onGamePause(){
     Android.onGamePause();
}
function onGameResume(){
     Android.onGameResume();
}
function onGameQuit(){
     Android.onGameQuit();
}
function playerCountSelected(){
      Android.playerCountSelected();
}
function backToHome(){
      Android.backToHome();
}
function selectionScreen(){
       Android.selectionScreen();
}
function userWantSix(){
      Android.userWantSix();

}
function firstScreenPlay(){
      Android.firstScreenPlay();

}

function onGameEnd(score) {
//      Android.onGameEnd();
      Android.onGameEnd(score);
       console.log("game complete: onGameEnd() ", score);
          if (!score) {
            console.log("game complete: onGameEnd() no value ", score);
          }
    // window.topScore is integer
    if (window.DroidHandler) {
      window.DroidHandler.onGameEnd(score);
    }
  }