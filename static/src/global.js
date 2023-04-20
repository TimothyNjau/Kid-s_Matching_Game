const startBtn = document.querySelector("#startBtn"),
    gameCont = document.querySelector(".gameCont"),
    navBar = document.querySelector(".navBar"),
    loadBtn = document.querySelector("#loadBtn"),
    categoryBtn = document.querySelectorAll(".categoryBtn"),
    backBtn = document.getElementById("backBtn"),
    matchBtn = document.querySelector(".matchBtn");




let fruitObject = {
    "mango": ['static/images/fruits/mango.jpg'],
    "apple": ['static/images/fruits/apple.jpg'],
    "pear": ['static/images/fruits/pear.jpg'],
    "peach": ['static/images/fruits/peach.jpg'],
    "banana": ['static/images/fruits/Banana.png'],
    "orange": ['static/images/fruits/orange.jpg'],
    "berry": ['static/images/fruits/berry.jpg'],
    "guava": ['static/images/fruits/guava.jpg']
}
let shapeObject = {
    "circle": ['static/images/shapes/circle.jpg','static/images/shapes/circleShape.jpg'],
    "rectangle": ['static/images/shapes/rectangle.jpg','static/images/shapes/rectangleShape.png'],
    "triangle": ['static/images/shapes/triangle.png','static/images/shapes/triangleShape.png'],
    "hexagon": ['static/images/shapes/hexagon.png','static/images/shapes/hexagonShape.png'],
    "star": ['static/images/shapes/star.png','static/images/shapes/starShape.jpg'],
    "oval": ['static/images/shapes/oval.png','static/images/shapes/ovalShape.jpg'],
    "square":['static/images/shapes/square.jpg','static/images/shapes/squareShape.jpg'],

}
let numberObjet = {
    "one": ["static/images/numbers/one.png", "static/images/numbers/set-1.webp"],
    "two": ["static/images/numbers/two.jpg", ' static/images/numbers/set-2.webp'],
    "three": ['static/images/numbers/three.png', 'static/images/numbers/set-3.jpg'],
    "four": ['static/images/numbers/four.png','static/images/numbers/set-4.webp'],
    "five": ['static/images/numbers/five.jpg', 'static/images/numbers/set-5.jpg'],
    "six": ['static/images/numbers/six.jpg', 'static/images/numbers/set-6.png'],
    "seven": ['static/images/numbers/seven.jpg', 'static/images/numbers/set-7.webp'],
    "eight": ['static/images/numbers/eight.jpg', 'static/images/numbers/set-8.jpg'],
    "nine": ['static/images/numbers/nine.jpg', 'static/images/numbers/set-9.jpg']
}

let letterObject = {
    "A":["static/images/letters/letter-a.jpg", "static/images/letters/associated/a.jpg"],
    "B": [" static/images/letters/letter-b.jpg", "static/images/letters/associated/b.png"],
    "C":["static/images/letters/letter-c.jpg ", "static/images/letters/associated/c.jpg"],
    "D":[" static/images/letters/letter-d.jpg", "static/images/letters/associated/d.png "],
    "E":["static/images/letters/letter-e.jpg ", "static/images/letters/associated/e.jpg"],
    "F":["static/images/letters/letter-f.jpg ", "static/images/letters/associated/f.png"],
    "G":["static/images/letters/letter-g.jpg ", "static/images/letters/associated/g.jpg"],
    "H":["static/images/letters/letter-h.jpg ", "static/images/letters/associated/h.jpg"],
    "I":["static/images/letters/letter-i.jpg ", "static/images/letters/associated/i.jpg"],
    "J":["static/images/letters/letter-j.jpg ", "static/images/letters/associated/j.jpg"],
    "K":["static/images/letters/letter-k.jpg ", "static/images/letters/associated/k.jpg"],
    "L":["static/images/letters/letter-l.jpg ", "static/images/letters/associated/l.jpg"],
    "M":["static/images/letters/letter-m.jpg ", "static/images/letters/associated/m.jpg"],
    "N":["static/images/letters/letter-n.jpg ", "static/images/letters/associated/n.jpg"],
    "O":["static/images/letters/letter-o.jpg ", "static/images/letters/associated/o.jpg"],
    "P":["static/images/letters/letter-p.png", "static/images/letters/associated/p.jpg"],
    "Q":["static/images/letters/letter-q.jpg ", "static/images/letters/associated/q.jpg"],
    "R":["static/images/letters/letter-r.jpg ", "static/images/letters/associated/r.jpg"],
    "S":["static/images/letters/letter-s.jpg ", "static/images/letters/associated/s.jpg"],
    "T":["static/images/letters/letter-t.jpg ", "static/images/letters/associated/t.jpg"],
    "U":['static/images/letters/letter-u.png', 'static/images/letters/associated/u.jpg'],
    "V":['static/images/letters/letter-v.jpg ', 'static/images/letters/associated/v.png'],
    "W":['static/images/letters/letter-w.jpg ', 'static/images/letters/associated/w.jpg'],
    "X":['static/images/letters/letter-x.jpg', 'static/images/letters/associated/x.jpg'],
    "Y":['static/images/letters/letter-y.jpg ', 'static/images/letters/associated/y.jpg'],
    "Z":['static/images/letters/letter-z.png', 'static/images/letters/associated/z.jpg']

}
