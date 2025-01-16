/**
 * task 01
 * Olivia Axiuk
 * 
 * descriptions
 */

"use strict";


let x= 100;
let y = 5;
let width = 100;
let r = 255;
let g = 0;
let b = 0;






/**
* setup
*/
function setup() {
createCanvas (720,720)

}


/**
* draw
*/
function draw() {
background(0,0,0);
drawEllipse(x,y,width,r,g,b)
drawEllipse(x +100, y + 500 ,width + 50,r - 255, g + 255, b)
drawEllipse(x +600, y + 500 ,width + 10,r-255, g, b+255)
}

function drawEllipse(x,y,width,r,g,b){
    push();
fill(r, g, b);
ellipse(x, y , width);
pop();

}