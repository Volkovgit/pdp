export function setCheckBoxesEvent() {
  const checkBox = document.querySelector(".slideMenuButton__input");
  const sidebarMenu = document.querySelector(".sidebar");
  checkBox.addEventListener("change", function (event) {
    if (checkBox.checked) {
      sidebarMenu.classList.add("disp-block");
      sidebarMenu.classList.remove("disp-none");
    } else {
      sidebarMenu.classList.add("disp-none");
      sidebarMenu.classList.remove("disp-block");
    }
  });
}
