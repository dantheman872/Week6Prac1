function setup(){

    createCanvas(600,600)
    frameRate(8)
    textSize(50)
    textAlign(CENTER,CENTER)
}

let fullText = "Username"
let index = 0

function draw(){

    background(200)
    if(index < fullText.length){

        index += 1
        
    } else {

        index = 0
    }
    text(fullText.slice(0,index), 300, 300)    
} 