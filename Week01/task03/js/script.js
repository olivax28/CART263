/**
 * task03
 * Olivia Axiuk and Julia Axiuk
 * 
 * 
 */

"use strict";
//rectngkes variables

let rect03x = 200;
let rect03y = 500;

let rect02x = 200;
let rect02y = 200;


let width = 50;
let height = 20;


let r = 255;
let g = 174;
let b = 231; 
/**
 * setup
*/


function setup() {
createCanvas (720,720);
}


/**
 * draw
*/
function draw() {
    background (0,0,0);
    drawRectangles(rect03x,rect03y);
    drawRectangles(rect02x,rect02y);
    drawRectangles(200,400);

    moveRectangle03();
}

function drawRectangles(x,y){
    push();
    fill(r,g,b);
    rect(x,y,width,height);
    pop();
}

function moveRectangle03(){
rect03y = rect03y + 1;

}



