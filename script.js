const body = document.querySelector("body");
const pixel = document.createElement("div");
const container = document.createElement("div");
const clearButton = document.createElement("button");
const pixelDiv = document.createElement("div");

let pixelsPer = 16;

function changeToPixel(){
    this.setAttribute("class", "pixel");
}

function clear(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }

    pixelsPer = Number(prompt("Please enter the number of pixels per dimension"));
    while(isNaN(pixelsPer) || pixelsPer < 1){
        pixelsPer = prompt("That wasn't a proper number... Please enter the number of pixels per dimension");
    }
    if(pixelsPer > 100){
        pixelsPer = 100;
    }

    createGrid();
}

function createGrid(){
    for(let i = 0; i < pixelsPer; i++){
        let clonePixelDiv = pixelDiv.cloneNode(true);

        for(let j = 0; j < pixelsPer; j++){
            clonePixelDiv.appendChild(pixel.cloneNode(true));
        }

        container.appendChild(clonePixelDiv);
    }

    body.appendChild(container);

    applyListeners();
}

function applyListeners(){
    let allPixels = document.querySelectorAll(".pixel");

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
}

pixel.setAttribute("class", "pixel");
pixelDiv.setAttribute("class", "pixelDiv");
container.setAttribute("id", "container");
clearButton.setAttribute("id", "clearButton");
clearButton.innerText = "Clear";
clearButton.addEventListener("click", clear);

body.appendChild(clearButton);

createGrid();
