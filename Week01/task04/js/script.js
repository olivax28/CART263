/**
 * task03
 * Olivia Axiuk and Julia Axiuk
 * 
 * 
 */

"use strict";
//rectngkes variables





/**
 * setup
*/


function setup() {
    createCanvas(720, 720);
}





/**
 * draw
*/
function draw() {
    background(0, 0, 0);
    drawRectangles(0, 0, 50);

}


function drawRectangles(x, y, g) {
    let recWidth = width / 3;
    let recHeight = height;
    push();
    rect(recWidth, recHeight, x, y);
    fill(0, g, 255);
    pop();
}







