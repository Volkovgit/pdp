const burgerBtn = document.querySelector(".hamburger_btn");

let sidebarContainer;
let checkClickedHamburgerButton = 0;
burgerBtn.addEventListener("click", () => {
  checkSidebarContainer();
  console.log(object);
  if (checkClickedHamburgerButton === 0) {
    console.log("Нажал");
    checkClickedHamburgerButton = 1;
  } else {
    console.log("Отжал");
    checkClickedHamburgerButton = 0;
  }
});

function checkSidebarContainer() {
  if (document.querySelector(".hamburger_btn") != null)
    sidebarContainer = document.querySelector(".sidebar_container");
}
