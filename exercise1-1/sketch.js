function setup(){

    createCanvas(600, 600)
}

const placeHold = "Lorem ipsum dolor sit amet"

function draw(){

    background(200,200,100)
    textAlign(RIGHT,BOTTOM)
    fill(100,100,200)
    textSize(60)
    text(placeHold, 300, 300, 280, 300)
}
