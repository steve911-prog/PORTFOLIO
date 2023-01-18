console.log(5);

const circle = document.getElementById("#circle");
const upBtn = document.getElementById("#upBtn");
const downBtn = document.getElementById("#downBtn");

// const rotateValue = circle.style.transform;
const rotateSum = 0;

window.onload = function () {
  upBtn.onclick = function () {
    console.log("555555555555");
       rotateSum = rotateValue + "rotate(-90deg)";
       circle.style.transform = rotateSum;
       rotateValue = rotateSum;
  };
};

// 16:40

// window.addEventListener("load", function () {
//   document
//     .getElementById("id1")
//     .addEventListener("click", click_handler1, false);
//   document
//     .getElementById("id2")
//     .addEventListener("click", click_handler2, false);
// });
