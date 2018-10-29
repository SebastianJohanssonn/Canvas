var nrOfDots = 12;
var multiplier = 2;

var circleRadius = 200;
var dotRadius = 10;
var lineWidth = 1;
var offset = 50;

function draw(){
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    
    context.beginPath();
    drawCircle(context);
    drawDots(context);
    //drawLines(context);
}

/**
 * Draws the outline circle of this project.
 * @param {CanvasRenderingContext2D} context 
 */

function drawCircle(context){

    context.lineWidth = lineWidth;
    context.strokeStyle = "red";
    context.arc(circleRadius + offset, circleRadius + offset, circleRadius, 0, 2 * Math.PI);
    context.stroke();
}

/**
 * Draws the dots for this project.
 * @param {CanvasRenderingContext2D} context
 */

function drawDots(context){
    var outlineCircleCenter = circleRadius + offset;
    var x = outlineCircleCenter + circleRadius * Math.cos(0);
    var y = outlineCircleCenter + circleRadius * Math.sin(0);
    
    context.beginPath();
    context.lineWidth = lineWidth;
    context.fillStyle = "black";
    context.arc(x, y, dotRadius, 0, 2 * Math.PI);
    context.fill();
 }
