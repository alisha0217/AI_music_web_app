song1 = ""
song2 = ""

leftWristX = 0;
leftWristY = 0;

rigthWristX = 0;
rightWristY = 0;

function preload(){
    song1 = loadSound("Song1.mp3");
    song2 = loadSound("Song2.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}

function modelLoaded(){
    console.log("Posenet Is Initialized");
}

function gotPoses(results){   
    if(results.length > 0){

        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY );

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY );

    }
}

function draw(){
    image(video, 0, 0, 600, 500);
}

