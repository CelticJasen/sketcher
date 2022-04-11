const body = document.querySelector("body");
const pixel = document.createElement("div");
const container = document.createElement("div");
const clearButton = document.createElement("button");

function changeToPixel(){
    this.setAttribute("class", "pixel");
}

function clear(){
    location.reload();
}

pixel.setAttribute("class", "pixel");
container.setAttribute("id", "container");
clearButton.setAttribute("id", "clearButton");
clearButton.innerText = "Clear";

clearButton.addEventListener("click", clear);

body.appendChild(clearButton);

for(let i = 0; i < 4*4; i++){
    container.appendChild(pixel.cloneNode(true));
    console.log("appended pixel");
}

body.appendChild(container);

const allPixels = document.querySelectorAll(".pixel");

for(let i = 0; i < allPixels.length; i++){
    allPixels[i].addEventListener("mouseleave", changeToPixel);

    allPixels[i].addEventListener("mouseover", function(e){
        if(e.buttons == 1){
            allPixels[i].removeEventListener("mouseleave", changeToPixel);
        }
        allPixels[i].setAttribute("class", "coloredPixel");
    });

    allPixels[i].addEventListener("mousedown", function(){
        allPixels[i].removeEventListener("mouseleave", changeToPixel);
    });

    allPixels[i].addEventListener("dragstart", (e) => {
        e.preventDefault();
    });
}
