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
        // this.priceIndex = 0;

        let self = this;

        this.irisPetalDiv.addEventListener("click", pickFlower);
        // modified from the garden project flowers
        function pickFlower(e) {

            self.x = 10 + (Math.random() * 100);
            self.y = 100 + (Math.random() * 100);

            self.irisPetalDiv.style.left = self.x + "px";
            self.irisPetalDiv.style.top = self.y + "px";

            self.irisSepalDiv.style.left = self.x + 20 + "px";
            self.irisSepalDiv.style.top = self.y + "px";
            price = price + 25;
            console.log(price);

            let pricetag = document.createElement("div");
            pricetag.classList.add("pricetag");
            pricetag.innerHTML = ("price");
            let parentElement = document.querySelector("h1");
            parentElement.appendChild(pricetag);
            pricetag.innerHTML = (`${price}¢`);
        }

    }

    drawIris() {
        //structure taken from 'garden' project 
        this.irisPetalDiv.classList.add("iris");
        this.irisPetalDiv.style.width = this.petalWidth + "px";
        this.irisPetalDiv.style.height = this.petalLength + "px";
        // this.irisDiv.style.background =  ;//will euqual to the given color. so a word, figure this out;
        this.irisPetalDiv.style.left = this.x + 700 + "px";
        this.irisPetalDiv.style.top = this.y + 300 + "px";
        this.irisPetalDiv.style.background = this.irisColor;
        //add to the DOM
        document.getElementsByClassName("flowerBox")[0].appendChild(this.irisPetalDiv);


        this.irisSepalDiv.classList.add("iris");
        this.irisSepalDiv.style.width = this.sepalWidth + "px";
        this.irisSepalDiv.style.height = this.sepalLength + "px";
        // this.irisDiv.style.background =  ;//will euqual to the given color. so a word, figure this out;
        this.irisSepalDiv.style.left = this.xSepal + 700 + "px";
        this.irisSepalDiv.style.top = this.y + 300 + "px";
        this.irisSepalDiv.style.background = ("#f0e046");

        document.getElementsByClassName("flowerBox")[0].appendChild(this.irisSepalDiv);

    }



}