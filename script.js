let shipOne = document.querySelector(".ship-one");
let shipTwo = document.querySelector(".ship-two");
let shoot1 = document.querySelector(".shoot-1");
let shoot2 = document.querySelector(".shoot-2");

shipOne.addEventListener("click", () => {
  shoot1.style.display = "block";
  shoot1.style.transform = "translate(-10px, -1206px) rotate(-85deg)";
});

shipTwo.addEventListener("click", () => {
  shoot2.style.display = "block";
  shoot2.style.transform = "translate(-449px, -1168px) rotate(65deg)";
});

// *********************************
