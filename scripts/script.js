// // function greet(name, time = "day")
// // {
// //     console.log(`Good ${time} ${name}`);
// // }

// // // let input = prompt("what is your name?");
// // // greet(input);
// // greet("Neda");
// // greet("Neda", "evening", "sandwich");

// // const greet = function (name)
// // {
// //     console.log(`Hello ${name}`);
// // }

// // greet("Neda");
// // let greet =  (name) =>
// // {
// //     console.log(`Hello ${name}`);
// // }

// // greet("Neda");

// const radiusPara = document.querySelector("#radius");
// console.log(radiusPara);
// const resultPara = document.querySelector("#result");
// console.log(resultPara);

// function calculateCircleArea(radius) {
//   if (isNaN(radius)) {
//     // replace this alert by updating the text of resultPara
//     resultPara.textContent = "This is not a number";
//     // alert("This is not a number");
//     return;
//     // returns undefined by default
//   } else {
//     const area = Math.PI * radius ** 2;
//     return area;
//   }
// }

// let userValue = prompt("Enter a number");
// // update the text of the radiuspara
// radiusPara.textContent += userValue;
// // prompt always returns a string
// let result = calculateCircleArea(userValue);
// if (result !== undefined) {
//   // replace alert with updating text of resultPara
//   resultPara.textContent = `The area of a circle with radius ${userValue} is ${result.toFixed(
//     2
//   )}`;

//   //   alert(
//   //     `The area of a circle with radius ${userValue} is ${result.toFixed(2)}`
//   //   );
// }

function populateList(shoppingList) {
  // 1. select and store a ref to the ul -> querySelector
  const ulList = document.querySelector(".shopping");
  // 2. loop through the shoppingList -> for loop
  for (let item of shoppingList) {
    //      3. create an li -> createElement
    const newLi = document.createElement("li");
    //      4. append the li to the ul -> parent.appendChild(child)
    ulList.appendChild(newLi);
    //      5. update the textContent of the li with array item
    newLi.textContent = item;
  }
}

let myList = ["bread", "cheese", "green pepper"];
populateList(myList);
