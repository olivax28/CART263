/**
 * Think prototype
 * Olivia Axiuk Julia Axiuk
 *  * Made with p5
* https://p5js.org/
 */

"use strict";




// //the background image for the cutscenes
// let BG = undefined;

// //The titlescreen image
// let titleScreenIMG = undefined;


let uiBorder = undefined;
let brainIdle = undefined;
//Backgrounds
let dormBG = undefined;
// Character Sprites
let saraNeutral = undefined;
let saraSad = undefined;
let renNeutral = undefined;


// controls the dialogue
let storyDialogue = undefined;

// goes through the scenes of the JSON file for the story mode dialogue
let sceneIndex = 0;
// goes through the array for the Play Game mode and Story dialogue
let dialogueIndex = 0;
let showDialogueBox = false;



//sets the initial state
let state = "Dorm"

let charspriteX = 1920 / 2;
let charSpriteY = 1080 / 2 + 20;



// // Might need a timer?
// let playSceneTimer = {
//     counter: undefined,
// };

// // loads in the timer based on the JSON file
// let storyTimer = {
//     counter: undefined
// };

// // the hit boxes for the title screen
// const clickBox = {
//     // x: //,
//     // y: //,
//     // w://,
//     // h: //,
//     // fill: "#******",
//     // state: ""

// }


const textBoxSpeech = {
    body: {
        x: 600,
        y: 700,
        w: 825,
        h: 200,
        fill: "#000000",
    },

    border: {
        x: 595,
        y: 695,
        w: 835,
        h: 210,
        fill: "#FFFFFF",

    }

}

const UI = {

}




// //sound effects will be defined here
// let soundFX = undefined


//load in all sprites
function preload() {
    //load story mode dialogue data
    storyDialogue = loadJSON("assets/Data/dialogue.JSON");
    //sprites and sounds will be loaded in here
    uiBorder = loadImage("assets/images/UI/border.PNG");
    brainIdle = loadImage("assets/images/UI/brain_idle.PNG");
    saraNeutral = loadImage("assets/images/Sprites/Sara_neutral.PNG");
    saraSad = loadImage("assets/images/Sprites/Sara_sad.PNG");
    renNeutral = loadImage("assets/images/Sprites/Ren_neutral.PNG");
    dormBG = loadImage("assets/images/BGs/dorm_BG.PNG");

}



/**
 * creates the canvas
*/
let DormChoice01 = undefined;
let DormChoice02 = undefined;

let testDialog = "Hey this is a test"
function setup() {
    createCanvas(1920, 1080);
    DormChoice01 = new Choice(testDialog, saraNeutral);
    // DormChoice02 = new Choice(renNeutral);



    // links the storyTimer object to the JSON file, then directs it to the Delay part of each scene (calls each after the designated delay time)
    // storyTimer.counter = storyDialogue.Scenes[sceneIndex].Delay;
}


/**
 * drawws black background and sets the states
*/
function draw() {
    background(0, 0, 0);

    // if (state === "title") {
    //     title();
    // }
    if (state === "Dorm") {
        dorm();


    }
}


//start the game
function dorm() {
    drawBG(dormBG, width / 2, height / 2);
    activatedChoice(DormChoice01);
    drawUI(uiBorder, width / 2, height / 2);
    drawUI(brainIdle, width / 1.35, height / 3.3);
    console.log();


}

function activatedChoice(choiceIndex) {
    choiceIndex.drawCharacterSpriteElements(charspriteX, charSpriteY);
    choiceIndex.drawTextBox(textBoxSpeech);
    console.log(testDialog);
}




function drawUI(uiElement, x, y,) {
    push();
    imageMode(CENTER);
    image(uiElement, x, y);
    pop();

}



function drawBG(bgIMG, x, y,) {
    push();
    imageMode(CENTER);
    image(bgIMG, x, y);
    bgIMG.resize(0, 900);
    pop();

}




// // The title screen menu
// function title() {
//     //sets size and alignment of the Title text
//     textSize(32);
//     textAlign(LEFT, LEFT)
//     background("#000000");
//     push();
//     imageMode(CENTER);
//     image(titleScreenIMG, width / 2, height / 2);
//     pop();
//     //"title Boxes" act as hit boxes to detect which one the player wants to choose
//     gamePick(/*titleBoxPlay*/);
// }


// // detects the overlap of the mouse over the menu boxes
// function gamePick(titleBox) {
//     if (state === "title") {
//         const mouseGameModeOverlap = mouseX > titleBox.x &&
//             mouseX < titleBox.x + titleBox.w &&
//             mouseY > titleBox.y &&
//             mouseY < titleBox.y + titleBox.h;

//         if (mouseGameModeOverlap && mouseIsPressed) {
//             state = titleBox.state
//         }
//     }
// }


// example of iterating through dialogue
// const dialogArray = storyDialogue.Scenes[sceneIndex].Dialogue;
//  checkDialogueTimer("storyCutscene", dialogArray);


















