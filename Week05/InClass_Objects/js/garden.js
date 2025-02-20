window.onload = function (){
    // Our garden
      let garden = {
//         // An array to store the individual flowers
//         flowers: [],
//         // How many flowers in the garden
//         numFlowers: 20,
     
//         /*grass object */
//         grass: {
//           // The color of the grass (background)
//           grassColor: {
//             r: 120,
//             g: 180,
//             b: 120,
//           },
//           //the grass element
//           grassDiv: document.createElement("div"),
//         },
     
//         /*sky object */
//         sky: {
//           // The color of the sky (background)
//           skyColor: {
//             r: 83,
//             g: 154,
//             b: 240,
//           },
//           //the sky element
//           skyDiv: document.createElement("div"),
//         },
     
//         /*sun object */
//         sun: {
//           sunColor: {
//             r: 240,
//             g: 206,
//             b: 83,
//           },
//           //the sun element
//           sunDiv: document.createElement("div"),
//         },
//       };
//          // Creates a new JavaScript Object describing a flower and returns it
//   function createFlower() {
//     // Create our object
//     let flower = {
//       // Position and size information
//       x: Math.random()* (window.innerWidth),
//       y: Math.random()*120,
//       size: 40,
//       stemLength: 75,
//       stemThickness: 10,
//       petalThickness: 8,
//       flowerStemDiv: document.createElement("div"),
//       flowerPetalDiv: document.createElement("div"),
 
//       // Color information
//       stemColor: {
//         r: 50,
//         g: 150,
//         b: 50,
//       },
//       petalColor: {
//         r: 200,
//         g: 50,
//         b: 50,
//       },
//       centreColor: {
//         r: 50,
//         g: 0,
//         b: 0,
//       },
//     };
//     return flower;
  };
      // draws the garden (renders)
//need to call the function
    function createAndRenderTheGarden() {
        /* note how we use dot notation....*/
        //sky
        garden.sky.skyDiv.classList.add("sky");
        garden.sky.skyDiv.style.background = `rgb(${garden.sky.skyColor.r},${garden.sky.skyColor.g},${garden.sky.skyColor.b})`;
        document.getElementsByTagName("main")[0].appendChild(garden.sky.skyDiv);
     
        //sun - IN the sky
        garden.sun.sunDiv.classList.add("sun");
        garden.sun.sunDiv.style.background = `rgb(${garden.sun.sunColor.r},${garden.sun.sunColor.g},${garden.sun.sunColor.b})`;
        //append to the SKY div
        document.getElementsByClassName("sky")[0].appendChild(garden.sun.sunDiv);
     
        //grass
        garden.grass.grassDiv.classList.add("grass");
        garden.grass.grassDiv.style.background = `rgb(${garden.grass.grassColor.r},${garden.grass.grassColor.g},${garden.grass.grassColor.b})`;
        document.getElementsByTagName("main")[0].appendChild(garden.grass.grassDiv);
      }
      createAndRenderTheGarden();

   
  //to render a flower (passed as an argument)
 

  // add numFlowers at one time
  for (let i = 0; i < garden.numFlowers; i++) {
    garden.flowers.push(new Flower());
    for (let i = 0; i < garden.numFlowers; i++) {
        // Create variables for our arguments for clarity
        let x = Math.random() * (window.innerWidth);
        let y = Math.random() * 120;
        let size = Math.random() * 30 + 50;
        let stemLength = Math.random() * 50 + 50;
        let petalColor = {
          r: parseInt(Math.random() * 155) + 100,
          g: parseInt(Math.random() * 155) + 100,
          b: parseInt(Math.random() * 155) + 100,
        };
   
        // Create a new flower using the arguments
        let flower = new Flower(x, y, size, stemLength, petalColor);
        // Add the flower to the array of flowers
        garden.flowers.push(flower);
      }
}

for (let i =0; i< garden.flowers.length; i++){
//  renderFlower(garden.flowers[i]);
garden.flowers[i].renderFlower();


}
     
   
}

