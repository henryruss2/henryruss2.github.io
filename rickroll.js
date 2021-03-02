var audio = new Audio('https://henryruss2.github.io/rickroll.mp3');
audio.play();
window.onbeforeunload = function(){
    window.open('https://henryruss2.github.io/rickroll.html', '_blank');
    return false;
}
