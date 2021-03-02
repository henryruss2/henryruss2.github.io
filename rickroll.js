var audio = new Audio('https://henryruss2.github.io/rickroll.mp3');
audio.play();
function closingCode(){
   window.open('https://henryruss2.github.io/rickroll.html', '_blank');
   return null;
}
window.onbeforeunload = closingCode();
