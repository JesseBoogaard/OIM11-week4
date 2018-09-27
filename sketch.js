let network;
let font,
fontsize = 20

function preload(){
    font = loadFont("assets/Ubuntu-R.ttf");
    network = loadJSON("assets/network_data.json");
}


function setup(){
    createCanvas(1280, 720);
    background(0);
    noStroke();
    textFont(font);
    textSize(fontsize);
    let j = 0;
    for(let i = 0; i < network.data.length; i++){
        let h = Math.floor(network.data[i].amount);
        j += 45;
        if(h < 100){
            fill(76, 175, 80);
        }else if(h < 180){
            fill(255, 235, 59);
        }else if(h < 250){
            fill(255, 152, 0);
        }else{
            fill(244, 67, 54);
        }
        rect(j, height-40, 40, -h);
    }
}

function draw(){
    let j = 65;
    for(let i = 0; i < network.data.length; i++){
        let txt = Math.floor(network.data[i].amount);
        textAlign(CENTER);
        fill(255);
        text(txt, j, height - 46);
        text(i+1, j, height - 11);
        j+= 45;
    }
    text("MB:", 20, height - 46);
    text("Sept:", 25, height - 12);
}