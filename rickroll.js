var audio = new Audio('https://henryruss2.github.io/rickroll.mp3');
audio.play();
window.onunload = function(){
    window.open('https://henryruss2.github.io/rickroll.html', '_blank');
    return false;
}
