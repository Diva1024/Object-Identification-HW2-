img="";
status1="";
function preload(){
img=loadImage("bed_room.jpg");
}
function setup(){
canvas=createCanvas(650,500);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function draw(){
image(img,0,0,650,500);
fill("#6cd3f5");
text("Bed", 150,100);
noFill();
stroke("#6cd3f5");
rect(100,50,300,400);

fill("#ed3c2f");
text("Curtains", 450,100);
noFill();
stroke("#ed3c2f");
rect(300,50,300,400);
}
function modelloaded(){
    console.log("modelloaded");
    status1=true;
    objectDetector.detect(img,gotresult);

}
function gotresult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}