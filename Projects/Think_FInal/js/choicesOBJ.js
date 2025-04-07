class Choice {
  constructor(dialogue, characterSprite, room, textBox, brainMenuIMG/*mcEmotion, item, journalEntry**/) {


    // character info


    this.spriteImg = characterSprite;
    this.brainMenuIMG = brainMenuIMG
    this.textArray = dialogue;
    console.log(this.textArray) //init dialogue
    this.scene = room;
    this.textBox = textBox;
    console.log(state) //same 
    console.log(this.scene) //same
    //sabine: make showDialogueBox a member var of the class (so ech choice has its OWN)
    this.showDialogueBox = false; // initially false
    this.showBrainMenu = false; // initially false

    let self = this;//keep a copy of 'this'
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
    if (this.showDialogueBox === true) {
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
  }








  // sabine changed the name
  startDialogueTimer() {
    let self = this;
    //dialogue appearance for the play game custscene
    if (state === this.scene) {
      setTimeout(function () { self.showDialogueBox = true }, 1000);
    }

  }


  //SABINE THIS WILL BE CALLED BY the mousePressed function in the main.js
  //Allows the player to click through the dialogues
  //This code is taken from another project and will serve as an example for "Think" but needs to be modified used for iterating through story dialogue
  Pressed() {
    // for the story mode cutscenes
    if (this.showDialogueBox === true) {
      dialogueIndex++;
      // returns the Dialogue JSON path, selects the scene from the array, then the dialogue of that scene
      if (dialogueIndex === this.textArray.Scenes[sceneIndex].Dialogue.length) {
        // need a different way of operating the scene index
        sceneIndex++; // modify this so that the scene is instead chosen by the curent choice
        if (sceneIndex === this.textArray.Scenes.Dialogue.length) {
          // at the end of all scenes, return to the title screen
          this.showDialogueBox === false;
        }
      }
    }
  }

  displayBrainMenu() {
    if (dialogueIndex === this.textArray.Scenes[sceneIndex].Dialogue.length) {
      this.showBrainMenu === true;
      console.log("drawing brain menu");
    }

  }

  // draws the brain choice menu

  drawBrainMwenu() {
    // text box
    if (this.showBrainMenu === true) {
      push();
      imageMode(CENTER);
      image(this.brainMenuIMG, 1422.222, 327.2727);
      pop();
    }
  }

}




