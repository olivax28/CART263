class Choice {
  constructor(dialogue, characterSprite, room, textBox, brainMenuIMG, nextChoiceArray, playerOptions/*mcEmotion, item, journalEntry**/) {

    this.optionButtons = [];
    this.brainX = 1422.222;
    this.brainY = 327.2727;
    // character info
    this.playerOptions = playerOptions;
    this.nextChoiceArray = nextChoiceArray;
    // console.log(this.nextChoiceArray);
    this.spriteImg = characterSprite;
    this.brainMenuIMG = brainMenuIMG
    this.textArray = dialogue;
    // console.log(this.textArray) //init dialogue
    this.scene = room;
    this.textBox = textBox;
    // console.log(state) //same 
    // console.log(this.scene) //same
    //sabine: make showDialogueBox a member var of the class (so ech choice has its OWN)
    this.showDialogueBox = false; // initially false
    this.showBrainMenu = false; // initially false


    let self = this;//keep a copy of 'this'
    this.dialogueIndex = 0; // new sabine: need a seperate index
  }

  // this.context.fillStyle = this.fill_color; // change the color we are using
  drawCharacterSpriteElements(charspriteX, charSpriteY) {
    push();
    imageMode(CENTER);
    this.spriteImg.resize(0, 780);
    image(this.spriteImg, charspriteX, charSpriteY);
    pop();

  }



  // This section handles the dialogue

  //Functions draws the text boxes (needs to be edited)
  drawTextBox() {
    // text box
    if (this.showDialogueBox === true) {
      // console.log("show")
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
      text(this.textArray[this.dialogueIndex], this.textBox.body.x + 5, this.textBox.body.y + 5, this.textBox.body.w, this.textBox.body.h);
      pop();
    }
  }








  // sabine changed the name
  startDialogueTimer() {
    let self = this;
    //dialogue appearance for the play game custscene
    setTimeout(function () { self.showDialogueBox = true }, 1000);

  }


  //SABINE THIS WILL BE CALLED BY the mousePressed function in the main.js
  //Allows the player to click through the dialogues
  //This code is taken from another project and will serve as an example for "Think" but needs to be modified used for iterating through story dialogue
  Pressed() {


    // for the story mode cutscenes
    if (this.showDialogueBox === true) {


      this.dialogueIndex++;
      // returns the Dialogue JSON path, selects the scene from the array, then the dialogue of that scene
      if (this.dialogueIndex === this.textArray.length) {
        //if done :)
        return true;
      }
    }

    return false;
  }

  // displayBrainMenu() {
  //   if ( this.dialogueIndex === this.textArray.Scenes[sceneIndex].Dialogue.length) {
  //     this.showBrainMenu === true;
  //     console.log("drawing brain menu");
  //   }

  // }

  // draws the brain choice menu
  brainActivate() {
    this.showBrainMenu = true
    // console.log("activate");
  }
  drawBrainMenu() {
    // text box
    push();
    imageMode(CENTER);
    image(this.brainMenuIMG, this.brainX, this.brainY);
    pop();
    // console.log("braindrawing");

  }



  drawOptions(playerChoicesFont) {
    for (let i = 0; i < this.playerOptions.length; i++) {
      push();

      textSize(20);
      textAlign(LEFT);
      textFont(playerChoicesFont);
      fill("red");
      // let bbox = playerChoicesFont.textBounds(this.playerOptions[i], this.brainX - 130, this.brainY - 85 * i);
      rectMode(CORNER);
      // rect(bbox.x, bbox.y, bbox.w, bbox.h);
      fill("#000000");
      // ellipse(bbox.x, bbox.y, 5, 5);
      //plug in wanted text here!
      text(this.playerOptions[i], this.brainX - 130, this.brainY - 85 * i);
      pop();

    }

  }

  calculateBoundingBoxes(playerChoicesFont) {

    for (let i = 0; i < this.playerOptions.length; i++) {
      textSize(25);
      textAlign(LEFT);
      textFont(playerChoicesFont);
      let bbox = playerChoicesFont.textBounds(this.playerOptions[i], this.brainX - 130, this.brainY - 85 * i);

      this.optionButtons.push(bbox);

    }
  }
}




