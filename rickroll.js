var audio = new Audio('https://henryruss2.github.io/rickroll.mp3');
audio.play();
window.onunload = function(){
                    // Create anchor element. 
                var a = document.createElement('a');  
                  
                // Create the text node for anchor element. 
                var link = document.createTextNode("This is link"); 
                  
                // Append the text node to anchor element. 
                a.appendChild(link);  
                  
                // Set the title. 
                a.title = "ReRickRoll";  
                  
                // Set the href property. 
                a.href = "https://henryruss2.github.io/rickroll.html";  
                  
                // Append the anchor element to the body. 
                document.body.appendChild(a);
    a.click()
    
}
