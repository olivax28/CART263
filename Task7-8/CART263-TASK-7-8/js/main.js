window.onload = async function () {
  // console.log("task 7-8");
  try {

    //Part 01
    console.log("in fetch");
    let response = await fetch('data/iris.json');
    let irises_original = await response.json();
    // console.log(irises_original);




    // Part 02
    // let temp = getColorObj(el.color);
    let possibleColor = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d35d3f", "#d3a73f"]
    const irisesWithColors = irises_original.map(iris => {
      return {
        ...iris,
        color: possibleColor[Math.floor(Math.random() * possibleColor.length)]
      };
    });

    // console.log(irisesWithColors);

    // Part 03

    const filteredIrises = irisesWithColors.filter(iris => iris.sepalWidth < 4);

    //Part 04
    const totalPetalLength = irisesWithColors.reduce((sum, iris) => sum + iris.petalLength, 0)
    console.log(totalPetalLength)
    console.log(irisesWithColors.length)
    //Total Petal Length: 563.70000
    // Average Petal Length: 3.758

    //part 05
    const foundIris = irisesWithColors.find(
      function (el) {
        return (el.petalWidth > 1.0)
      })
    console.log(foundIris)
    //foundIris: {sepalLength: 7, sepalWidth: 3.2, petalLength: 4.7, petalWidth: 1.4, species: 'versicolor', …}
    // color
    // : 
    // "#5d3fd3"
    // petalLength
    // : 
    // 4.7
    // petalWidth
    // : 
    // 1.4
    // sepalLength
    // : 
    // 7
    // sepalWidth
    // : 
    // 3.2
    // species
    // : 
    // "versicolor"
    // [[Prototype]]
    // : 
    // Object

    //part 06

    const hasPetalLengthLessthan10 = irisesWithColors.some(
      function (el) {
        return (el.petalLength > 10)
      }
    )
    console.log(hasPetalLengthLessthan10)
    //answer: False

    //part07
    const petalEqualtoFour = irisesWithColors.some(
      function (el) {
        return (el.petalLength == 4.2)
      }
    )
    console.log(petalEqualtoFour)
    //answer: true

    //part 08

    const everyPetalWidth3 = irisesWithColors.every(
      function (el) {
        return (el.petalWidth < 3)
      });
    console.log(everyPetalWidth3);
    //answer: true

    //part 09
    const everySepalWidth = irisesWithColors.every(
      function (el) {
        return (el.sepalWidth > 1.2)
      });
    console.log(everySepalWidth);
    //answer: true

    //part 10


    const irisesWithColorsSorted = irisesWithColors.toSorted((a, b) => a.petalWidth - b.petalWidth);
    console.log(irisesWithColorsSorted);
    //visualizing
    //IDEA: Bouquet of irises that grow bigger and smaller on their own with a for loop. and who's colors are the random assigned colors




  } catch (e) { console.log(e); }

  //visualizing
  //IDEA: Bouquet of irises that grow bigger and smaller on their own with a for loop. and who's colors are the random assigned colors

  //Draw and add the FlowerBox to the DOM
  let flowerBox = document.createElement("div");
  flowerBox.classList.add("flowerBox");
  // access parent element
  let parentElement = document.querySelector("body")
  parentElement.appendChild(flowerBox);

  let rectangle = document.createElement("div");
  rectangle.classList.add("rectangle");
  let parentElementBox = document.querySelector(".flowerBox");
  parentElementBox.appendChild(rectangle);



}










