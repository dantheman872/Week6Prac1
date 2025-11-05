let fontA, fontB, fontCurrent;

function setup(){

    createCanvas(600,600)
    fontCurrent = fontA
}



function preload(){

    fontA = loadFont("assets/StackSansNotch.ttf") 
    fontB = loadFont("assets/QuicksandFont.ttf")
}

function draw(){

    background(200,140,100)
    fill(100,110,200)
    textFont(fontCurrent)
    textAlign(CENTER,CENTER)
    textSize(40)
    text("Hello World!", 300,300)
}

function keyPressed(){

    if (keyCode === 70){

        if(fontCurrent === fontA){

            fontCurrent = fontB
            stroke(200,100,200)
            fill(100,200,100, 50)
        } else {

            fontCurrent = fontA
            stroke(100,100,100)
            fill(200,200,200)
        }
    }
}