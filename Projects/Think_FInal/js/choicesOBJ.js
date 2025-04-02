class Choice {
  constructor(dialogue, characterSprite, room, textBox/*mcEmotion, item, journalEntry**/) {


    // character info


    this.spriteImg = characterSprite;
    this.textArray = dialogue;
    this.scene = room;
    this.textBox = textBox;





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
  drawTextBox() {
    // text box
    push();
    stroke("#FFF9");
    strokeWeight(5);
    fill(this.textBox.body.fill);
    rect(this.textBox.body.x, this.textBox.body.y, this.textBox.body.w, this.textBox.body.h);
    pop();
    push();
    fill("#FFFFFF");
    textSize(20);
    textAlign(LEFT);
    textFont('Courier New');
    //plug in wanted text here!
    text(this.textArray[dialogueIndex], this.textBox.body.x + 5, this.textBox.body.y + 5, this.textBox.body.w, this.textBox.body.h);
    pop();
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
  //Delays the appearance of the dialogue box

  //handles the showing of the text box
  // showTheTextBox() {
  //   showDialogueBox = true;
  // }


  checkDialogueTimer() {
    //dialogue appearance for the play game custscene
    if (state === this.scene) {
      setTimeout(showDialogueBox = true, 1000);
    }
    if (showDialogueBox == true) {
      this.drawTextBox();
    }
  }


  //Allows the player to click through the dialogues
  //This code is taken from another project and will serve as an example for "Think" but needs to be modified used for iterating through story dialogue
  mousePressed() {
    // for the story mode cutscenes
    if (showDialogueBox === true) {
      dialogueIndex++;
      // returns the Dialogue JSON path, selects the scene from the array, then the dialogue of that scene
      if (dialogueIndex === this.textArray.Scenes[sceneIndex].Dialogue.length) {
        // need a different way of operating the scene index
        sceneIndex++;
        if (sceneIndex === this.textArray.Scenes.length) {
          // at the end of all scenes, return to the title screen
          showDialogueBox === false;
        }
      }
    }
  }

}