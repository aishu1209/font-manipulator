leftWristX = 0;
rightWristX = 0;
difference = 0;

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
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function modelLoaded(){
    console.log("Posenet is initialized!");
}

function draw(){
    background('#660b0e');
    textSize(difference);
    fill('#dc8431');
    text('Aashritha', 50,400);

}