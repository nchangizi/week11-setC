// function greet(name, time = "day")
// {
//     console.log(`Good ${time} ${name}`);
// }

// // let input = prompt("what is your name?");
// // greet(input);
// greet("Neda");
// greet("Neda", "evening", "sandwich");

// const greet = function (name)
// {
//     console.log(`Hello ${name}`);
// }

// greet("Neda");
// let greet =  (name) =>
// {
//     console.log(`Hello ${name}`);
// }

// greet("Neda");

const radiusPara = document.querySelector("#radius");
console.log(radiusPara);
const resultPara = document.querySelector("#result");
console.log(resultPara);

function calculateCircleArea(radius) {
  if (isNaN(radius)) {
    // replace this alert by updating the text of resultPara
    resultPara.textContent = "This is not a number";
    // alert("This is not a number");
    return;
    // returns undefined by default
  } else {
    const area = Math.PI * radius ** 2;
    return area;
  }
}

let userValue = prompt("Enter a number");
// update the text of the radiuspara
radiusPara.textContent += userValue;
// prompt always returns a string
let result = calculateCircleArea(userValue);
if (result !== undefined) {
  // replace alert with updating text of resultPara
  resultPara.textContent = `The area of a circle with radius ${userValue} is ${result.toFixed(
    2
  )}`;

  //   alert(
  //     `The area of a circle with radius ${userValue} is ${result.toFixed(2)}`
  //   );
}
