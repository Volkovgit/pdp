export function setEventListenerToSidebar() {
  const navRadioButtons = document.querySelectorAll(".sidebar-button__input");
  const frameContent = document.querySelector(".content-frame");

  navRadioButtons.forEach((radio) =>
    radio.addEventListener("change", function (event) {
      let pageNumber = event.target.value;
      frameContent.contentWindow.postMessage(pageNumber, "*");
    })
  );
}
