
let selectedImage = [], answerImage;
let myAudio = new Audio();

let g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
g.setAttribute("class", "finalPath");
svg.prepend(g);

loadBtn.addEventListener("click", () => {
    navBar.style.background = "linear-gradient(to left, rgb(231, 168, 168),rgb(100,200,200))";
    removeLines();

})
function startGame() {
    oddCont = document.getElementById("odd"), evenCont = document.getElementById("even");

    while (oddCont.firstChild) {
        oddCont.removeChild(oddCont.firstChild);
    }
    while (evenCont.firstChild) {
        evenCont.removeChild(evenCont.firstChild);
    }

    canvas.loadImages(gameObject);
    canvas.addFunctionality();
    setInterval(canvas.compareImages(), 1000);
}

canvas["addFunctionality"] = () => {
    let imageElem = document.querySelectorAll(".imagePoint");
    imageElem.forEach(elem => {
        let flag = false;
        let startX, startY;
        let line = document.createElementNS('http://www.w3.org/2000/svg', "path");

        elem.addEventListener("click", draw);
        svg.addEventListener("mousemove", drawing);
        svg.addEventListener("mouseup", stopDrawing);

        function draw() {
            elem.style.filter = 'drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.8))';
            let imageDimension = elem.getBoundingClientRect();
            let imageX, imageY;

            imageX = imageDimension.x + (imageDimension.width / 2);
            imageY = imageDimension.y + (imageDimension.height / 2);

            if (elem.parentElement.id === "odd") {
                startDraw(imageX, imageY);
                selectedImage.push(elem.id);
            }
            function startDraw(x, y) {
                line.setAttribute("stroke-width", "10");
                line.setAttribute("stroke-linecap", "round");
                line.setAttribute("id", "line");
                line.setAttribute("class", "line");
                if (!flag) {
                    startX = x - svg.getBoundingClientRect().x;
                    startY = y - svg.getBoundingClientRect().y;
                    let color = elem.attributes.fill.value;
                    line.setAttribute("stroke", `${color}`);
                    line.setAttribute("d", `M ${startX} ${startY}`);
                    flag = true;
                }
                return flag;
            }
            elem.removeEventListener("click", draw);
        }
        function drawing(event) {
            if (flag) {
                //let line = svg.querySelector("#line");
                var mouseX = event.offsetX;
                var mouseY = event.offsetY;
                var dx, dy;
                dx = mouseX - startX;
                dy = mouseY - startY;
                line.setAttribute("d", `M ${startX} ${startY}  L ${startX + dx} ${startY + dy}`);
                g.prepend(line);
            }
        }
        function stopDrawing() {
            if (flag) {
                flag = false;
            }
        }
    })
}
canvas["compareImages"] = () => {
    let imageElem = document.querySelectorAll(".imagePoint");
    answerImage = [];
    imageElem.forEach(elem => {
        if (elem.parentElement.id === "even") {
            elem.addEventListener("click", () => {
                let lineDim = svg.querySelector(".line").getBoundingClientRect();
                let elemDim = elem.getBoundingClientRect();
                //The following code is for line drawn between images along same axis
                if (lineDim.right > elemDim.left && elemDim.bottom > lineDim.bottom && lineDim.top > elemDim.top) {
                    answerImage.push(elem.id);
                } else if (lineDim.right > elemDim.left && elemDim.bottom > lineDim.bottom && elemDim.top > lineDim.top) {
                    answerImage.push(elem.id);
                } else if (lineDim.top > elemDim.top && lineDim.bottom > elemDim.bottom && lineDim.right > elemDim.left) {
                    //This code is for images which are above the line
                    answerImage.push(elem.id);
                    return;
                }
            })
        }
    })
}
let choices = () => {
    let pass = 0, fail = 0;
    let lineArr = svg.querySelectorAll(".line");
    let y = selectedImage.length - 1;
    for (let x = 0; x < selectedImage.length; x++) {
        if (selectedImage[x] == answerImage[x]) {
            lineArr[y].setAttribute("stroke", "green");
            pass++;
            let correctLabel = document.getElementById("correctScoreLabel");
            correctLabel.innerText = pass;
        } else {
            lineArr[y].setAttribute("stroke", "red");
            fail++;
            let failLabel = document.getElementById("wrongScoreLabel");
            failLabel.innerText = fail;
        }
        y--;
    }
    if (fail > 0) {
        myAudio.src = "../static/sounds/wrong-choice-one.mp3";
        myAudio.play();        
    } else {
        myAudio.src = "../static/sounds/correct-choice.mp3"
        myAudio.play();
    }

    setTimeout(removeLines, 3000);
}
function removeLines() {
    svg.querySelectorAll(".line").forEach(path => {
        path.remove();
    });
    selectedImage = [], answerImage = [];
    let failLabel = document.getElementById("wrongScoreLabel");
    let correctLabel = document.getElementById("correctScoreLabel");
    failLabel.innerText = "";
    correctLabel.innerText = "";
    startGame();
}
matchBtn.addEventListener("click", choices);

canvas["continueGame"] = () => {
    if (count == 4) {
        myAudio.src = "static/sounds/correct-choice-two.mp3";
        myAudio.play();
        svg.removeChild(svg.lastElementChild);
        document.getElementById("line").setAttribute("d", "");
        let arr = svg.getElementById("odd").children;
        for (i = 0; i < arr.length; i++) {
            svg.getElementById("odd").removeChild(arr[i]);
        }
        svg.getElementById("odd").childNodes.forEach(val => {
            val.remove();
        })
    }
}

backBtn.addEventListener("click", () => {
    let gameCont = document.querySelector(".gameCont");
    let category = document.querySelector(".categories");
    let gameControl = document.querySelector(".gameControl");
    let oddCont = document.getElementById("odd");
    let evenCont = document.getElementById("even");
    navBar.style.background = "radial-gradient(rgb(235, 217, 62), rgb(255, 116, 62))";
    selectedImage = [];

    svg.querySelectorAll(".line").forEach(path => {
        path.remove();
    });
    while (oddCont.firstChild) {
        oddCont.removeChild(oddCont.firstChild);
    }
    while (evenCont.firstChild) {
        evenCont.removeChild(evenCont.firstChild);
    }
    gameCont.style.height = "2vh";
    category.style.transform = "translateY(0%)";
    gameControl.style.left = "-100%";

})


