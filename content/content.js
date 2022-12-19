const contents = Array.from(document.querySelectorAll(".contentTest"));

window.onmessage = function (event) {
  contents.forEach((pageContent) => pageContent.classList.add("disp-none"));
  contents[event.data - 1].classList.remove("disp-none");
};
