const contents = Array.from(document.querySelectorAll(".content-page"));

window.onmessage = function (event) {
  console.log(event.data);
  contents.forEach((pageContent) => pageContent.classList.add("disp-none"));
  contents[event.data - 1].classList.remove("disp-none");
};
