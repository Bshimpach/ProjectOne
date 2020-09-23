let storys
let mat
let garage
let houseTotal
let finalTotal
let colorRange


function houseLvl(levels) {
  if (levels === 1) {
   storys = 175;
 } else if (levels === 2) {
   storys = 135;
 }
}

 function exteriorMaterial(material) {
   if ( material === 1) {
     mat = 0
    } else if (material === 2) {
      mat = 5000
      sqft = 10
    } else if (material === 3) {
      mat = 8000
      sqft = 10
    } else if (material === 4) {
      mat = 6000
    } else if (material === 5) {
      mat = 16000
}

function color(colortype) {
  if (colortype === 1) {
   colorRange = 'green';
 } else if (colortype === 2) {
   colorRange = 'yellow';
 } else if (colortype === 2) {
   colorRange = 'pink';
 }
}

let radios = document.getElementsByName('cost');

for (let i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
    // do whatever you want with the checked radio
    garage = (15000 * radios[i].value)
    // value of raido buttons = numbersofcars
    //radios[i].value
    // 15000 * car

    break;
  }
}
/*const init = () => {

  let house = document.querySelectorAll(".house");
  for(let i = 0; i < house.length; i++) {
    house[i].onclick = buyHouse();
  }
}*/

function userSquareFeet() {
  userSquareFeet = document.getElementById("squareFeet").value
  housetotal = userSquareFeet * story
  squareFootagePrice =  mat + (sqft * userSquareFeet)
  finalTotal = houseTotal + squareFootagePrice + garage

//when button is clicked display finalTotal in tag with id="total"
}
