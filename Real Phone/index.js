const circle = document.getElementById("circle");
let upBtn = document.getElementById("upBtn");
let downBtn = document.getElementById("downBtn");

let rotateValue = circle.style.transform;
let rotateSum = 0;

window.onload = function () {
  upBtn.onclick = function () {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
  };
  downBtn.onclick = function () {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
  };
};

//DON"T FORGT ABOUT ADAPtIVE LAYOUT AND KEYPRESS EVENT

// let upBttn = document.getElementById("upBtn");

// upBttn.addEventListener("keydown", function (event) {
//   console.log("work");
//   if (event.key === "Enter") {
//     console.log("I WORK");
//   }
// });

// console.log(typeof upBtn.onclick)

// 17:20

// window.addEventListener("load", function () {
//   document
//     .getElementById("id1")
//     .addEventListener("click", click_handler1, false);
//   document
//     .getElementById("id2")
//     .addEventListener("click", click_handler2, false);
// });
