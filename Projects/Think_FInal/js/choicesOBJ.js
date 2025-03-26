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
    console.log(this.spriteImg);
  }

}