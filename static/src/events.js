/*
startBtn.addEventListener("click", ()=> {
    gameCont.style.transition = "height 5s ";
    startBtn.style.transition = "visibility 3s ease"
   // navBar.style.transition = "all 3s cubic-bezier(0.07, 0.37, 0.99, 0.52) 0s";

    gameCont.style.height = "70vh";
    navBar.style.background = "linear-gradient(to left, rgb(231, 168, 168),rgb(100,200,200))";
    startBtn.style.visibility = "hidden";
})*/
window.onload = canvas.loadImages();

let imageElem = document.querySelectorAll(".images");
let selectedImage, answerImage;
let myAudio = new Audio();
let count = 0;
let g = document.createElementNS('http://www.w3.org/2000/svg', 'g'); 
g.setAttribute("class","finalPath"); 
svg.prepend(g);

canvas["addFunctionality"] = () => {
    imageElem.forEach(elem => {
        let flag = false;
        let startX, startY;
        elem.addEventListener("click", () => {
            elem.style.filter = 'drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.8))';
            let imageDimension = elem.getBoundingClientRect();
            let imageX, imageY;
    
            imageX = imageDimension.right
            imageY = imageDimension.y + (imageDimension.height / 2);
    
            if (elem.parentElement.id === "odd") {
                startDraw(imageX, imageY);
                selectedImage = elem.id;
            }
            function startDraw(x, y) {
                let line = document.getElementById("line");
                if (!flag) {
                    startX = x - svg.getBoundingClientRect().x;
                    startY = y - svg.getBoundingClientRect().y;
                    line.setAttribute("stroke", "aqua");
                    line.setAttribute("d", `M ${startX} ${startY}`);
                    flag = true;
                }
                return flag;
            }
        })
        svg.addEventListener("mousemove", drawing);
        svg.addEventListener("mouseup", stopDrawing);
        function drawing(event) {
            if (flag) {
                var mouseX = event.offsetX;
                var mouseY = event.offsetY;
                var dx, dy;
                dx = mouseX - startX;
                dy = mouseY - startY;
                line.setAttribute("d", `M ${startX} ${startY}  L ${startX + dx} ${startY + dy}`);
            }
        }
        function stopDrawing() {
            if (flag) {
                flag = false;
            }
        }
    
    })
}
canvas.addFunctionality();
canvas["compareImages"] = () => {
    imageElem.forEach(elem => {
        if (elem.parentElement.id === "even") {
            elem.addEventListener("click", () => {
                let lineDim = document.getElementById("line").getBoundingClientRect();
                let elemDim = elem.getBoundingClientRect();
                //The following code is for line drawn between images along same axis
                if (lineDim.right > elemDim.left && elemDim.bottom > lineDim.bottom && lineDim.top > elemDim.top) {
                    console.log("Line at " + elem.id);
                    answerImage = elem.id;
                    choices(selectedImage, answerImage);
                } else if (lineDim.right > elemDim.left && elemDim.bottom > lineDim.bottom && elemDim.top > lineDim.top) {
                    console.log("Line at " + elem.id);
                    answerImage = elem.id;
                    choices(selectedImage, answerImage);
                } else if (lineDim.top > elemDim.top && lineDim.bottom > elemDim.bottom && lineDim.right > elemDim.left) {
                    //This code is for images which are above the line
                    console.log("Line at " + elem.id);
                    answerImage = elem.id;
                    choices(selectedImage, answerImage);
                    return;
                }
            })
            function choices(x, y) {
                if (x === y) {
                    line.setAttribute("stroke", "green");
                    count++;
                    myAudio.src = "/static/sounds/correct-choice.mp3"
                    myAudio.play();
                    newPath();
                } else {
                    line.setAttribute("stroke", "red");
                    myAudio.src = "/static/sounds/wrong-choice-one.mp3"
                    myAudio.play();
                }
                return count;
            }
        }
    })
}
function newPath(){
    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path'); 
    let line = document.getElementById("line");
    
    for (let i = 0; i <line.attributes.length; i++){
        let attr = line.attributes[i];
        if (attr.name != "id"){
            path.setAttribute(attr.name,attr.value);
        }        
    }
    g.append(path);
}
let myInterval = setInterval(canvas.compareImages(), 1000);
canvas["continueGame"] = () => {
    if(count == 4){
        myAudio.src = "static/sounds/correct-choice-two.mp3";
        myAudio.play();
        svg.removeChild(svg.lastElementChild);
        document.getElementById("line").setAttribute("d","");
        svg.removeChild(svg.getElementsByClassName("images")); 
    }
}
loadBtn.addEventListener("click", () => {
    canvas.continueGame();
    canvas.loadImages();
    canvas.addFunctionality();
    canvas.compareImages();
})
canvas.continueGame();


