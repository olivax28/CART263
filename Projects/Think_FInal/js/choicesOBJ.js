class Choice {
  constructor(/*dialogue,**/ characterSprite, /*mcEmotion, item, journalEntry**/) {


    // character info


    this.spriteImg = characterSprite;




    let self = this;//keep a copy of 'this'

    // this.flowerStemDiv.addEventListener("click", growStem);
    // function growStem(e) {
    // }
  }
  // this.context.fillStyle = this.fill_color; // change the color we are using
  drawCharacterSpriteElements(charspriteX, charSpriteY) {
    push();
    imageMode(CENTER);
    image(this.spriteImg, charspriteX, charSpriteY);
    this.spriteImg.resize(0, 780);
    pop();

  }



  // This section handles the dialogue

  //Functions draws the text boxes (needs to be edited)
  drawTextBox(textBox, /*textArray**/) {
    //border
    push();
    fill(textBox.border.fill);
    rect(textBox.border.x, textBox.border.y, textBox.border.w, textBox.border.h);
    pop();
    // text box
    push();
    fill(textBox.body.fill);
    // textBox.body.fill.setAlpha(128);
    rect(textBox.body.x, textBox.body.y, textBox.body.w, textBox.body.h);
    pop();
    // push();
    // fill("#66ff66");
    // textSize(20);
    // textAlign(LEFT);
    // textFont('Courier New');
    // //plug in wanted text here!
    // text(textArray[dialogueIndex], textBox.body.x + 5, textBox.body.y + 5, textBox.body.w, textBox.body.h)
    // pop();
  }


  // //Delays the appearance of the dialogue box
  // function checkDialogueTimer(scene, dialogue) {
  //     //dialogue appearance
  //     if (state === scene) {
  //         setTimeout(showTheTextBox, 1000);
  //     }
  //     if (showDialogueBox == true) {
  //         drawTextBox(textBoxCutscene, dialogue);
  //     }
  // }

  // //handles the showing of the text box
  // function showTheTextBox() {
  //     showDialogueBox = true;
  // }

  // //Allows the player to click through the dialogues
  // //This code is taken from another project and will serve as an example for "Think" but needs to be modified used for iterating through story dialogue
  // function mousePressed() {
  //     // for the play game version
  //     if (state === /** current scene */ && showDialogueBox === true) {
  //         dialogueIndex++;
  //         if (dialogueIndex === cutsceneText.length) {
  //         }
  //     }
  //     // for the story mode cutscenes
  //     if (state === "storyCutscene" && showDialogueBox === true) {
  //         dialogueIndex++;
  //         // returns the Dialogue JSON path, selects the scene from the array, then the dialogue of that scene
  //         if (dialogueIndex === storyDialogue.Scenes[sceneIndex].Dialogue.length) {
  //             sceneIndex++;
  //             if (sceneIndex === storyDialogue.Scenes.length) {
  //                 // at the end of all scenes, return to the title screen
  //                 state = "title";
  //             }
  //             else {
  //                 // if not at the end of the scenes, return to the game
  //                 dialogueIndex = 0;
  //                 storyTimer.counter = storyDialogue.Scenes[sceneIndex].Delay;
  //                 state = "storyMode";
  //             }
  //         }
  //     }
  // }

}