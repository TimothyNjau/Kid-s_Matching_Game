const canvas = {};
const svg = document.getElementById("svgCont");
let gameObject = {};
categoryBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        let gameCont = document.querySelector(".gameCont");
        gameCont.style.height = "75vh";

        let category = document.querySelector(".categories");
        category.style.transform = "translateY(-150%)";

        let gameControl = document.querySelector(".gameControl");
        gameControl.style.left = "0";

        switch (btn.id) {
            case "shapes":
                gameObject = shapeObject;
                break;
            case "numbers":
                gameObject = numberObjet;
                break;
            case "letters":
                gameObject = letterObject;
                break;
            default:
                gameObject = fruitObject;
        }
    }, false)
})

let generateColors = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

canvas["loadImages"] = (object) => {
    arr = Object.keys(object);
    objectArr = new Array();
    num = Math.floor(Math.random() * arr.length);

    for (let i = 0; i < 4; i++) {
        let imageKey;
        if (num > 4) {
            if (num < arr.length) {
                imageKey = arr[num];
                objectArr.push(imageKey);
            } else if (num >= arr.length) {
                num = 0;
                imageKey = arr[num];
                objectArr.push(imageKey);
            }
        } else if (num <= 4) {
            imageKey = arr[num];
            objectArr.push(imageKey);
        }
        num++;
    }
    addLeftImages(object);
    addRightImages(object);
}
function addLeftImages(elemObject) {
    let oddCont = document.querySelector("#odd");
    let i = 0;
    for (let y = 5; y < 336;) {
        let val = objectArr[i];
        for (let key in elemObject) {
            if (val === key) {
                let url = elemObject[key][0];
                let image = document.createElementNS('http://www.w3.org/2000/svg', "image");
                image.setAttribute("class", "images");
                image.setAttribute('href', url);
                image.setAttribute("x", "15");
                image.setAttribute("height", "10rem")
                image.setAttribute("width", "4rem");
                image.setAttribute("y", `${y}`);

                let circle = document.createElementNS('http://www.w3.org/2000/svg', "circle");
                let color = generateColors();
                circle.setAttribute("cx", "135");
                circle.setAttribute("cy", `${y + 80}`);
                circle.setAttribute("r", "15");
                circle.setAttribute("id", val);
                circle.setAttribute("class", "imagePoint");
                circle.setAttribute("fill", `${color}`);

                oddCont.appendChild(image);
                oddCont.appendChild(circle);
                break;
            }
        }
        i++;
        y += 110;
    }
}
function addRightImages(elemObject) {
    let evenCont = document.querySelector("#even");
    for (let y = 5; y < 336;) {
        let i = Math.ceil(Math.random() * (objectArr.length - 1));
        let val = objectArr.splice(i, 1);
        for (let key in elemObject) {
            if (val.includes(key)) {
                let url = elemObject[key][1];
                let image = document.createElementNS('http://www.w3.org/2000/svg', "image");
                image.setAttribute("class", "images");
                image.setAttribute('href', url);
                image.setAttribute("id", val);
                image.setAttribute("x", "485")
                image.setAttribute("y", `${y}`);

                let circle = document.createElementNS('http://www.w3.org/2000/svg', "circle");
                let color = generateColors();
                circle.setAttribute("cx", "450");
                circle.setAttribute("cy", `${y + 80}`);
                circle.setAttribute("r", "15");
                circle.setAttribute("id", val);
                circle.setAttribute("class", "imagePoint");
                circle.setAttribute("fill", `${color}`);

                evenCont.appendChild(circle);
                evenCont.appendChild(image);
                break;
            }
        }
        y += 110;
    }
}
