export function setEventListenerToSidebar() {
  const navRadioButtons = document.querySelectorAll(".sidebar-button__input");
  const frameContent = document.querySelector(".content-frame");
  const pages={
    testContent:'./components/main-content/content/testsContent.html',
    homeContent:'./components/main-content/content/homeTasksContent.html',
    aboutContent:'./components/main-content/content/aboutContent.html'
  }
  navRadioButtons.forEach((radio) =>
    radio.addEventListener("change", function (event) {
      let pageNumber = event.target.value;
      frameContent.setAttribute('src',pages[pageNumber])
    })
  );
}
