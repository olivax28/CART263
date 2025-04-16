class iris {
    constructor(x, y, sepalLength, sepalWidth, petalLength, petalWidth, irisColor, xSepal) {

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
        this.xSepal = xSepal;

    }

    drawIris() {
        console.log(document.getElementsByClassName("flowerBox")[0]);
        //structure taken from 'garden' project 
        this.irisPetalDiv.classList.add("iris");
        this.irisPetalDiv.style.width = this.petalWidth + "px";
        this.irisPetalDiv.style.height = this.petalLength + "px";
        // this.irisDiv.style.background =  ;//will euqual to the given color. so a word, figure this out;
        this.irisPetalDiv.style.left = this.x + 500 + "px";
        this.irisPetalDiv.style.top = this.y + 300 + "px";
        this.irisPetalDiv.style.background = this.irisColor;
        //add to the DOM
        document.getElementsByClassName("flowerBox")[0].appendChild(this.irisPetalDiv);


        this.irisSepalDiv.classList.add("iris");
        this.irisSepalDiv.style.width = this.sepalWidth + "px";
        this.irisSepalDiv.style.height = this.sepalLength + "px";
        // this.irisDiv.style.background =  ;//will euqual to the given color. so a word, figure this out;
        this.irisSepalDiv.style.left = this.xSepal + 500 + "px";
        this.irisSepalDiv.style.top = this.y + 300 + "px";
        this.irisSepalDiv.style.background = ("yellow");
        console.log(this.irisColor);
        document.getElementsByClassName("flowerBox")[0].appendChild(this.irisSepalDiv);


    }

}