const firstPageContent = document.querySelector(".firstPageContent");
const secondPageContent = document.querySelector(".secondPageContent");
const firdPageContent = document.querySelector(".firdPageContent");
const contents = [
  document.querySelector(".firstPageContent"),
  document.querySelector(".secondPageContent"),
  document.querySelector(".firdPageContent"),
];

window.onmessage = function (event) {
  firstPageContent.classList.add("disp-none");
  secondPageContent.classList.add("disp-none");
  firdPageContent.classList.add("disp-none");
  contents[event.data-1].classList.remove("disp-none")
};
