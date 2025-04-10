window.onload = async function () {
  console.log("task 7-8");
  try {

    //Part 01
    console.log("in fetch");
    let response = await fetch('data/iris.json');
    let irises_original = await response.json();
    console.log(irises_original);




    // Part 02


    // let temp = getColorObj(el.color);
    let possibleColor = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d35d3f", "#d3a73f"]
    const irisesWithColors = irises_original.map(iris => {
      return {
        ...iris,
        color: possibleColor[Math.floor(Math.random() * possibleColor.length)]
      };
    });

    console.log(irisesWithColors);

    // Part 03

    const filteredIrises = irisesWithColors.filter(iris => iris.sepalWidth < 4);

    //Part 04


  } catch (e) { console.log(e); }





  // Studen example:
  // function changeColor() {
  //   let possibleColor = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d35d3f", "#d3a73f"]
  //   const irisesWithColors = data.map(iris => {
  //     return {
  //       ...iris,
  //       color: possibleColor[Math.floor(Math.random() * possibleColor.length)]
  //     };
  //   });

  // }


}






