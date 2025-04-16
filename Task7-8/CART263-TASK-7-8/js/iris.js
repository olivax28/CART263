class iris {
    constructor(x, y, sepalLength, sepalWidth, petalLength, petalWidth, irisColor) {

        this.x = x;
        this.y = y;
        // this.size = size;
        this.sepalLength = sepalLength;
        this.sepalWidth = sepalWidth;
        this.petalLength = petalLength;
        this.petalWidth = petalWidth;
        this.irisColor = irisColor;
        this.irisPetalDiv = document.createElement("div");
        this.irisSepalDiv = document.createElement("div");

    }

    drawIris() {
        //structure taken from 'garden' project 
        this.irisDiv.classList.add("iris");
        this.irisDiv.style.width = this.petalWidth + "px";
        this.irisDiv.style.height = this.petalLength + "px";
        // this.irisDiv.style.background =  ;//will euqual to the given color. so a word, figure this out;
        this.irisDiv.style.left = this.x + "px";
        this.irisDiv.style.top = this.y + "px";
        //add to the DOM
        document.getElementsByClassName("flowerBox")[0].appendChild(this.irisDiv);

    }

}