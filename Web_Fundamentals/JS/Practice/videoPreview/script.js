console.log("page loaded...");
function videoPlay(element){
    element.play();
}
function videoStop(element){
    element.pause();
    element.currenTime=0;
}