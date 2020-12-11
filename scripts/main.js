let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "./images/OldCal.png") {
    myImage.setAttribute("src", "./images/NewCal.jpeg");
  } else {
    myImage.setAttribute("src", "./images/OldCal.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Calatheas are stunning, " + myName + "!";
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Calatheas are stunning, " + storedName + "!";
}

myButton.onclick = function () {
  setUserName();
};
