const navRadioButtons = document.querySelectorAll('input[name="nav_radio"]');
const frameContent = document.querySelector(".content");

navRadioButtons.forEach((radio) =>
  radio.addEventListener("change", function (event) {
    let pageNumber = event.target.value;
    frameContent.contentWindow.postMessage(pageNumber, "*");
  })
);

const checkBox = document.querySelector("#openSidebarMenu");
const menuCheckBox = document.querySelector("#sidebar_container");
checkBox.addEventListener("change", function (event) {
  if (checkBox.checked) {
    menuCheckBox.classList.add("sidebar_container_visible");
    menuCheckBox.classList.remove("sidebar_container_hide");
  } else {
    menuCheckBox.classList.add("sidebar_container_hide");
    menuCheckBox.classList.remove("sidebar_container_visible");
  }
});

document.addEventListener("DOMContentLoaded", function(){
    frameContent.contentWindow.postMessage(1, "*");
});