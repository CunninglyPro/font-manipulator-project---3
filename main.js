var leftWristX = 0;
var rightWristX = 0;
var difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(0, 100);

    canvas = createCanvas(550, 550);
    canvas.position(550, 130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#4a58b5');
    textSize(difference);
    fill('yellow');
    text('Aditya', 100, 200);
}

function modelLoaded() {
    console.log('PoseNet is initialized!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);
    }
}