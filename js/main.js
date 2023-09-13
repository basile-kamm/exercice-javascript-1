// box 1
var change = document.querySelector(".change-color");

var changeBlue = function () {
  change.classList.toggle("blue");
};

change.addEventListener("click", changeBlue);

// box 2
var toggle = document.querySelector(".toggle-color");

var toggleColor = function () {
  toggle.classList.toggle("toggle2");
};

toggle.addEventListener("click", toggleColor);

// box 3 and 4
var trigger = document.querySelector(".trigger");
var target = document.querySelector(".target");

var isTriggerd = function () {
  target.classList.toggle("triggerd");
};

trigger.addEventListener("click", isTriggerd);

// box 5
var triggerAll = document.querySelector(".trigger-all");

var isTriggerdAll = function () {
  changeBlue();
  toggleColor();
};
triggerAll.addEventListener("click", isTriggerdAll);

//
var triggerSelf = document.querySelector(".trigger-all-self");

var isTriggerdSelf = function () {
  changeBlue();
  toggleColor();
  triggerSelf.classList.toggle("green");
};

triggerSelf.addEventListener("click", isTriggerdSelf);
