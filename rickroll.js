var audio = new Audio('https://henryruss2.github.io/rickroll.mp3');
audio.play();
window.onbeforeunload = closingCode;
function closingCode(){
   window.open('https://henryruss2.github.io/rickroll.html', '_blank');
   return null;
}