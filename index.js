const navRadioButtons = document.querySelectorAll('input[name="nav_radio"]');
const frameContent = document.querySelector('.content');

navRadioButtons.forEach((radio) =>
  radio.addEventListener("change", function (event) {
    let pageNumber = event.target.value;
    frameContent.contentWindow.postMessage(pageNumber, "*");
  })
);





