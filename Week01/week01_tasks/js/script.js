/**
 * task 01
 * Olivia Axiuk
 * 
 * descriptions
 */

"use strict";

// const ellipse01 ={
//     x: 10,
//     y : 5,
//     width : 100,
//     color :(4,4,0)
// }

// const ellipse02 ={
//     x: 50,
//     y : 200,
//     width : 500,
//     color :(0,17,255)
// }

// const ellipse03 ={
//     x: 100,
//     y : 600,
//     width : 150,
//     color :(255,0,0)
// }



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
    background(0,0,0)
  push();
  fill(255,0,0);
  ellipse(300,300,60);
  pop();
  push();
  fill(0,255,0);
  ellipse(400,500,40);
  pop();
  push();
  fill(0,0,255);
  ellipse(100,0,450);
  pop();
  


}