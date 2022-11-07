function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(125,125);
    canvas = createCanvas(550,550);
    canvas.position(800,125);
    Posenet = ml5.poseNet(video,modelLoaded);
    Posenet.on('pose',gotPoses);

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

    }
}

function modelLoaded(){
    console.log("Posenet is initialized!");
}

function draw(){
    
}