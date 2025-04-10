/**
 * Think prototype
 * Olivia Axiuk Julia Axiuk
 *  * Made with p5
* https://p5js.org/
 */

"use strict";



// NOTES FOR SABINE:
//nEED TO NOT RUN DOMR SETUP EVERY TIME
//NEED TO FIND A WAY OF ONLY PLAYING DIALOGUE FOR THE CHOICE
// //the background image for the cutscenes
// let BG = undefined;

// //The titlescreen image
// let titleScreenIMG = undefined;


let uiBorder = undefined;
let brainIdle = undefined;
let brainMenu = undefined;
//Backgrounds
let dormBG = undefined;
// Character Sprites
let saraNeutral = undefined;
let saraSad = undefined;
let renNeutral = undefined;
let renHappy = undefined;


// controls the dialogue
let storyDialogue = undefined;

// goes through the scenes of the JSON file for the story mode dialogue
let sceneIndex = 0;
// goes through the array for the Play Game mode and Story dialogue
let dialogueIndex = 0;
// let showDialogueBox = false;




//sets the initial state
//let state = "Dorm"

//set inital state (sabine :)
let state = "Dorm-setup"


let charspriteX = 1920 / 2;
let charSpriteY = 1080 / 2 + 20;



// // Might need a timer?
// let playSceneTimer = {
//     counter: undefined,
// };

// loads in the timer based on the JSON file
let textBoxDelay = {
    counter: undefined
};

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
        fill: ("#000a")
    },
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
    brainMenu = loadImage("assets/images/UI/brain_options.PNG");
    saraNeutral = loadImage("assets/images/Sprites/Sara_neutral.PNG");
    saraSad = loadImage("assets/images/Sprites/Sara_sad.PNG");
    renNeutral = loadImage("assets/images/Sprites/Ren_neutral.PNG");
    renHappy = loadImage("assets/images/Sprites/Ren_happy.PNG");
    dormBG = loadImage("assets/images/BGs/dorm_BG.PNG");

}



/**
 * creates the canvas
*/
// let DormChoice01 = undefined;
// let DormChoice02 = undefined;
// let DormChoice03 = undefined;

//SABINE ADDITION::
//A: since there is only one active choice at the time .. 
//make an activeChoice var to hold the `activatedChoice`
let currentActivatedChoice = null;
let choices = [];



function setup() {
    createCanvas(1920, 1080);

    const dialogArray01 = storyDialogue.Scenes[0].Dialogue;
    const dialogArray02 = storyDialogue.Scenes[1].Dialogue;
    // console.log(dialogArray)
    textBoxDelay.counter = storyDialogue.Scenes[sceneIndex].Delay;
    // all potnetial choices defined here


    choices.push(new Choice(dialogArray01, saraNeutral, "Dorm", textBoxSpeech,brainMenu,storyDialogue.Scenes[0].NextChoices,storyDialogue.Scenes[0].playerOptions));
    choices.push(new Choice(dialogArray02, saraSad, "Dorm", textBoxSpeech,brainMenu));
    choices.push(new Choice(dialogArray02, renHappy, "Dorm", textBoxSpeech,brainMenu));

    //SABINE: at the beginning -> the activatedchoice will be DormChoice01:
    currentActivatedChoice = choices[sceneIndex];

    //NOTE FOR LATER CODING....brain click function will change the currently activated choice, dialogue defined by the dialog array constant


    // links the storyTimer object to the JSON file, then directs it to the Delay part of each scene (calls each after the designated delay time)
    // storyTimer.counter = storyDialogue.Scenes[sceneIndex].Delay;
}


/**
 * drawws black background and sets the states
*/
function draw() {
    background(0, 0, 0);

    // console.log(state)
    // if (state === "title") {
    //     title();
    // }
    /*SABINE:: idea: for every transition to a new "choice"
    have a state to `set-up` the choice ...: will run ONE time -
    then we have the actual state (which loops..)
    WHY? - well because we do not want to have a setTimeout run in a loop - 
    as well as possibly other vars to be set up ONE TIME ..
    so we need to differentiate */

    if (state === "Dorm-setup") {
        setupdorm();
        //immediatly after one time - change state
        state = "Dorm"


    }
    else if (state === "Dorm") {
        dorm();


    }
}


//go to setup every time we initate a new choice... 
function setupdorm() {
    console.log("setup")
    currentActivatedChoice.startDialogueTimer();
}


//start the game
function dorm() {
    drawBG(dormBG, width / 2, height / 2);
    drawUI(uiBorder, width / 2, height / 2);
    drawUI(brainIdle, width / 1.35, height / 3.3);
    currentActivatedChoice.drawCharacterSpriteElements(charspriteX, charSpriteY);
    currentActivatedChoice.drawTextBox();
    if (currentActivatedChoice.showBrainMenu === true){
        currentActivatedChoice.drawBrainMenu();
        currentActivatedChoice.drawOptions();
    }


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

//p5 mousePressed
function mousePressed() {
    //check if this activated choice is done ... 
    let goToNextChoice = currentActivatedChoice.Pressed();
    if (goToNextChoice === true) {

        // sceneIndex++;
        currentActivatedChoice.brainActivate();
        let number_scenes_temp = 3
        
        //if(sceneIndex === storyDialogue.Scenes.length )
        if (sceneIndex >= number_scenes_temp) {
            console.log("no");
            console.log("closing text box")
            currentActivatedChoice.showDialogueBox = false;

        }

        else {
            currentActivatedChoice = choices[sceneIndex];
            currentActivatedChoice.showDialogueBox = true;
            // state = "Dorm-setup";
        }
//Check if dialogue is complteted for the choce
//if yes, show choices

    }


    //if(sceneIndex){
    //     //the text array ONLY shows the text not scene
    //     if (sceneIndex === INNER_NUMBER_SCENES) {
    //         // at the end of all scenes, return to the title screen
    //         this.showDialogueBox === false;
    //       }
    // }

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


















