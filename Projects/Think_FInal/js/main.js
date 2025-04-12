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
let computerLabBG = undefined;



// controls the dialogue
let storyDialogue = undefined;

// goes through the scenes of the JSON file for the story mode dialogue
let sceneIndex = 0;
// goes through the array for the Play Game mode and Story dialogue
let dialogueIndex = 0;
// let showDialogueBox = false;





//set inital state 
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

let playerChoicesFont;


// //sound effects will be defined here
// let soundFX = undefined


// Character Sprites
let saraNeutral = undefined;
let saraSad = undefined;
let saraShock = undefined;
let renNeutral = undefined;
let renHappy = undefined;


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
    saraShock = loadImage("assets/images/Sprites/Sara_shock.PNG");
    renNeutral = loadImage("assets/images/Sprites/Ren_neutral.PNG");
    renHappy = loadImage("assets/images/Sprites/Ren_happy.PNG");
    dormBG = loadImage("assets/images/BGs/dorm_BG.PNG");
    computerLabBG = loadImage("assets/images/BGs/computerlab_BG.PNG");
    playerChoicesFont = loadFont("assets/Data/Roboto-Regular.ttf");

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

    const dialogArray00 = storyDialogue.Scenes[0].Dialogue;
    const dialogArray01 = storyDialogue.Scenes[1].Dialogue;
    const dialogArray02 = storyDialogue.Scenes[2].Dialogue;
    const dialogArray03 = storyDialogue.Scenes[3].Dialogue;
    const dialogArray04 = storyDialogue.Scenes[4].Dialogue;
    const dialogArray05 = storyDialogue.Scenes[5].Dialogue;
    const dialogArray06 = storyDialogue.Scenes[6].Dialogue;
    const dialogArray07 = storyDialogue.Scenes[7].Dialogue;
    const dialogArray08 = storyDialogue.Scenes[8].Dialogue;
    const dialogArray09 = storyDialogue.Scenes[9].Dialogue;
    // console.log(dialogArray)
    textBoxDelay.counter = storyDialogue.Scenes[sceneIndex].Delay;
    // all potnetial choices defined here


    choices.push(new Choice(dialogArray00, saraNeutral, "Dorm", textBoxSpeech, brainMenu, storyDialogue.Scenes[0].NextChoices, storyDialogue.Scenes[0].playerOptions));
    choices[0].calculateBoundingBoxes(playerChoicesFont);

    choices.push(new Choice(dialogArray01, saraSad, "Dorm", textBoxSpeech, brainMenu, storyDialogue.Scenes[1].NextChoices, storyDialogue.Scenes[1].playerOptions));
    choices[1].calculateBoundingBoxes(playerChoicesFont);

    choices.push(new Choice(dialogArray02, saraNeutral, "Dorm", textBoxSpeech, brainMenu, storyDialogue.Scenes[2].NextChoices, storyDialogue.Scenes[2].playerOptions));
    choices[2].calculateBoundingBoxes(playerChoicesFont);

    choices.push(new Choice(dialogArray03, saraNeutral, "Dorm", textBoxSpeech, brainMenu, storyDialogue.Scenes[3].NextChoices, storyDialogue.Scenes[3].playerOptions));
    choices[3].calculateBoundingBoxes(playerChoicesFont);

    choices.push(new Choice(dialogArray04, saraNeutral, "Dorm", textBoxSpeech, brainMenu, storyDialogue.Scenes[4].NextChoices, storyDialogue.Scenes[4].playerOptions));
    choices[4].calculateBoundingBoxes(playerChoicesFont);

    choices.push(new Choice(dialogArray05, saraSad, "Dorm", textBoxSpeech, brainMenu, storyDialogue.Scenes[5].NextChoices, storyDialogue.Scenes[5].playerOptions));
    choices[5].calculateBoundingBoxes(playerChoicesFont);

    choices.push(new Choice(dialogArray06, saraShock, "Dorm", textBoxSpeech, brainMenu, storyDialogue.Scenes[6].NextChoices, storyDialogue.Scenes[6].playerOptions));
    choices[6].calculateBoundingBoxes(playerChoicesFont);

    choices.push(new Choice(dialogArray07, saraSad, "Dorm", textBoxSpeech, brainMenu, storyDialogue.Scenes[7].NextChoices, storyDialogue.Scenes[7].playerOptions));
    choices[7].calculateBoundingBoxes(playerChoicesFont);

    choices.push(new Choice(dialogArray08, saraShock, "Dorm", textBoxSpeech, brainMenu, storyDialogue.Scenes[8].NextChoices, storyDialogue.Scenes[8].playerOptions));
    choices[8].calculateBoundingBoxes(playerChoicesFont);

    choices.push(new Choice(dialogArray09, renNeutral, "lab", textBoxSpeech, brainMenu, storyDialogue.Scenes[9].NextChoices, storyDialogue.Scenes[9].playerOptions));
    choices[9].calculateBoundingBoxes(playerChoicesFont);

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

    if (state === "lab-setup") {
        setupdorm();
        //immediatly after one time - change state
        state = "computerLab"


    }
    else if (state === "computerLab") {
        lab();


    }
}


//go to setup every time we initate a new choice... 
function setupdorm() {
    // console.log("setup")
    currentActivatedChoice.startDialogueTimer();
}


//start the game
function dorm() {
    drawBG(dormBG, width / 2, height / 2);
    currentActivatedChoice.drawCharacterSpriteElements(charspriteX, charSpriteY);
    drawUI(uiBorder, width / 2, height / 2);
    drawUI(brainIdle, width / 1.35, height / 3.3);
    currentActivatedChoice.drawTextBox();
    if (currentActivatedChoice.showBrainMenu === true) {
        currentActivatedChoice.drawBrainMenu();
        currentActivatedChoice.drawOptions(playerChoicesFont);
    }
    if (currentActivatedChoice.scene === "lab") {
        state = "lab-setup"

    };


}



function lab() {
    drawBG(computerLabBG, width / 2, height / 2);
    currentActivatedChoice.drawCharacterSpriteElements(charspriteX, charSpriteY);
    drawUI(uiBorder, width / 2, height / 2);
    drawUI(brainIdle, width / 1.35, height / 3.3);
    currentActivatedChoice.drawTextBox();
    if (currentActivatedChoice.showBrainMenu === true) {
        currentActivatedChoice.drawBrainMenu();
        currentActivatedChoice.drawOptions(playerChoicesFont);
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
    if (currentActivatedChoice.showBrainMenu === true) {

        for (let i = 0; i < currentActivatedChoice.playerOptions.length; i++) {
            let playerOptionBounds = currentActivatedChoice.optionButtons[i];


            if (mouseX >= playerOptionBounds.x && mouseX <= (playerOptionBounds.x + playerOptionBounds.w) && mouseY >= playerOptionBounds.y && mouseY <= (playerOptionBounds.y + playerOptionBounds.h)) {
                // console.log(currentActivatedChoice.playerOptions[i]);
                // console.log(currentActivatedChoice.nextChoiceArray[i]);
                let newIndex = currentActivatedChoice.nextChoiceArray[i];
                // console.log(choices[newIndex]);
                currentActivatedChoice = choices[newIndex];
                currentActivatedChoice.showDialogueBox = true;
            }
            // ChoiceIndexSelected = storyDialogue.Scenes.NextChoices[0];
            // currentActivatedChoice = choices[ChoiceIndexSelected];

        }

    }
    else {
        //check if this activated choice is done ... 
        let goToNextChoice = currentActivatedChoice.Pressed();
        if (goToNextChoice === true) {
            // let number_scenes_temp = 3
            // sceneIndex++;
            currentActivatedChoice.brainActivate();
            // currentActivatedChoice.showDialogueBox = true;

            // //if(sceneIndex === storyDialogue.Scenes.length )
            // if (sceneIndex >= number_scenes_temp) {
            //     console.log("no");
            //     console.log("closing text box")
            //     currentActivatedChoice.showDialogueBox = false;

            // }

            // else {
            //     currentActivatedChoice = choices[sceneIndex];
            //     currentActivatedChoice.showDialogueBox = true;
            //     // state = "Dorm-setup";
            // }

        }

    }




}

























