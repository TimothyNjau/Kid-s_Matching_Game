const canvas = {};
const svg = document.getElementById("svgCont");

canvas["loadImages"] = () => {
    arr = Object.keys(fruitObject);
    objectArr = new Array();
    num = Math.floor(Math.random() * 8);

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
    addLeftImages();
    addRightImages();
}
function addLeftImages() {
    let oddCont = document.querySelector("#odd");
    let i = 0;
    for (let y = 5; y < 321;) {
        let val = objectArr[i];
        for (let key in fruitObject) {
            if (val === key) {
                let url = fruitObject[key];
                let image = document.createElementNS('http://www.w3.org/2000/svg', "image");
                image.setAttribute("class", "images");
                image.setAttribute('href', url);
                image.setAttribute("id", val);
                image.setAttribute("x", "15")
                image.setAttribute("y", `${y}`);
                oddCont.appendChild(image);
                break;
            }
        }
        i++;
        y += 105;
    }
}
function addRightImages() {
    let evenCont = document.querySelector("#even");
    for (let y = 5; y < 321;) {
        let i = Math.ceil(Math.random() * (objectArr.length - 1));
        let val = objectArr.splice(i, 1);
        for (let key in fruitObject) {
            if (val.includes(key)) {
                let url = fruitObject[key];
                let image = document.createElementNS('http://www.w3.org/2000/svg', "image");
                image.setAttribute("class", "images");
                image.setAttribute('href', url);
                image.setAttribute("id", val);
                image.setAttribute("x", "485")
                image.setAttribute("y", `${y}`);
                evenCont.appendChild(image);
                break;
            }
        }
        y += 105;
    }
}

