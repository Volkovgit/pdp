// const firstPageContent = document.querySelector(".firstPageContent");
// const secondPageContent = document.querySelector(".secondPageContent");
// const firdPageContent = document.querySelector(".firdPageContent");
const contents = Array.from(document.querySelectorAll('.contentTest'))

window.onmessage = function (event) {
  contents.forEach((pageContent) => pageContent.classList.add("disp-none"));
  console.log(contents[event.data - 1]);
  contents[event.data - 1].classList.remove("disp-none");
};
