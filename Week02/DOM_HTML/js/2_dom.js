window.onload = setup
function setup(){
    // console.log("running setup");
    // console.log(document.getElementById("one"))
    // console.log(document.querySelector("#one"))
    // console.log(document.getElementsByTagName("div"));
    // console.log(document.getElementsByTagName("div").length);
    // console.log(document.getElementsByTagName("div")[0]);

    //document.querySelector("#two").children[0].innerHTML = "<h2> this is now a header</h2>";
    //first child of 2 is the p tag, reaplced it with the wanted text

    //get the group
let allSquareShapes = document.querySelectorAll(".square_shape");
//go through each element
for(let  singleSquareShape of allSquareShapes){
    //get children
   console.log(singleSquareShape.children[0])
   singleSquareShape.children[0].textContent+="adding content"
   //adds content to selected items, in this case, all the elemnts with class square shape
   document.querySelector(".square_shape").classList.remove("square_shape"); //first one only
  document.querySelector("p span").classList.add("change_span");
  //accessing class of Squareshape from the elements that had it, then adding to the first elements that has a span ag inside a p tag, 
  //pattern to access a child

  //how to add new elements?
  //new element
  let newDiv = document.createElement("div");
  newDiv.classList.add("square_shape");
  newDiv.innerHTML = "<p> NEW ELEMENT </p>";
  newDiv.style.backgroundColor = "purple";
  // need to tell the new element where to go, go through our DOM tree..
// access parent element
let parentElement = document.querySelector(".wrapper_flex_box")
//use appenCHild to append it!
parentElement.appendChild(newDiv)

let newDivTwo = document.createElement("div");
newDivTwo.classList.add("square_shape");
newDivTwo.innerHTML = "<p> NEW ELEMENT TWO </p>";
newDivTwo.style.backgroundColor = "yellow";
newDivTwo.querySelector("p").style.color = "black"
// access parent element
let sibling = document.querySelector("#three")
let parentElementAgain = document.querySelector(".wrapper_flex_box")
parentElementAgain.insertBefore(newDivTwo,sibling);
}
}

